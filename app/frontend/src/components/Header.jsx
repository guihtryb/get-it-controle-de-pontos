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

const pageComponents = {
  login: () => (
    <>
      <GetItLogo />
      <LoginButton />
    </>
  ),
  productsUserView: () => (
    <>
      <GetItLogo />
      <div className="user-infos-container">
        <HeaderUserInfo title="Seus pontos:" info={(getUserPoints()).toString()} />
        <HeaderUserInfo title="Seu saldo:" info="R$ 0,00" />
      </div>
      <nav>
        <ul className="nav-list">
          <NavLinkItem title="Ver Carrinho" href="/cart" />
          <NavLinkItem title="Realizar Depósito" href="/deposit" />
        </ul>
      </nav>
      <LogOutButton />
    </>
  ),
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
