import React from "react";
import { View, StyleSheet, Text, Button, TouchableOpacity } from "react-native";

export default function NavBar() {
  return (
    <View style={styles.navBar}>
      <TouchableOpacity style={styles.buttons}>
        <View style={styles.buttonContainer}>
          <Button title="UserWeek" color="#00AAFF"></Button>
        </View>
        <View style={styles.buttonContainer}>
          <Button title="Groups" color="#00AAFF"></Button>
        </View>
      </TouchableOpacity>
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
    width: "100%",
  },

  buttonContainer: {
    flex: 1,
    borderColor: "#00AAFF",
    borderLeftWidth: 1,
    borderRightWidth: 1,
  },

  buttons: {
    flex: 1,
    flexDirection: "row",
  },
});
