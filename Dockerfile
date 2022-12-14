FROM node:16.14.2-alpine3.15 as build

WORKDIR /app

COPY ./package.json ./
COPY ./package-lock.json ./

RUN npm ci

COPY ./ ./

RUN npx ng build --configuration production

FROM nginx:1.23.0-alpine

COPY ./build/nginx/nginx.conf /etc/nginx/nginx.conf
COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 8080
