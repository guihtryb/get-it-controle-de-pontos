import React, { useContext } from 'react';
import DeleteProductModal from '../components/DeleteProductModal';
import EditProductModal from '../components/EditProductModal';
import Header from '../components/Header';
import ProductCard from '../components/ProductCard';
import ProductsPageTitle from '../components/ProductsPageTitle';
import RegisterProductModal from '../components/RegisterProductModal';
import Context from '../context/Context';

function ProductsAdminView() {
  const adminViewTitle = 'Produtos cadastrados:';

  const { products } = useContext(Context);

  return (
    <>
      <Header page="productsAdminView" />
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
