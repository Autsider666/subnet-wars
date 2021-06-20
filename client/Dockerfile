ARG NODE_VERSION=14

FROM node:${NODE_VERSION}-alpine AS client-default

EXPOSE 3000

WORKDIR /usr/src/client

COPY package*.json ./

ENV NEXT_TELEMETRY_DISABLED 1

RUN npm install

# Production #
FROM client-default as client-production

ENV NODE_ENV production

CMD ["npm", "build"]
CMD ["npm", "start"]

# Development #
FROM client-default as client-development

ENV NODE_ENV development

CMD ["npm", "run", "dev"]