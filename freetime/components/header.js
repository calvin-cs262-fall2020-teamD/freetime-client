import React from "react";
import { StyleSheet, Text, TouchableWithoutFeedback, View } from "react-native";

export default function Header() {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>FreeTime</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    textAlign: "center",
    marginLeft: "auto",
    marginRight: "auto",
    width: "100%",
    height: 100,
    backgroundColor: "#00AAFF",
  },

  title: {
    color: "white",
    textShadowColor: "black",
    textShadowOffset: { width: -1.5, height: 1.5 },
    textShadowRadius: 1,
    paddingTop: 20,
    fontSize: 40,
    fontWeight: "bold",
  },
});
