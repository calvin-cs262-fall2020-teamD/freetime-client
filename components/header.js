import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { globalStyles } from "../styles/global";
import { MaterialIcons } from '@expo/vector-icons';

export default function Header() {
  return (
    <View style={styles.headerContainer}>
      <Text style={styles.title}>FreeTime</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    height: 70,
    backgroundColor: "#70cefa",
  },

  title: {
    color: "white",
    textAlign: "center",
    textShadowColor: "black",
    textShadowOffset: { width: -.5, height: .5 }, // was (-2, 2), changed to make title more readable
    textShadowRadius: 3,
    paddingTop: 30,    // started as 15, changed to fit top of iPhone 12 screen
    paddingLeft: 0,
    fontSize: 30,
    fontWeight: "bold",
  },
});

