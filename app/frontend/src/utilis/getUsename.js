/* eslint-disable import/prefer-default-export */
export const getUsername = () => {
  const { user: { username } } = JSON.parse(localStorage.getItem('user'));
  return username;
};
