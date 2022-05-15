import * as express from 'express';
import loginRouter from './routes/LoginRouter';
import cors = require('cors');
import userRouter from './routes/UserRouter';
import productsRouter from './routes/ProductsRouter';

const app = express();

app.use(cors());

app.use(express.json());

app.use('/login', loginRouter);

app.use('/users', userRouter);

app.use('/products', productsRouter);

export default app;
