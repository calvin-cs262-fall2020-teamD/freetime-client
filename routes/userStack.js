import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import UserWeek from "../screens/userWeek";
import UserTimes from "../screens/userTimes";

const Stack = createStackNavigator();
export default function UserStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {},
      }}
    >
      <Stack.Screen
        name="UserWeek"
        component={UserWeek}
        options={{ title: "UserWeek", headerShown: false }}
      />
      <Stack.Screen
        name="UserTimes"
        component={UserTimes}
        options={{ title: "User Times", headerShown: false }}
      />
    </Stack.Navigator>
  );
}
