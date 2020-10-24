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

import { MaterialIcons } from "@expo/vector-icons";

export default function Group({ route, navigation }) {

  useEffect(() => navigation.setOptions({title: route.params.item.name, headerRight: () =>
    <TouchableOpacity onPress={route.params.deleteGroup}>
      <View style={globalStyles.iconContainer}>
        <MaterialIcons name='delete' size={30} color="black" />
      </View>
    </TouchableOpacity>}), []);

  return (
    <View style={globalStyles.container}>
      <Text>Admin Username: {route.params.adminUser}</Text>
    </View>
  )
}