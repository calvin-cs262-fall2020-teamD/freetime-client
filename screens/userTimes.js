import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  TouchableOpacity,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { globalStyles } from "../styles/global";

import TimeBox from "../components/timeBox";

export default function UserTimes({ route }) {
  const [dayFreeTimes, setDayFreeTimes] = useState([
    { time: "", free: false, color: "white", key: "0" },
    { time: "1 AM", free: false, color: "white", key: "1" },
    { time: "2 AM", free: false, color: "white", key: "2" },
    { time: "3 AM", free: false, color: "white", key: "3" },
    { time: "4 AM", free: false, color: "white", key: "4" },
    { time: "5 AM", free: false, color: "white", key: "5" },
    { time: "6 AM", free: false, color: "white", key: "6" },
    { time: "7 AM", free: false, color: "white", key: "7" },
    { time: "8 AM", free: false, color: "white", key: "8" },
    { time: "9 AM", free: false, color: "white", key: "9" },
    { time: "10 AM", free: false, color: "white", key: "10" },
    { time: "11 AM", free: false, color: "white", key: "11" },
    { time: "12 PM", free: false, color: "white", key: "12" },
    { time: "1 PM", free: false, color: "white", key: "13" },
    { time: "2 PM", free: false, color: "white", key: "14" },
    { time: "3 PM", free: false, color: "white", key: "15" },
    { time: "4 PM", free: false, color: "white", key: "16" },
    { time: "5 PM", free: false, color: "white", key: "17" },
    { time: "6 PM", free: false, color: "white", key: "18" },
    { time: "7 PM", free: false, color: "white", key: "19" },
    { time: "8 PM", free: false, color: "white", key: "20" },
    { time: "9 PM", free: false, color: "white", key: "21" },
    { time: "10 PM", free: false, color: "white", key: "22" },
    { time: "11 PM", free: false, color: "white", key: "23" },
    { time: "", free: false, color: "white", key: "24" },
  ]);

  const selectedDayFreeTimes = [];

  const inputTime = (key) => {
    setDayFreeTimes((prevDayFreeTimes) => {
      prevDayFreeTimes[key].color === "white"
        ? (prevDayFreeTimes[key].color = "#00E600")
        : (prevDayFreeTimes[key].color = "white");
      return prevDayFreeTimes.map((item) => (selectedDayFreeTimes[key] = item));
    });
  };

  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");

  const changeStartTimeHandler = (time) => {
    setStartTime(time);
  };

  const changeEndTimeHandler = (time) => {
    setEndTime(time);
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={globalStyles.container}>
        <Text style={globalStyles.titleText}>
          Please input {route.params.day} FreeTimes!
        </Text>
        <View style={styles.timeInputContainer}>
          <TextInput
            style={styles.textInput}
            placeholder="Start: 9:00"
            onChangeText={changeStartTimeHandler}
            value={startTime}
            keyboardType={"number-pad"}
          ></TextInput>
          <TextInput
            style={styles.textInput}
            placeholder="End: 10:00"
            onChangeText={changeEndTimeHandler}
            value={endTime}
            keyboardType={"number-pad"}
          ></TextInput>
        </View>
        <View style={styles.listContainer}>
          <FlatList
            data={dayFreeTimes}
            extraData={selectedDayFreeTimes}
            renderItem={({ item }) => (
              <TouchableOpacity onPress={() => inputTime(item.key)}>
                <TimeBox item={item} color={item.color}></TimeBox>
              </TouchableOpacity>
            )}
          />
        </View>
        <TouchableOpacity>
          <View style={styles.submitContainer}>
            <Text style={styles.submitText}>Submit free time!</Text>
          </View>
        </TouchableOpacity>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  timeInputContainer: {
    flexDirection: "row",
    marginLeft: 5,
    marginRight: 5,
  },

  textInput: {
    flex: 1,
    textAlign: "center",
    fontSize: 18,
    color: "#333",
    padding: 3,
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 5,
  },

  submitContainer: {
    backgroundColor: "#00AAFF",
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 5,
    margin: 5,
  },

  submitText: {
    textAlign: "center",
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
    padding: 5,
  },

  listContainer: {
    flex: 1,
  },
});
