import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import LoadingScreen from "./src/Views/LoadingScreen/Loading";
import MainMenu from "./src/Views/MainMenu/MainMenu";
import SignIn from "./src/Views/Login/Login";
import SignUp from "./src/Views/SignUp/SignUp";
import DetailProduct from "./src/Views/DetailProduk/DetailProduct";
import Reviews from "./src/Views/Reviews/Reviews";

const navigator = createStackNavigator(
  {
    LoadingScreen: LoadingScreen,
    MainMenu: MainMenu,
    SignIn: SignIn,
    SignUp: SignUp,
    DetailProduct: DetailProduct,
    Reviews: Reviews,
  },
  {
    initialRouteName: "LoadingScreen",
    unmountInactiveRoutes: true,
    defaultNavigationOptions: {
      headerShown: false,
    },
  }
);

export default createAppContainer(navigator);
