export default function getUserRole() {
  const { user: { role } } = JSON.parse(localStorage.getItem('user'));
  return role;
}
