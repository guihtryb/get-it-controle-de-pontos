import * as express from 'express';
import loginRouter from './routes/LoginRouter';

const app = express();

app.use(express.json());

app.use('/login', loginRouter);

export default app;
