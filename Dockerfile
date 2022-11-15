FROM node:14
WORKDIR /.
COPY package.json app.js ./
RUN npm i
EXPOSE 80
CMD ["node","app.js"]