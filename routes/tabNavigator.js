import React from "react";
import { StyleSheet } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import userStack from "../routes/userStack";
import groupStack from "../routes/groupStack";

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  return (
    <Tab.Navigator
      initialRouteName="UserWeek"
      tabBarOptions={{
        tabStyle: styles.tabStyle,
        labelStyle: styles.labelStyle,
        labelPosition: "below-icon",
      }}
    >
      <Tab.Screen component={userStack} name="User Week"></Tab.Screen>
      <Tab.Screen component={groupStack} name="Groups"></Tab.Screen>
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  tabStyle: {
    backgroundColor: "white",
    borderColor: "#00AAFF",
    borderWidth: 1,
  },

  labelStyle: {
    flex: 1,
    justifyContent: "center",
    textAlign: "center",
    fontSize: 15,
    marginTop: 12,
  },
});
