FROM node:20-alpine

EXPOSE 3000

COPY /src/assets/data/administrativo.json /opt/administrativo.json

RUN yarn global add json-server

CMD ["json-server", "-H", "0.0.0.0", "/opt/administrativo.json"]