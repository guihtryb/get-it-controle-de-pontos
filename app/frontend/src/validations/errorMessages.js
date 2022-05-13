const errorMessages = { 
  400: 'Todos os campos precisam ser preenchidos! Por favor tente novamente.',
  401: 'Senha ou email incorretos!  Por favor tente novamente.',
  409: 'Usuário já cadastrado com esse email!',
  fullName: 'Nome Completo deve ter no mínimo 10 e no máximo 40 caracteres.',
  username: 'Username deve ter no mínimo 3 e no máximo 15 caracteres.',
  email: 'Insira um email válido.',
  password: 'Senha deve ter ao mínimo 7 caracteres.',
  defaultMessage: 'Algo de inesperado aconteceu. Por favor, tente novamente.',
};

export default errorMessages;