import { NextFunction, Request, Response } from 'express';
import { fullNameSchema, usernameSchema, emailSchema, passwordSchema } from '../schema';

const registerMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const { fullName, username, email, password } = req.body;

  const fullNameInputValidations = fullNameSchema(fullName);

  const usernameInputValidations = usernameSchema(username);

  const emailInputValidations = emailSchema(email);

  const passwordInputValidations = passwordSchema(password);

  const invalidData = [
    ...fullNameInputValidations,
    ...usernameInputValidations,
    ...emailInputValidations,
    ...passwordInputValidations,
  ].find(({ invalid }) => invalid);

  if (invalidData) {
    const { code, message } = invalidData;

    return res.status(code).json({ message });
  }
  next();
};

export default registerMiddleware;
