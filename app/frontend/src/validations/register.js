import errorMessages from "./errorMessages";

const fullNameValidation = (fullName, error) => {
  if (fullName.length < 8 || fullName.length > 40) {
    return error;
  }
};

const usernameValidation = (username, error) => {
  if (username.length < 3 || username.length > 15) {
    return error;
  }
};

const emailValidation = (email, error) => {
  const correctEmailRegex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g;

  if (!correctEmailRegex.test(email)) {
    return error;
  }
};

const passwordValidation = (password, error) => {
  if (password < 7) {
    return error;
  }
};

const inputsSchema = (
  fullName,
  username,
  email,
  password,
) => [
  {
    error: fullNameValidation(fullName, errorMessages.fullName),
  },
  {
    error: usernameValidation(username, errorMessages.username),
  },
  {
    error: emailValidation(email, errorMessages.email),
  },
  {
    error: passwordValidation(password, errorMessages.password),
  },
];

const validateInputs = (...inputs) => {
  const invalid = inputsSchema(...inputs).find(input => input.error);

  if (invalid) return invalid.error;
  console.log('here');
  return null;
}
export default validateInputs;
