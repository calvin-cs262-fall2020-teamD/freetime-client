import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Header from "./components/header";
import UserWeek from "./components/userWeek";
import NavBar from "./components/navBar";

export default function App() {
  return (
    <View style={styles.container}>
      <Header></Header>
      <UserWeek></UserWeek>
      <NavBar></NavBar>
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
