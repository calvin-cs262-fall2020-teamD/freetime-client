import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Alert,
  TextInput,
} from "react-native";
import { globalStyles } from "../styles/global";

//import { useUserContext } from "../context/userContext";

export default function About({ navigation }) {
  return (
    <View style={globalStyles.container}>
      <Text>About page</Text>
    </View>
  )
}