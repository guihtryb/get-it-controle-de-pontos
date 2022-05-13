import { Router } from 'express';
import { userPostController }from '../user/controller/';
import { userPostMiddleware } from '../user/middleware/';

const userRouter = Router();

userRouter.post('/', userPostMiddleware, userPostController);

export default userRouter;
