// index.js

"use strict";

const koa = require("koa");

const app = new koa();
app.use(function* () {
  this.body = "Hello World !!!";
});

app.listen(1234);
