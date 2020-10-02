import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import navBar from "../components/navBar";
import userStack from "../routes/userStack";
import groupStack from "../routes/groupStack";

const Stack = createStackNavigator();

export default function UserStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: "#ddd",
        },
      }}
    >
      <Stack.Screen
        name="NavBar"
        component={navBar}
        options={{ title: "Nav Bar", headerShown: true }}
      />

      <Stack.Screen
        name="UserStack"
        component={userStack}
        options={{ title: "User Stack", headerShown: true }}
      />
      <Stack.Screen
        name="GroupStack"
        component={groupStack}
        options={{ title: "Group Stack", headerShown: true }}
      />
    </Stack.Navigator>
  );
}
