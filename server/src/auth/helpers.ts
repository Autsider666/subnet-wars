import { User } from '@prisma/client';
import { Request, Response } from 'express';
import jwt, { JwtPayload } from 'jsonwebtoken';
import { matchMaker } from 'colyseus';
import bcrypt from 'bcryptjs';
import { generateSystem } from '../database/functions';
import database from '../database';
import { randomIp } from '../helpers/ipv4Generator';

const ACCESS_TOKEN_SECRET = process.env.ACCESS_TOKEN_SECRET;
const ACCESS_TOKEN_LIFE = process.env.ACCESS_TOKEN_LIFE;

const findUserByCredentials = async (username: string, password: string): Promise<User | null> => {
  if (!username || !password) {
    return null;
  }

  const user = await database.user.findFirst({ where: { username } });
  if (!user) {
    return null;
  }

  if (await bcrypt.compare(password, user.password)) {
    return user;
  }

  return null;
};

const generateAccessToken = (payload: JwtPayload): string => {
  delete payload.exp;
  return jwt.sign(payload, ACCESS_TOKEN_SECRET, {
    algorithm: 'HS256',
    expiresIn: ACCESS_TOKEN_LIFE,
  });
};

export const login = async (
  request: { body: { username: string; password: string } },
  response: Response
): Promise<Response> => {
  const { username, password } = request.body;
  const user = await findUserByCredentials(username, password);

  if (user === null) {
    return response.status(401).send();
  }

  const payload: JwtPayload = { username: username };

  const accessToken = generateAccessToken(payload);

  const system = await database.system.findFirst({ where: { user } });

  response.cookie('accessToken', accessToken, { secure: true, httpOnly: true });
  return response.send(
    await matchMaker.joinOrCreate('os', {
      user,
      system,
    })
  );
};

export const refresh = async (request: Request, response: Response): Promise<Response> => {
  const { accessToken } = request.cookies;
  if (!accessToken) {
    return response.status(403).send();
  }

  let payload: JwtPayload | string;
  try {
    payload = jwt.verify(accessToken, ACCESS_TOKEN_SECRET);
  } catch (e) {
    return response.status(401).send();
  }

  if (typeof payload === 'string') {
    return response.status(401).send();
  }

  const user = await database.user.findFirst({ where: { username: payload.username } });
  if (!user) {
    return response.status(401).send();
  }

  const newToken = generateAccessToken(payload);

  const system = await database.system.findFirst({ where: { user } });

  response.cookie('accessToken', newToken, { secure: true, httpOnly: true });
  return response.send(
    await matchMaker.joinOrCreate('os', {
      user,
      system,
    })
  );
};

export const logout = async (request: Request, response: Response): Promise<Response> => {
  const { accessToken } = request.cookies;
  if (!accessToken) {
    return response.send();
  }

  response.clearCookie('accessToken');

  return response.send();
};

export const register = async (request: Request, response: Response): Promise<Response> => {
  const { username, password } = request.body;
  try {
    const system = await generateSystem();
    await database.user.create({ data: { username, password, systemIp: system.ip } });

    await login(request, response);
  } catch (e) {
    console.error(e);
    return response.status(400).send();
  }
  return response.status(201).send();
};
