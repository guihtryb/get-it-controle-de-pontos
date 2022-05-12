import * as bcrypt from 'bcryptjs';

export const compare = async (
  inputPassword:string,
  dbPassword: string
) => await bcrypt.compare(inputPassword, dbPassword);
