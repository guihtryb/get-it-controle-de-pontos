import React, { useContext } from 'react';
import GetItLogo from '../components/GetItLogo';
import Header from '../components/Header';
import LogOutButton from '../components/LogOutButton';
import Points from '../components/Points';
import ProductCard from '../components/ProductCard';
import ProductsPageTitle from '../components/ProductsPageTitle';
import Username from '../components/Username';
import Context from '../context/Context';

import '../styles/pages/ProductsUserView.css';

function ProductsUserView() {
  const userViewTitle = 'Ofertas disponíveis:';

  const { products } = useContext(Context);

  return (
    <>
      <Header
        getItLogo={<GetItLogo key="getItLogo" />}
        username={<Username key="username" />}
        points={<Points key="points" />}
        logOutButton={<LogOutButton key="logOutButton" />}
      />
      <main className="products-main">
        <ProductsPageTitle text={userViewTitle} />
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
    </>
  );
}

export default ProductsUserView;
