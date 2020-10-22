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
        options={{ title: "User Week", headerRight: () =>
          <TouchableOpacity onPress={() => navigation.navigate("Settings")}>
            <View style={globalStyles.iconContainer}>
              <MaterialIcons name='settings' size={30} color="black" />
            </View>
          </TouchableOpacity>, headerLeft: () =>
                <TouchableOpacity onPress={() => navigation.navigate("Profile")}>
                    <View style={globalStyles.iconContainer}>
                        <MaterialIcons name='person' size={30} color="black" />
                    </View>
                </TouchableOpacity>
        }}
      />

      <Stack.Screen
        name="UserTimes"
        component={UserTimes}
        options={{ title: "User Times", gestureEnabled: false, headerRight: () =>
          <TouchableOpacity>
            <View style={globalStyles.iconContainer}>
              <MaterialIcons name='delete' size={30} color="black"/>
            </View>
          </TouchableOpacity>
        }}
      />

      <Stack.Screen
        name="Settings"
        component={Settings}
        options={{ title: "User Week Settings"}}
      />

      <Stack.Screen
          name="Profile"
          component={Profile}
          options={{ title: "Profile"}}
      />
    </Stack.Navigator>
  );
}
