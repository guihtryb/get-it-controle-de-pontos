/* eslint-disable react/jsx-no-constructed-context-values */
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import Context from './Context';
import products from '../mocks/products';

export default function Provider({ children }) {
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showRegisterUserModal, setShowRegisterUserModal] = useState(false);
  const [showRegisterProductModal, setShowRegisterProductModal] = useState(false);
  const [showDeleteProductModal, setShowDeleteProductModal] = useState(false);
  const [askedToDelete, setAskedToDelete] = useState();
  const [showEditProductModal, setShowEditProductModal] = useState(false);
  const [askedToEdit, setAskedToEdit] = useState();

  const contextValue = {
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
  };

  return (
    <Context.Provider value={contextValue}>
      { children }
    </Context.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};
