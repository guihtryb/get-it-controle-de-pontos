import * as express from 'express';
import loginRouter from './routes/LoginRouter';
import cors = require('cors');
import userRouter from './routes/UserRouter';

const app = express();

app.use(cors());

app.use(express.json());

app.use('/login', loginRouter);

app.use('/user', userRouter);

export default app;
