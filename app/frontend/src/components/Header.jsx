import PropTypes from 'prop-types';
import React from 'react';
import GetItLogo from './GetItLogo';
import '../styles/components/Header.css';
import LoginButton from './LoginButton';
import LogOutButton from './LogOutButton';
import RegisterProductButton from './RegisterProductButton';
import HeaderUserInfo from './HeaderUserInfo';
import { getUserPoints } from '../utilis';
import NavLinkItem from './NavLinkItem';
import Context from '../context/Context';

const pageComponents = {
  login: () => (
    <>
      <GetItLogo />
      <LoginButton />
    </>
  ),
  userView: () => {
    const { userBalance } = React.useContext(Context);

    return (
      <>
        <GetItLogo />
        <div className="user-infos-container">
          <HeaderUserInfo title="Seus pontos:" info={(getUserPoints()).toString()} />
          <HeaderUserInfo title="Seu saldo:" info={`R$ ${userBalance.toPrecision(2)}`} />
        </div>
        <nav>
          <ul className="nav-list">
            <NavLinkItem title="Ver Carrinho" href="/user/cart" />
            <NavLinkItem title="Realizar Depósito" href="/user/deposit" />
          </ul>
        </nav>
        <LogOutButton />
      </>
    );
  },
  productsAdminView: () => (
    <>
      <GetItLogo />
      <RegisterProductButton />
      <LogOutButton />
    </>
  ),
};

function Header({ page }) {
  return (
    <header data-testid="get-it-header">
      { pageComponents[page]() }
    </header>
  );
}

Header.propTypes = {
  page: PropTypes.string.isRequired,
};

export default Header;
