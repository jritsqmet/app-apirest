##################################
#1 paso - Angular
FROM node:19-alpine3.16 AS build-env

WORKDIR /app

COPY . ./

RUN npm install
RUN npm run build

###############################
#2 paso - ngInx
FROM nginx:1.23.3-alpine

COPY --from=build-env /app/dist/app-apirest/ /usr/share/nginx/html

COPY ./nginx.conf /etc/nginx/conf.d/default.conf

CMD ["nginx", "-g", "daemon off;"]