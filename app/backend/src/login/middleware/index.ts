import { NextFunction, Request, Response } from 'express';
import { emailSchema, passwordSchema } from '../schema';

const loginMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const { email, password } = req.body;

  const emailInputValidations = emailSchema(email);

  const passwordInputValidations = passwordSchema(password);

  const invalidData = [
    ...emailInputValidations,
    ...passwordInputValidations,
  ].find(({ invalid }) => invalid);

  if (invalidData) {
    const { code, message } = invalidData;

    return res.status(code).json({ message });
  }

  next();
};

export default loginMiddleware;
