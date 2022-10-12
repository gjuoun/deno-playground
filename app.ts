import { Application } from "./mod.ts";
import { add, eq } from 'https://deno.land/x/lodash@4.17.15-es/lodash.js';

const app = new Application();

console.log(eq(1,1 ))

app.use((ctx) => {
  ctx.response.body = "Hello World! Jun";
});

await app.listen({ port: 8000 });