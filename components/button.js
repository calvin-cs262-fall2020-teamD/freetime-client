import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
} from "react-native";
import { globalStyles } from "../styles/global";

export default function Button({ text, onPress }) {
  return (
    <TouchableOpacity onPress={onPress}>
    <View style={globalStyles.buttonContainer}>
      <Text style={globalStyles.buttonText}>{text}</Text>
    </View>
  </TouchableOpacity>
  )
}