import * as express from 'express';
import loginRouter from './routes/LoginRouter';
import cors = require('cors');

const app = express();

app.use(cors());

app.use(express.json());

app.use('/login', loginRouter);

export default app;
