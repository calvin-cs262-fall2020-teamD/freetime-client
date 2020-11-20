import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { globalStyles } from "../styles/global";

import { useUserContext } from "../context/userContext";

import Button from "../components/button";

export default function Settings({ navigation }) {
  const context = useUserContext();

  return (
    <View style={globalStyles.container}>
      <Button text={"About FreeTime"} backgroundColor={"#70cefa"} textColor={"green"} onPress={() => navigation.navigate("About")}></Button>
      <Button text={"Reset Week Times"} backgroundColor={"#70cefa"} textColor={"white"} onPress={() => context.resetWeekDays(navigation)}></Button>
    </View>
  );
}

const styles = StyleSheet.create({
});
