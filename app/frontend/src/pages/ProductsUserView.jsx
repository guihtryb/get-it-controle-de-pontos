import GetItLogo from "../components/GetItLogo";
import Header from "../components/Header";
import LogOutButton from "../components/LogOutButton";
import Points from "../components/Points";
import Username from "../components/Username";

const ProductsUserView = () => {
  return (
    <>
      <Header
        getItLogo={<GetItLogo key="getItLogo"/>}
        username={<Username key="username" />}
        points={<Points key="points"/>}
        logOutButton={<LogOutButton key="logOutButton"/>}
      />
    </>
  );

};

export default ProductsUserView;
