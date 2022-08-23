FROM library/node:lts-alpine

COPY . /app
WORKDIR /app

RUN apk install -U git

RUN npm install -g npm@latest && \
    cd /app && \
    npm i --omit=dev

CMD ["npm", "start"]