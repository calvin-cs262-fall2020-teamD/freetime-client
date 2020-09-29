import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { globalStyles } from "../styles/global";

export default function UserWeek({ navigation }) {
  const [weekDays, setWeekDays] = useState([
    { day: "Sunday", key: "1" },
    { day: "Monday", key: "2" },
    { day: "Tuesday", key: "3" },
    { day: "Wednesday", key: "4" },
    { day: "Thursday", key: "5" },
    { day: "Friday", key: "6" },
    { day: "Saturday", key: "7" },
  ]);

  return (
    <View style={styles.userWeekContainer}>
      <FlatList
        data={weekDays}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => navigation.navigate("UserTimes", item)}
          >
            <View style={styles.dayContainer}>
              <Text style={styles.days}>{item.day}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  userWeekContainer: {
    display: "flex",
    position: "absolute",
    backgroundColor: "white",
    borderColor: "#00AAFF",
    borderWidth: 1.5,
    borderRadius: 5,
    margin: 10,
    padding: 10,
    width: "43%",
    height: "89%",
  },

  dayContainer: {
    position: "relative",
    backgroundColor: "white",
    borderColor: "#00AAFF",
    borderWidth: 1.5,
    borderRadius: 5,
    margin: 2,
    padding: 15,
  },

  days: {
    color: "black",
    textAlign: "center",
  },
});
