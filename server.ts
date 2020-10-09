import { Router, Application } from "https://deno.land/x/oak/mod.ts";

const router = new Router();

router.get('/', (ctx) => {
    ctx.response.body = "Welcome to the Things API."
});

// GET: all things
router.get('/things', (ctx) => {
    const things = {
        things: [
            {
                name: 'Projector',
                quantity: 1,
                available: 1
            },
            {
                name: '10-foot Ladder',
                quantity: 2,
                available: 1
            }
        ]
    };

    ctx.response.body = things;
});

const app = new Application();
app.use(router.routes());
app.use(router.allowedMethods());
app.listen({ port: 8000 });

console.log("Things API server is running.");