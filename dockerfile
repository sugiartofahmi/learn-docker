FROM node:19-alpine

WORKDIR /app

COPY . .

RUN yarn 

EXPOSE 8000

CMD ["yarn","server"]

