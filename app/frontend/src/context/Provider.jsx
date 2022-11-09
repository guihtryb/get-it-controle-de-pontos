import PropTypes from 'prop-types';
import React from 'react';
import Context from './Context';
import products from '../mocks/products';

export default function Provider({ children }) {
  const [showLoginModal, setShowLoginModal] = React.useState(false);
  const [showRegisterUserModal, setShowRegisterUserModal] = React.useState(false);
  const [showRegisterProductModal, setShowRegisterProductModal] = React.useState(false);
  const [showDeleteProductModal, setShowDeleteProductModal] = React.useState(false);
  const [showEditProductModal, setShowEditProductModal] = React.useState(false);
  const [askedToDelete, setAskedToDelete] = React.useState(false);
  const [askedToEdit, setAskedToEdit] = React.useState(false);
  const [userBalance, setUserBalance] = React.useState(0.50);

  const contextValue = React.useMemo(() => ({
    setShowLoginModal,
    showLoginModal,
    showRegisterUserModal,
    setShowRegisterUserModal,
    setShowRegisterProductModal,
    showRegisterProductModal,
    setShowDeleteProductModal,
    showDeleteProductModal,
    setAskedToDelete,
    askedToDelete,
    setShowEditProductModal,
    showEditProductModal,
    setAskedToEdit,
    askedToEdit,
    products,
    userBalance,
    setUserBalance,
  }));

  return (
    <Context.Provider value={contextValue}>
      { children }
    </Context.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};
