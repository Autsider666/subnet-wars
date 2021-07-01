ARG NODE_VERSION=16

FROM node:${NODE_VERSION}-alpine AS server-default

EXPOSE 8080

WORKDIR /usr/src/server

COPY package*.json ./

RUN npm install

FROM server-default as server-production

ENV NODE_ENV production

COPY src ./src

CMD ["npm", "build"]
CMD ["npm", "start"]

FROM server-default as server-development

ENV NODE_ENV development
ENV ACCESS_TOKEN_SECRET CHANGEME
ENV REFRESH_TOKEN_SECRET CHANGEME
ENV ACCESS_TOKEN_LIFE 1h
ENV REFRESH_TOKEN_LIFE 7w

CMD ["npm", "start"]