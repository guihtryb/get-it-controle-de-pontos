export const getUserPoints = () => {
  const { user: { points } }  = JSON.parse(localStorage.getItem('user'));
  return points;
};
