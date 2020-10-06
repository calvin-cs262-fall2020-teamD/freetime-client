import React from "react";
import { StyleSheet, TouchableOpacity, Text, View } from "react-native";

export default function TimeBox({ item, color }) {
  return (
    <View style={styles.timeContainer}>
      <Text style={styles.times}>{item.time}</Text>
      <View style={styles.timeBox} backgroundColor={color}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  timeContainer: {
    flex: 1,
    flexDirection: "row",
  },

  timeBox: {
    flex: 1,
    backgroundColor: "white",
    borderColor: "black",
    borderWidth: 1,
    marginRight: 5,
    padding: 20,
  },

  times: {
    flex: 0.2,
    flexWrap: "wrap",
    textAlign: "left",
    paddingLeft: 5,
    paddingRight: 5,
  },
});
