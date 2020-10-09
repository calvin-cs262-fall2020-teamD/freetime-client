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
  const [dayFreeTimes, setDayFreeTimes] = useState(route.params.freeTimes);

  const selectedDayFreeTimes = [];

  const inputTime = (key) => {
    setDayFreeTimes(() => {
      dayFreeTimes[key].color === "white"
        ? (dayFreeTimes[key].color = "#00E600")
        : (dayFreeTimes[key].color = "white");

      return dayFreeTimes.map((item) => (selectedDayFreeTimes[item.key] = item));
    });
  };

  const resetFreeTimes = () => {
    setDayFreeTimes(() => {
      dayFreeTimes.forEach((item) => item.color = "white");
      return dayFreeTimes.map((item) => (selectedDayFreeTimes[item.key] = item))
    })
  }

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
        <TouchableOpacity onPress={resetFreeTimes}>
          <View style={styles.submitContainer}>
            <Text style={styles.submitText}>!!!Reset FreeTimes!!!</Text>
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
    color: "red",
    padding: 5,
  },

  listContainer: {
    flex: 1,
  },
});
