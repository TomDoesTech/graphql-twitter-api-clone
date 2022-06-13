## Server
yarn add ts-node-dev typescript -D

yarn add graphql@^15.3.0 class-validator type-graphql reflect-metadata apollo-server-fastify apollo-server-core fastify graphql argon2 @fastify/cookie @fastify/jwt prisma subscriptions-transport-ws @prisma/client

npx tsc --init

npx prisma init

npx prisma migrate dev --name init

It's important to set these options in the tsconfig.json file of our project:

{
  "emitDecoratorMetadata": true,
  "experimentalDecorators": true
}

## Client
yarn create next-app --typescript client 

yarn add @graphql-codegen/cli @graphql-codegen/typescript-operations @graphql-codegen/typescript-react-query -D

yarn add graphql react-query

yarn graphql-codegen init
