/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import express from 'express';
import * as path from 'path';
import * as routes from './routes';
import './mock/index';

const app = express();
const port = process.env.PORT || 3333;

routes.register(app);

app.use('/assets', express.static(path.join(__dirname, 'assets')));
app.use((_, res, next) => {
  res.set("Access-Control-Allow-Origin", "*");
  res.set(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, PATCH, OPTIONS"
  );
  res.set(
    "Access-Control-Allow-Headers",
    "X-Requested-With, content-type, Authorization"
  );
  res.set("Referrer-Policy", "strict-origin-when-cross-origin");
  next();
});

const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/api`);
});
server.on('error', console.error);
