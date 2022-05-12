import { Request, Response } from 'express';
import { createToken } from '../../jwt';
import { StatusCode, ErrorMessage } from '../../enums';
import getUser from '../service';

const loginPostController = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  const userInfos = await getUser(email, password);

  if (!userInfos) {
    return res.status(StatusCode.UNAUTHORIZED).json({ message: ErrorMessage.UNAUTHORIZED });
  }

  const userToken = createToken(userInfos);

  return res.status(StatusCode.SUCCESSFULLY_REQUEST).json({ user: userInfos, token: userToken });
};

export default loginPostController;
