FROM node:14-alpine3.15

WORKDIR /app

RUN yarn install

COPY . .

CMD ["yarn", "start:dev"]