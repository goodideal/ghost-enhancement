FROM library/node:slim

COPY . /app
WORKDIR /app

RUN cd /app && \
    npm i --omit=dev

CMD ["npm", "start"]