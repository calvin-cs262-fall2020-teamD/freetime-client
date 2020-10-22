import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { createStackNavigator } from "@react-navigation/stack";

import UserWeek from "../screens/userWeek";
import UserTimes from "../screens/userTimes";
import Settings from "../screens/settings";
import { globalStyles } from "../styles/global";

const Stack = createStackNavigator();

export default function UserStack({ navigation }) {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: "#ddd",
        },
      }}
    >
      <Stack.Screen
        name="UserWeek"
        component={UserWeek}
        options={{ title: "User Week", headerTitleAlign: 'center', headerRight: () =>
          <TouchableOpacity onPress={() => navigation.navigate("Settings")}>
            <View style={globalStyles.iconContainer}>
              <MaterialIcons name='settings' size={30} color="black" />
            </View>
          </TouchableOpacity>
        }}
      />

      <Stack.Screen
        name="UserTimes"
        component={UserTimes}
        options={{ title: "User Times", headerTitleAlign: 'center', gestureEnabled: false, headerRight: () =>
          <TouchableOpacity>
            <View style={globalStyles.iconContainer}>
              <MaterialIcons name='delete' size={30} color="black" />
            </View>
          </TouchableOpacity>
        }}
      />

      <Stack.Screen
        name="Settings"
        component={Settings}
        options={{ title: "User Week Settings"}}
      />
    </Stack.Navigator>
  );
}
