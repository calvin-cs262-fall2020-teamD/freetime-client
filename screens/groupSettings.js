import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { globalStyles } from "../styles/global";

import { useGroupContext } from "../context/groupContext";

import Button from "../components/button";

export default function GroupSettings({ route, navigation }) {
  const context = useGroupContext();

  return (
    <View style={globalStyles.container}>
      {/* <Button text={"Rename Group"} backgroundColor={"#00AAFF"} textColor={"green"} onPress={}></Button> */}
      <Button text={"Delete Group"} backgroundColor={"#00AAFF"} textColor={"white"} onPress={() => context.deleteGroup(route.params.name, route.params.key, navigation)}></Button>
    </View>
  );
}

const styles = StyleSheet.create({
});
