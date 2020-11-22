# Build express+ts project stage
FROM node:14.15-alpine as backend-stage

WORKDIR /app

COPY package.json yarn.lock ./
RUN yarn install

COPY tsconfig.json src ./

RUN yarn build

# Build Vue.js project stage
FROM node:14.15-alpine as frontend-stage

WORKDIR /app

COPY frontend/package.json frontend/yarn.lock ./
RUN yarn install

COPY frontend/ .

RUN yarn build

# LTS version
FROM node:14.15-alpine as final-image

WORKDIR /app
COPY --from=backend-stage /app/node_modules node_modules/
COPY --from=backend-stage /app/dist ./
COPY --from=frontend-stage /app/dist public/

EXPOSE 8000

CMD [ "node", "index.js" ]