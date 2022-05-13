import axios from 'axios';
import users from "../mocks/users";

const api = axios.create({
  baseURL: `http://localhost:${process.env.REACT_APP_API_PORT || '3001'}`,
});

export const requestLogin = async (endpoint, body) => {
  const { data } = await api.post(endpoint, body);

  return data;
};

export const requestRegister = async (
  fullName,
  username,
  email,
  password,
) => {
  
  const inputs = [ fullName, username, email, password ];

  if (inputs.some((input) => !input)) {
    throw new Error('É necessário preencher todos os campos!');
  }

  const alreadyRegistered = users
    .find((user) => user.email === email);

  if (alreadyRegistered) {
    throw new Error('Este e-mail já possui uma conta!');
  }

  const newUser = { 
    fullName,
    username,
    email,
   };

  users.push(newUser);

  return newUser;
};
