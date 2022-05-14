import GetItLogo from "../components/GetItLogo";
import Header from "../components/Header";
import LogOutButton from "../components/LogOutButton";
import Points from "../components/Points";
import ProductsPageTitle from "../components/ProductsPageTitle";
import Username from "../components/Username";

const ProductsUserView = () => {
  const userViewTitle = 'Ofertas disponíveis:';

  return (
    <>
      <Header
        getItLogo={<GetItLogo key="getItLogo"/>}
        username={<Username key="username" />}
        points={<Points key="points"/>}
        logOutButton={<LogOutButton key="logOutButton"/>}
      />
      <ProductsPageTitle text={ userViewTitle } />
    </>
  );

};

export default ProductsUserView;
