import React from "react";
import { View, StyleSheet, Text } from "react-native";

export default function UserWeek() {
  return (
    <View style={styles.userWeek}>
      <Text style={styles.colums}>This will be where the UserWeek goes.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  userWeek: {
    position: "relative",
    backgroundColor: "white",
    borderColor: "#00AAFF",
    borderWidth: 1.5,
    borderRadius: 5,
    margin: 10,
    padding: 10,
    width: "40%",
    height: "77.5%",
  },

  colums: {
    color: "black",
    textAlign: "center",
  },
});
