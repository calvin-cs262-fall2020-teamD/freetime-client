// App.js - Defines basic application structures
//
// Headers for general Application
import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { View } from "react-native";
import Header from "./components/header";
import { globalStyles } from "./styles/global";

// Headers particularly intended for Stack Navigation
import { createStackNavigator } from "@react-navigation/stack";
import LoginStack from "./routes/loginStack";
import TabNavigator from "./routes/tabNavigator";
import { NavigationContainer } from "@react-navigation/native";

// Initializes Stack Navigator
const Stack = createStackNavigator();

// General function for base application
export default function App() {
  return (
	// Handles basic format for standard page
    <View style={globalStyles.container}>
      <Header></Header>
      <NavigationContainer>
		  {/* // Handles login screen appearance and features */}
        <Stack.Navigator screenOptions={{headerShown: false, gestureEnabled: false}}>
          <Stack.Screen name="LoginStack" component={LoginStack}></Stack.Screen>
          <Stack.Screen name="TabNavigator" component={TabNavigator}></Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
      <StatusBar style="auto" />
    </View>
  );
}
