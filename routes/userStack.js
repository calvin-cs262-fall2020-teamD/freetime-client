import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { createStackNavigator } from "@react-navigation/stack";
import Header from "../components/header";

import UserWeek from "../screens/userWeek";
import UserTimes from "../screens/userTimes";
import Settings from "../screens/settings";
import Profile from "../screens/userProfile";
import About from "../screens/about";
import { globalStyles } from "../styles/global";

const Stack = createStackNavigator();

export default function UserStack({ navigation }) {
  return (
    <Stack.Navigator initialRouteName={"UserWeek"}
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
          </TouchableOpacity>,
          headerLeft: () =>
            <TouchableOpacity onPress={() => navigation.navigate("Profile")}>
              <View style={globalStyles.iconContainer}>
                <MaterialIcons name='account-circle' size={33} color="black" />
              </View>
            </TouchableOpacity>,
          gestureEnabled: false
        }}
      />

      <Stack.Screen
        name="UserTimes"
        component={UserTimes}
        options={{ title: "User Times", headerTitleAlign: 'center', gestureEnabled: false }}
      />

      <Stack.Screen
        name="Settings"
        component={Settings}
        options={{ title: "Settings", gestureEnabled: false }}
      />

      <Stack.Screen
        name="Profile"
        component={Profile}
        options={{ title: "Profile", gestureEnabled: false }}
      />

      <Stack.Screen
        name="About"
        component={About}
        options={{ title: "About", gestureEnabled: false }}
      />

    </Stack.Navigator>
  );
}
