import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import LoadingScreen from "./src/Views/LoadingScreen/Loading";
import MainMenu from "./src/Views/MainMenu/MainMenu";
import SignIn from "./src/Views/Login/Login";
import SignUp from "./src/Views/SignUp/SignUp";
import DetailProduct from "./src/Views/DetailProduk/DetailProduct";

const navigator = createStackNavigator(
  {
    LoadingScreen: LoadingScreen,
    MainMenu: MainMenu,
    SignIn: SignIn,
    SignUp: SignUp,
    DetailProduct: DetailProduct,
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
