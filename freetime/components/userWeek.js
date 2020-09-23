import React from "react";
import { View, StyleSheet, Text, Alert } from "react-native";

export default function UserWeek() {
  return (
    <View style={styles.userWeek}>
      <Text style={styles.colums}>This will be where the UserWeek goes.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  userWeek: {
    flex: 1,
    position: "absolute",
    backgroundColor: "white",
    borderRadius: 5,
    margin: 10,
    padding: 10,
  },

  colums: {
    color: "black",
    textAlign: "center",
    position: "relative",
    marginLeft: "auto",
    marginRight: "auto",
  },
});
