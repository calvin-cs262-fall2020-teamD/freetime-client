import React from "react";
import { View, StyleSheet, Text } from "react-native";

export default function NavBar() {
  return (
    <View style={styles.navBar}>
      <Text style={styles.items}>This will be where the NavBar goes.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  navBar: {
    position: "absolute",
    bottom: 0,
    backgroundColor: "white",
    borderColor: "#00AAFF",
    borderWidth: 1.5,
    padding: 10,
    width: "100%",
  },

  items: {
    textAlign: "center",
  },
});
