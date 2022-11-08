FROM node:18
RUN \ 
  apt update && \
  npm install -g typescript && \
  npm install -g ts-node


WORKDIR /app