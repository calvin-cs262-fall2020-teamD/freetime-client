import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { globalStyles } from "../styles/global";
import { MaterialIcons } from '@expo/vector-icons';

export default function Header({ navigation }) {

   const openMenu = () => {
      //navigation.openDrawer();
   }


  return (
    <View style={styles.headerContainer}>
      <Text style={styles.title}>FreeTime</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    height: 70,
    backgroundColor: "#00AAFF",
  },

  title: {
    color: "white",
    textAlign: "center",
    textShadowColor: "black",
    textShadowOffset: { width: -2, height: 2 },
    textShadowRadius: 3,
    paddingTop: 15,
    paddingLeft: 0,
    fontSize: 30,
    fontWeight: "bold",
  },
});

