import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Header from "./components/header";
import UserWeek from "./components/userWeek";

export default function App() {
  return (
    <View style={styles.container}>
      <Header></Header>
      <View>
        <UserWeek></UserWeek>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
  },
});
