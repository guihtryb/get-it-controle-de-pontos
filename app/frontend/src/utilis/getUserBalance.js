export default function getUserBalance() {
  const { user: { balance } } = JSON.parse(localStorage.getItem('user'));
  return balance;
}
