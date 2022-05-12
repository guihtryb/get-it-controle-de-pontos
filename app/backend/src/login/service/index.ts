import { compare } from '../../bcrypt';
import Users from '../../database/models/Users';
import { IUserLoginInfos } from '../../interfaces';


const getUser = async (email: string, password: string): Promise<IUserLoginInfos | null> => {  
  const user = await Users.findOne({ where: { email } });

  if (!user) return null;

  const comparePass = await compare(password, user.password);

  if (!comparePass) return null;

  const userInfos: IUserLoginInfos = {
    id: user.id,
    fullName: user.fullName,
    username: user.username,
    email: user.email,
    role: user.role,
    points: user.points,
  };

  return userInfos;
};

export default getUser;
