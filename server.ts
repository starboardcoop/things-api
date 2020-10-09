import { Router, Application } from "https://deno.land/x/oak/mod.ts";
import * as Things from "./things.ts"; 

const router = new Router();

router.get('/', (ctx) => {
    ctx.response.body = "Welcome to the Things API."
});

// GET: all things
router.get('/things', (ctx) => {
    ctx.response.body = Things.all();
});

const app = new Application();
app.use(router.routes());
app.use(router.allowedMethods());
app.listen({ port: 8000 });

console.log("Things API server is running.");