import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { globalStyles } from "../styles/global";

export default function Button({ text, backgroundColor, textColor, onPress }) {
  return (
    <TouchableOpacity onPress={onPress}>
    <View style={styles.buttonContainer} backgroundColor={backgroundColor}>
      <Text style={styles.buttonText} color={textColor}>{text}</Text>
    </View>
  </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  buttonContainer: {
    //backgroundColor: {backgroundColor},
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 5,
    margin: 5,
  },

  buttonText: {
    //color: {textColor},
    textAlign: "center",
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
    padding: 5,
  },
});