import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import RootSwitchNavigation from "./navi/rootSwitchNavigation";
import { Provider } from "react-redux";

export default function App() {
  return <RootSwitchNavigation />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
