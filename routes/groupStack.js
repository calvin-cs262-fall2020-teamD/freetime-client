import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import groups from "../screens/groups";

const Stack = createStackNavigator();

export default function GroupStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: "#ddd",
        },
      }}
    >
      <Stack.Screen
        name="Groups"
        component={groups}
        options={{ title: "Groups", headerShown: true }}
      />
    </Stack.Navigator>
  );
}
