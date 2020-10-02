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

export default function UserTimes({ route, navigation }) {
  const [dayFreeTimes, setDayFreeTimes] = useState([
    { time: "", key: "0" },
    { time: "1 AM", key: "1" },
    { time: "2 AM", key: "2" },
    { time: "3 AM", key: "3" },
    { time: "4 AM", key: "4" },
    { time: "5 AM", key: "5" },
    { time: "6 AM", key: "6" },
    { time: "7 AM", key: "7" },
    { time: "8 AM", key: "8" },
    { time: "9 AM", key: "9" },
    { time: "10 AM", key: "10" },
    { time: "11 AM", key: "11" },
    { time: "12 PM", key: "12" },
    { time: "1 PM", key: "13" },
    { time: "2 PM", key: "14" },
    { time: "3 PM", key: "15" },
    { time: "4 PM", key: "16" },
    { time: "5 PM", key: "17" },
    { time: "6 PM", key: "18" },
    { time: "7 PM", key: "19" },
    { time: "8 PM", key: "20" },
    { time: "9 PM", key: "21" },
    { time: "10 PM", key: "22" },
    { time: "11 PM", key: "23" },
    { time: "", key: "24" },
  ]);

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
        <TouchableOpacity>
          <View style={styles.submitContainer}>
            <Text style={styles.submitText}>Submit free time!</Text>
          </View>
        </TouchableOpacity>
        <View style={styles.listContainer}>
          <FlatList
            data={dayFreeTimes}
            renderItem={({ item }) => (
              <TouchableOpacity>
                <View style={styles.timeContainer}>
                  <Text style={styles.times}>{item.time}</Text>
                  <View style={styles.timeBox}></View>
                </View>
              </TouchableOpacity>
            )}
          />
        </View>
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

  timeContainer: {
    flex: 1,
    flexDirection: "row",
  },

  timeBox: {
    flex: 1,
    backgroundColor: "white",
    borderColor: "black",
    borderWidth: 1,
    marginRight: 5,
    padding: 20,
  },

  times: {
    flex: 0.2,
    textAlign: "left",
    paddingLeft: 5,
    paddingRight: 5,
  },
});
