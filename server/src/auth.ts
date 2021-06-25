import jwt from "jsonwebtoken";
import { matchMaker } from "colyseus";

type UserPayload = {
  username: string;
  exp?: string;
};

const users = {
  yorick: {
    password: "test",
  },
};

const ACCESS_TOKEN_SECRET = process.env.ACCESS_TOKEN_SECRET;
const ACCESS_TOKEN_LIFE = process.env.ACCESS_TOKEN_LIFE;

const REFRESH_TOKEN_SECRET = process.env.REFRESH_TOKEN_SECRET;
const REFRESH_TOKEN_LIFE = process.env.REFRESH_TOKEN_LIFE;

const generateAccessToken = (payload: UserPayload): string => {
  delete payload.exp;
  return jwt.sign(payload, ACCESS_TOKEN_SECRET, {
    algorithm: "HS256",
    expiresIn: ACCESS_TOKEN_LIFE,
  });
};

const updatePlayerState = (payload: UserPayload) => {
  users[payload.username].refreshToken = jwt.sign(
    payload,
    REFRESH_TOKEN_SECRET,
    {
      algorithm: "HS256",
      expiresIn: REFRESH_TOKEN_LIFE,
    }
  );
};

export const login = async (request, response) => {
  const { username, password } = request.body;

  if (!username || !password || users[username]?.password !== password) {
    return response.status(401).send();
  }

  const payload: UserPayload = { username: username };

  const accessToken = generateAccessToken(payload);

  updatePlayerState(payload);

  response.cookie("jwt", accessToken, { secure: true, httpOnly: true });
  response.send(
    await matchMaker.joinOrCreate("os", {
      username: payload.username,
    })
  );
};

export const refresh = async (req, res) => {
  const accessToken = req.cookies.jwt;
  if (!accessToken) {
    return res.status(403).send();
  }

  let payload: UserPayload;
  try {
    payload = jwt.verify<UserPayload>(accessToken, ACCESS_TOKEN_SECRET);
  } catch (e) {
    return res.status(401).send();
  }

  const refreshToken = users[payload.username]?.refreshToken;

  try {
    jwt.verify(refreshToken, REFRESH_TOKEN_SECRET);
  } catch (e) {
    return res.status(401).send();
  }

  const newToken = generateAccessToken(payload);

  res.cookie("accessToken", newToken, { secure: true, httpOnly: true });
  res.send(
    await matchMaker.joinOrCreate("os", {
      username: payload.username,
    })
  );
};

export const logout = async (req, res) => {
  const { accessToken } = req.cookies;
  if (!accessToken) {
    return res.send();
  }

  let payload: UserPayload;
  try {
    payload = jwt.verify<UserPayload>(accessToken, ACCESS_TOKEN_SECRET);
  } catch (e) {
    return res.send();
  }

  const refreshToken = users[payload.username]?.refreshToken;
  try {
    jwt.verify(refreshToken, REFRESH_TOKEN_SECRET);
  } catch (e) {
    return res.send();
  }

  delete users[payload.username].refreshToken;
  res.send();
};
