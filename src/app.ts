import express from 'express';
import 'express-async-errors';
import cors from 'cors';
import dotenv from 'dotenv';
import router from './routes/index';
import errorHandlerMW from './middlewares/errorHandlerMW';

dotenv.config();

const app = express();
app.use(express.json(), cors());
app.use(router);
app.use(errorHandlerMW);

app.listen(process.env.PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Server running at port ${process.env.PORT}`);
});
