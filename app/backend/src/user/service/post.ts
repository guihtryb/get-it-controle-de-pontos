import { hash } from '../../bcrypt';
import Users from '../../database/models/Users';
import { IUserRegisterInfos } from '../../interfaces';


const createUser = async (
  fullName: string,
  username: string,
  email: string,
  password: string,
  ): Promise<IUserRegisterInfos | null> => {  
  const alreadyExist = await Users.findOne({ where: { email } });

  if (alreadyExist) return null;

  const hashedPassword = await hash(password, 12);

  const userInfos: IUserRegisterInfos = {
    fullName,
    username,
    email,
    role: 'user',
    points: 0,
    hashedPassword,
  };

  await Users.create({
    fullName,
    username,
    email,
    role: 'user',
    points: 0,
    password: hashedPassword,
  });

  return userInfos;
};

export default createUser;
