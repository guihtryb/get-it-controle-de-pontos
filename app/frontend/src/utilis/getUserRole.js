/* eslint-disable import/prefer-default-export */
export const getUserRole = () => {
  const { user: { role } } = JSON.parse(localStorage.getItem('user'));
  return role;
};
