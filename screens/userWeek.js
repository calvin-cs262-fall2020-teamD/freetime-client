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
    <View style={globalStyles.container}>
      <View style={styles.userWeekContainer}>
        <View style={styles.listContainer}>
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
    margin: 0,
    padding: 10,
    width: "43%",
    height: "100%",
  },

  listContainer: {
    flex: 1,
  },

  dayContainer: {
    flex: 1,
    justifyContent: "space-around",
    backgroundColor: "white",
    borderColor: "#00AAFF",
    borderWidth: 1.5,
    borderRadius: 5,
    elevation: 3,
    shadowOffset: { width: 1, height: 1 },
    shadowColor: "#333",
    shadowOpacity: 0.3,
    shadowRadius: 2,
    margin: 3,
    paddingTop: 19,
    paddingBottom: 19,
  },

  days: {
    color: "black",
    textAlign: "center",
  },
});
