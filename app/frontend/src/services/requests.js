import users from "../mocks/users";

export const requestLogin = async (email, password) => {
  const inputs = [email, password];

  if (inputs.some((input) => !input)) {
    throw new Error('É necessário preencher todos os campos!');
  }

  const validUser = users
    .find((user) => user.email === email && user.password === password);

  if (!validUser) {
    throw new Error('Senha ou email incorretos! Por favor, tente novamente.');
  }

  delete validUser.password; /* wip - afim de simulação do retorno da API*/

  const simulatedAnswer = {
    token: `ztokensu7${validUser.userName}x3ef`,
    user: validUser,
  };

  return simulatedAnswer;
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
