import { Application } from "https://deno.land/x/oak@v7.5.0/mod.ts";
import router from "./router/routes.ts";
const { cwd, stdout, copy } = Deno;

const app = new Application();

const port = 6969;

app.addEventListener("error", (event) => {
    console.trace()
    console.log(event.error);
});

app.use(router.routes());
app.use(router.allowedMethods()); 

await app.listen({ port });