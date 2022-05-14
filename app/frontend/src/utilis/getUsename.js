export const getUsername = () => {
  const { user: { username } }  = JSON.parse(localStorage.getItem('user'));
  return username;
};
