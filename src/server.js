import koa from "koa";

const app = new koa();

app.use(ctx => {
  ctx.body = "Herro";
});

app.listen(4000);
console.log("Now listening on port 4000..");
