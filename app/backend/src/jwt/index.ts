import * as jwt from 'jsonwebtoken';
import 'dotenv/config';
import { IUserTokenData } from '../interfaces';

const secret = process.env.SECRET as string || 'GET_IT';

const createToken = (userData: IUserTokenData) => jwt.sign(
  { data: userData },
  secret,
  {
    expiresIn: '5d',
    algorithm: 'HS256',
  },
);

const verifyToken = (token: string) => jwt.verify(token, secret);

export {
  createToken,
  verifyToken,
};
