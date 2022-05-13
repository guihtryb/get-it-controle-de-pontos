import GetItLogo from "./GetItLogo";
import LoginButton from "./LoginButton";
import '../styles/components/Header.css';

const Header = () => {
  return (
    <header data-testid="get-it-header">
      <GetItLogo />
      <LoginButton />
    </header>
  );
};

export default Header;