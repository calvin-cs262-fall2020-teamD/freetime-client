import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { globalStyles } from "../styles/global";

export default function UserTimes({ route, navigation }) {
  const [dayFreeTimes, setDayFreeTimes] = useState([
    { time: 0, key: "0" },
    { time: 1, key: "1" },
    { time: 2, key: "2" },
    { time: 3, key: "3" },
    { time: 4, key: "4" },
    { time: 5, key: "5" },
    { time: 6, key: "6" },
    { time: 7, key: "7" },
    { time: 8, key: "8" },
    { time: 9, key: "9" },
    { time: 10, key: "10" },
    { time: 11, key: "11" },
    { time: 12, key: "12" },
    { time: 13, key: "13" },
    { time: 14, key: "14" },
    { time: 15, key: "15" },
    { time: 16, key: "16" },
    { time: 17, key: "17" },
    { time: 18, key: "18" },
    { time: 19, key: "19" },
    { time: 20, key: "20" },
    { time: 21, key: "21" },
    { time: 22, key: "22" },
    { time: 23, key: "23" },
  ]);

  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.titleText}>
        Please input {route.params.day} FreeTimes!
      </Text>
      <FlatList
        data={dayFreeTimes}
        renderItem={({ item }) => (
          <TouchableOpacity>
            <View style={styles.timeContainer}>
              <Text style={styles.times} color={"red"}>
                {item.time}
              </Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  timeContainer: {
    backgroundColor: "white",
    borderColor: "#00AAFF",
    borderWidth: 1.5,
    borderRadius: 5,
    margin: 2,
    padding: 15,
  },

  times: {
    textAlign: "center",
  },
});
