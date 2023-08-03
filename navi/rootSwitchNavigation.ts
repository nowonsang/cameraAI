import { createAppContainer, createSwitchNavigator } from "react-navigation";
import mainView from "../view/main/main";

const rootSwitchNavigator = createSwitchNavigator(
  {
    mainView,
  },
  {
    initialRouteName: "mainView",
  }
);

const RootSwitchNavigation = createAppContainer(rootSwitchNavigator);

export default RootSwitchNavigation;
