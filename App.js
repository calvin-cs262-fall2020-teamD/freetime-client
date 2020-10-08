import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { AppLoading } from "expo";
import Header from "./components/header";
import * as Font from "expo-font";
import { globalStyles } from "./styles/global";

import { NavigationContainer } from "@react-navigation/native";
import Navigator from "./routes/tabNavigator";

const getFonts = () =>
  Font.loadAsync({
    "nunito-regular": require("./assets/fonts/Nunito-Regular.ttf"),
    "nunito-bold": require("./assets/fonts/Nunito-Bold.ttf"),
  });

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  if (fontsLoaded) {
    return (
      <View style={globalStyles.container}>
        <Header></Header>
        <NavigationContainer>
          <Navigator></Navigator>
        </NavigationContainer>
        <StatusBar style="auto" />
      </View>
    );
  } else {
    return setFontsLoaded(true);
  }
}
