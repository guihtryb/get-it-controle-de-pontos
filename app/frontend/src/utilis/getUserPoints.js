export default function getUserPoints() {
  const { user: { points } } = JSON.parse(localStorage.getItem('user'));
  return points;
}
