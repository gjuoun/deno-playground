import { Application } from "./mod.ts";

const app = new Application();

app.use((ctx) => {
  ctx.response.body = "Hello World! Jun";
});

await app.listen({ port: 8000 });