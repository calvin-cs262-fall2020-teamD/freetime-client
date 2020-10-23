import React, { useState } from "react";
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

export default function Group({ route }) {
  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.titleText}>{route.params.name}</Text>
      <Text>Admin Username: {route.params.adminUser}</Text>
    </View>
  )
}