import React from 'react';
import Header from '../components/Header';
import ProductCard from '../components/ProductCard';
import ProductsPageTitle from '../components/ProductsPageTitle';
import Context from '../context/Context';

import '../styles/pages/ProductsUserView.css';
import { getUserPoints } from '../utilis';

function ProductsUserView() {
  const userViewTitle = 'Ofertas disponíveis:';

  const { products, setUserPoints } = React.useContext(Context);

  React.useEffect(() => {
    setUserPoints(getUserPoints());
  }, []);
  return (
    <>
      <Header page="userView" />
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
