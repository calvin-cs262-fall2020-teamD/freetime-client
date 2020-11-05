import React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import Navigator from "./routes/tabNavigator";

export default function AppNavigation(props) {
  return (
    <NavigationContainer>
      <Navigator></Navigator>
    </NavigationContainer>
  )
}