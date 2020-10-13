import React from "react";
import { StyleSheet, TouchableOpacity, Text, View } from "react-native";

export default function TimeBox({ item }) {
  return (
    <View style={styles.timeBox} backgroundColor={item.color}></View>
  );
}

const styles = StyleSheet.create({
  timeBox: {
    flex: 1,
    backgroundColor: "white",
    borderColor: "black",
    borderWidth: 1,
    marginRight: 0,
    padding: 20,
    paddingRight: 30,
  },
});
