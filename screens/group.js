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
import { useGroupsContext } from "../context/groupsContext";

import { MaterialIcons } from "@expo/vector-icons";

export default function Group({ route, navigation }) {
  const context = useGroupsContext();

  useEffect(() => navigation.setOptions({title: route.params.name, headerRight: () =>
      <TouchableOpacity onPress={() => context.deleteGroup(route.params.key, navigation)}>
        <View style={globalStyles.iconContainer}>
          <MaterialIcons name='delete' size={30} color="black" />
        </View>
      </TouchableOpacity>
    }));

  return (
    <View style={globalStyles.container}>
      <Text>Admin Username: {route.params.adminUser}</Text>
    </View>
  )
}