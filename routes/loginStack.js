import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import login from "../screens/loginPage";

const Stack = createStackNavigator();

export default function LoginStack() {
  return (
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: "#ddd",
          },
        }}
      >
        <Stack.Screen
          name="Login"
          component={login}
          options={{ headerShown: false }}
        />

        {/* <Stack.Screen
          name="About"
          component={about}
          options={{ title: 'About', headerTitleAlign: 'center'}}
        /> */}

      </Stack.Navigator>
  );
}