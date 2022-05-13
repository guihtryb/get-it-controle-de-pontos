import { Request, Response } from 'express';
import { StatusCode, ErrorMessage } from '../../enums';
import { createUser } from '../service';

const userPostController = async (req: Request, res: Response) => {
  const { fullName, username, email, password } = req.body;

  const newUser = await createUser(fullName, username, email, password);

  if (!newUser) {
    return res.status(StatusCode.CONFLICT).json({ message: ErrorMessage.CONFLICT });
  }

  return res.status(StatusCode.SUCCESSFULLY_CREATED).json({ user: newUser });
};

export default userPostController;
