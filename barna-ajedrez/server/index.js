const Koa = require('koa');
const app = new Koa();
const bodyParser = require('koa-bodyparser');
const router = require('./router');
const PORT = 3005;
const logger = require('koa-logger');

app
  .use(logger())
  .use(bodyParser())
  .use(router.routes());

app.listen(PORT, () => console.log(`Now listening on port: ${PORT}`));
