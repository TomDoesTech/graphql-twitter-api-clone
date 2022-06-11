import "reflect-metadata";
import { createServer } from "./utils/createServer";

async function main() {
  const { app, server } = await createServer();

  app.get("/healthcheck", async () => "OK");

  await server.start();

  app.register(
    server.createHandler({
      cors: false,
    })
  );

  await app.listen({
    port: 4000,
  });

  console.log(`Server ready at http://localhost:4000${server.graphqlPath}`);
}

main();
