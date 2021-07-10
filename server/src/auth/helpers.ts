import { User } from '@prisma/client';
import jwt from 'jsonwebtoken';
import { matchMaker } from 'colyseus';
import bcrypt from 'bcryptjs';
import { generateSystem } from '../database/functions';
import database from '../database';
import { randomIp } from '../helpers/ipv4Generator';


type UserPayload = {
    username: string;
    exp?: string;
};

const ACCESS_TOKEN_SECRET = process.env.ACCESS_TOKEN_SECRET;
const ACCESS_TOKEN_LIFE = process.env.ACCESS_TOKEN_LIFE;

const findUserByCredentials = async (
    username,
    password
): Promise<User | null> => {
    if (!username || !password) {
        return null;
    }

    const user = await database.user.findFirst({where: {username}});
    if (!user) {
        return null;
    }

    if (await bcrypt.compare(password, user.password)) {
        return user;
    }

    return null;
};

const generateAccessToken = (payload: UserPayload): string => {
    delete payload.exp;
    return jwt.sign(payload, ACCESS_TOKEN_SECRET, {
        algorithm: 'HS256',
        expiresIn: ACCESS_TOKEN_LIFE,
    });
};

export const login = async (request, response) => {
    const {username, password} = request.body;
    const user = await findUserByCredentials(username, password);

    if (user === null) {
        return response.status(401).send();
    }

    const payload: UserPayload = {username: username};

    const accessToken = generateAccessToken(payload);

    const system = await database.system.findFirst({where: {user}})

    response.cookie('accessToken', accessToken, {secure: true, httpOnly: true});
    response.send(
        await matchMaker.joinOrCreate('os', {
            user,
            system,
        })
    );
};

export const refresh = async (req, res): Promise<void> => {
    const {accessToken} = req.cookies;
    if (!accessToken) {
        return res.status(403).send();
    }

    let payload: UserPayload;
    try {
        payload = jwt.verify<UserPayload>(accessToken, ACCESS_TOKEN_SECRET);
    } catch (e) {
        return res.status(401).send();
    }

    const user = await database.user.findFirst({where: {username: payload.username}});
    if (!user) {
        return res.status(401).send();
    }

    const newToken = generateAccessToken(payload);

    const system = await database.system.findFirst({where: {user}})

    res.cookie('accessToken', newToken, {secure: true, httpOnly: true});
    res.send(
        await matchMaker.joinOrCreate('os', {
            user, system
        })
    );
};

export const logout = async (req, res) => {
    const {accessToken} = req.cookies;
    if (!accessToken) {
        return res.send();
    }

    res.clearCookie('accessToken');

    res.send();
};

export const register = async (request, response) => {
    const {username, password} = request.body;
    try {
        while (true) {
            const ip = randomIp('192.168.0.0', 16);
            if (!await database.system.findFirst({where: {ip}})) {
                const system = await generateSystem();
                await database.user.create({data: {username, password, systemIp: system.ip}});

                break;
            }
        }

        await login(request, response);
    } catch (e) {
        response.status(400).send();
    }
};
