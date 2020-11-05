import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { View } from "react-native";
import Header from "./components/header";
import { globalStyles } from "./styles/global";

import { createStackNavigator } from "@react-navigation/stack";
import LoginStack from "./routes/loginStack";
import TabNavigator from "./routes/tabNavigator";
import { NavigationContainer } from "@react-navigation/native";

const Stack = createStackNavigator();

export default function App() {
  return (
    <View style={globalStyles.container}>
      <Header></Header>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{headerShown: false, gestureEnabled: false}}
        >
          <Stack.Screen name="LoginStack" component={LoginStack}></Stack.Screen>
          <Stack.Screen name="TabNavigator" component={TabNavigator}></Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
      <StatusBar style="auto" />
    </View>
  );
}