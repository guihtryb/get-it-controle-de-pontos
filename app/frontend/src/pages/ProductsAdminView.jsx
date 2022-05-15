import React, { useContext } from 'react';
import DeleteProductModal from '../components/DeleteProductModal';
import EditProductModal from '../components/EditProductModal';
import GetItLogo from '../components/GetItLogo';
import Header from '../components/Header';
import LogOutButton from '../components/LogOutButton';
import ProductCard from '../components/ProductCard';
import ProductsPageTitle from '../components/ProductsPageTitle';
import RegisterProductButton from '../components/RegisterProductButton';
import RegisterProductModal from '../components/RegisterProductModal';
import Username from '../components/Username';
import Context from '../context/Context';

function ProductsAdminView() {
  const adminViewTitle = 'Produtos cadastrados:';

  const { products } = useContext(Context);

  return (
    <>
      <Header
        getItLogo={<GetItLogo key="getItLogo" />}
        username={<Username key="username" />}
        registerProductButton={<RegisterProductButton key="register-product" />}
        logOutButton={<LogOutButton key="logOutButton" />}
      />
      <main className="products-main">
        <ProductsPageTitle text={adminViewTitle} />
        <section className="products-section">
          {
              products.map((product, index) => (
                !product.sold
                  && (
                  <ProductCard
                    product={product}
                    index={index}
                    key={product.title}
                  />
                  )
              ))
            }
        </section>
      </main>
      <RegisterProductModal />
      <DeleteProductModal />
      <EditProductModal />
    </>
  );
}

export default ProductsAdminView;
