import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View, LinearGradient } from "react-native";
import { AppLoading } from "expo";
import Header from "./components/header";
import * as Font from "expo-font";
import { globalStyles } from "./styles/global";

import { NavigationContainer } from "@react-navigation/native";
import Navigator from "./routes/tabNavigator";
import LoginNavigation from "./LoginNavigation";
import AppNavigation from "./AppNavigation";
import Login from "./screens/loginPage";

const getFonts = () =>
  Font.loadAsync({
    "nunito-regular": require("./assets/fonts/Nunito-Regular.ttf"),
    "nunito-bold": require("./assets/fonts/Nunito-Bold.ttf"),
  });

export default function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  if (!loggedIn) {
    return (
      <View style={globalStyles.container}>
        <Header></Header>
        <AppNavigation></AppNavigation>
        {/* <NavigationContainer>
          <Navigator></Navigator>
        </NavigationContainer> */}
        <StatusBar style="auto" />
      </View>
    );
  } else {
    return (
      <View style={globalStyles.container}>
        <Header></Header>

      </View>
    );
  }
}