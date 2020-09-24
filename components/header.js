import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function Header() {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>FreeTime</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    height: 90,
    backgroundColor: "#00AAFF",
  },

  title: {
    color: "white",
    textAlign: "center",
    textShadowColor: "black",
    textShadowOffset: { width: -2, height: 2 },
    textShadowRadius: 3,
    paddingTop: 15,
    paddingLeft: 0,
    fontSize: 40,
    fontWeight: "bold",
  },
});
