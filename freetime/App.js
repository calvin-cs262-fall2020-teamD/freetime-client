import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>
        FreeTime the New Amazing App that pairs your friends free times
        together!!!
      </Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    alignItems: "center",
    justifyContent: "top",
    padding: "100px",
  },

  titleText: {
    color: "#c89",
    textAlign: "center",
    padding: "20px",
    borderColor: "red",
    borderWidth: 5,
    borderRadius: "45px",
    fontSize: 50,
    fontWeight: "bold",
  },
});
