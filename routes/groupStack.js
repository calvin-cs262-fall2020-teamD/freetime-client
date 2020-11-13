import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { MaterialIcons } from "@expo/vector-icons";

import { GroupContextProvider } from "../context/groupContext";
import groups from "../screens/groups";
import group from "../screens/group";
import { globalStyles } from "../styles/global";

const Stack = createStackNavigator();

export default function GroupStack() {
  return (
    <GroupContextProvider>
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
          options={{ title: "Groups", headerTitleAlign: 'center', headerLeft: () => {} }}
        />

        <Stack.Screen
          name="Group"
          component={group}
          options={{ title: 'Group', headerTitleAlign: 'center'}}
        />

      </Stack.Navigator>
    </GroupContextProvider>
  );
}
