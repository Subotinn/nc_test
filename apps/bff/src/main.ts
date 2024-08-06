/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import express from 'express';
import * as path from 'path';
import * as routes from './routes';
import './mock/index';

const app = express();

routes.register(app);

app.use('/assets', express.static(path.join(__dirname, 'assets')));

const port = process.env.PORT || 3333;
const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/api`);
});
server.on('error', console.error);
