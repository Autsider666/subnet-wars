ARG NODE_VERSION=16

FROM node:${NODE_VERSION}-alpine AS server-default

EXPOSE 8080

WORKDIR /usr/src/server

COPY package*.json ./

RUN npm install

COPY . .

FROM server-default as server-production

ENV NODE_ENV production

COPY src ./src

CMD ["npm", "build"]
CMD ["npm", "start"]

FROM node:${NODE_VERSION}-alpine as server-development

ENV NODE_ENV development

WORKDIR /usr/src/server

COPY package*.json .

RUN npm install
COPY . .
RUN npx prisma generate


CMD ["npm", "start"]

EXPOSE 8080