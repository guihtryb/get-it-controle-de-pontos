const invalidEmail = (userEmail: string): boolean => {
  const correctEmail = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g;
  return !correctEmail.test(userEmail.toLowerCase());
};

export default invalidEmail;