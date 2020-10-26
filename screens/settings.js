import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { globalStyles } from "../styles/global";

export default function Settings() {
  return (
    <View style={globalStyles.container}>
      <Text>This is where the settings will go.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
});
