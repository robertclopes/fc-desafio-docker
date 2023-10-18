FROM node:latest

RUN apt-get update && apt-get install wget -y

WORKDIR /usr/src/app
COPY ./package*.json ./

COPY ./ .

RUN npm install

ENV DOCKERIZE_VERSION v0.7.0

RUN wget -O - https://github.com/jwilder/dockerize/releases/download/$DOCKERIZE_VERSION/dockerize-linux-amd64-$DOCKERIZE_VERSION.tar.gz | tar xzf - -C /usr/local/bin \
    && apt-get autoremove -yqq --purge wget && rm -rf /var/lib/apt/lists/*

EXPOSE 3000