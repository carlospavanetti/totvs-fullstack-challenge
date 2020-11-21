# LTS
FROM node:14.15-alpine as build-stage

WORKDIR /app

COPY package.json yarn.lock ./
RUN yarn install

COPY . .

RUN yarn build

FROM node:14.15-alpine as final-image

WORKDIR /app
COPY --from=build-stage /app/node_modules node_modules/
COPY --from=build-stage /app/dist dist/

EXPOSE 8000

CMD [ "node", "dist/src/index.js" ]