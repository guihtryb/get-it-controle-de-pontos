import * as bcrypt from 'bcryptjs';

export const compare = async (
  inputPassword:string,
  dbPassword: string
) => await bcrypt.compare(inputPassword, dbPassword);

export const hash = async (
  inputPassword:string,
  saltRounds: number
) => {
  const salt = await bcrypt.genSalt(saltRounds);

  const hashedPass = await bcrypt.hash(inputPassword, salt);

  return hashedPass;
};
