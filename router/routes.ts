import { Router, send } from "https://deno.land/x/oak@v7.5.0/mod.ts";

const router = new Router();

const testResponse = async ( { response }: { response: any }) =>{

    const body = await Deno.readTextFile(
        Deno.cwd() + "/static/html/index.html",
    );

    response.status = 200
    response.headers.set("Content-Type", "text/html")
    response.body = body
    
}

// Serve static content
router
.get("/static/:path+", async (ctx) => {
    await send(ctx, ctx.request.url.pathname, {
      root: Deno.cwd(),
    });
  })
.get("/", testResponse)



export default router;