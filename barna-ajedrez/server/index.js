const Koa = require('koa');
const app = new Koa();
const bodyParser = require('koa-bodyparser');
const router = require('./router');
const PORT = 3001;
const logger = require('koa-logger');
const cors = require('@koa/cors');
// const corsOptions = ({

// })
//{origin: 'http://localhost:3000/*'}
app
  .use(cors())
  .use(logger())
  .use(bodyParser())
  .use(router.routes());

app.listen(PORT, () => console.log(`Now listening on port: ${PORT}`));
