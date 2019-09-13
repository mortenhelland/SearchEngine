FROM node:alpine

WORKDIR /usr/app

COPY package.json .

RUN npm install 

COPY . .

RUN npm install --prefix client

CMD [ "npm", "run", "dev" ]

