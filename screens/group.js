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
import { useGroupContext } from "../context/groupContext";

import { MaterialIcons } from "@expo/vector-icons";

export default function Group({ route, navigation }) {
  const context = useGroupContext();

  useEffect(() => navigation.setOptions({title: route.params.name, headerRight: () =>
      <TouchableOpacity onPress={() => navigation.navigate("GroupSettings", {name: route.params.name, key: route.params.key})}>
      {/* context.deleteGroup(route.params.key, navigation) */}
        <View style={globalStyles.iconContainer}>
          <MaterialIcons name='settings' size={30} color="black" />
        </View>
      </TouchableOpacity>
    }));

  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.titleText}>Admin Username: {route.params.adminUser}</Text>
    </View>
  )
}