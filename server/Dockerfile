ARG NODE_VERSION=14

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

CMD ["npm", "start"]