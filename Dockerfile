FROM node:16

WORKDIR /coolapi/version1

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3000

# prvide additional running functions to the command by using ","
CMD ["npm", "start"]