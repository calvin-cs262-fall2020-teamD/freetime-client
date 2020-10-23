import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { globalStyles } from "../styles/global";
import { MaterialIcons } from '@expo/vector-icons';

export default function Header({ navigation }) {

   const openMenu = () => {
       navigation.openDrawer();
   }

import { MaterialIcons } from '@expo/vector-icons';

export default function Header() {

   const openMenu = () => {
   }


  return (
    <View style={styles.headerContainer}>
      {/* <View style={styles.iconContainer}>
        <TouchableOpacity onPress={openMenu}>
          <MaterialIcons name="menu" size={30}/>
        </TouchableOpacity>
      </View> */}
      <View style={styles.titleContainer}>
        <Text style={styles.title}>FreeTime</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: 70,
    backgroundColor: "#00AAFF",
  },

  iconContainer: {
    marginTop: 15,
  },

  titleContainer: {
    alignContent: 'center',
    justifyContent: 'flex-end',
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

