import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { globalStyles } from "../styles/global";
import Card from "../components/card";

import { useUserContext } from "../context/userContext";

export default function UserWeek({ navigation }) {
  const context = useUserContext();

  return (
    <View style={globalStyles.container}>
      <View style={styles.userWeekContainer}>
        <View style={styles.listContainer}>
          <FlatList
            data={context.weekDays}
            renderItem={({ item }) => (
              <TouchableOpacity
                onPress={() => navigation.navigate("UserTimes", item)}
              >
                <Card text={item.day}></Card>
              </TouchableOpacity>
            )}
            scrollEnabled={false}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  userWeekContainer: {
    backgroundColor: "white",
    borderColor: "#00AAFF",
    borderWidth: 1.5,
    borderRadius: 5,
    marginBottom: 5,
    padding: '3%',
    width: "43%",
    height: "99%",
  },

  listContainer: {
    flex: 1,
  },
});
