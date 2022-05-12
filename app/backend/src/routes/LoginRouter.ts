import { Router } from 'express';
import loginPostController from '../login/controller/post';
import loginMiddleware from '../login/middleware';

const loginRouter = Router();

loginRouter.post('/', loginMiddleware, loginPostController);

export default loginRouter;
