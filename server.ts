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

// GET: all available things
router.get('/things/available', (ctx) => {
    ctx.response.body = Things.allAvailable();
});

// GET: thing by id
router.get('/things/:id', (ctx) => {
    ctx.response.body = Things.get(ctx.params.id);
});

const app = new Application();
app.use(router.routes());
app.use(router.allowedMethods());
app.listen({ port: 8000 });

console.log("Things API server is running.");