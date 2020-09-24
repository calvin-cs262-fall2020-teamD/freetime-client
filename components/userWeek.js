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
    position: "relative",
    backgroundColor: "white",
    borderRadius: 5,
    margin: 10,
    padding: 10,
    height: 100,
  },

  colums: {
    flex: 1,
    color: "black",
    textAlign: "center",
  },
});
