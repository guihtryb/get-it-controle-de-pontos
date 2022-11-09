export default function getUsername() {
  const { user: { username } } = JSON.parse(localStorage.getItem('user'));
  return username;
}
