ARG NODE_VERSION=16

FROM node:${NODE_VERSION}-alpine AS pwa-default

EXPOSE 3000

WORKDIR /usr/src/pwa

COPY package*.json ./

RUN npm install

# Production #
FROM pwa-default as pwa-production

ENV NODE_ENV production

CMD ["npm", "start"]

# Development #
FROM pwa-default as pwa-development

ENV NODE_ENV development

CMD ["npm", "start"]