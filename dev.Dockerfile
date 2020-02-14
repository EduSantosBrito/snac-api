FROM node:13.8-slim

WORKDIR /usr/src/app

COPY . .

RUN yarn

CMD [ "./node_modules/nodemon/bin/nodemon.js", "-e", "ts", "--exec", "yarn run compile"]