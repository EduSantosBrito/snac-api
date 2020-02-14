FROM node:13.8-slim

WORKDIR /usr/src/app

COPY . .

RUN yarn && yarn run tsc

CMD [ "yarn", "start" ]