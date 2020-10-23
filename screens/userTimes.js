import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Alert,
} from "react-native";
import { globalStyles } from "../styles/global";

import TimeBox from "../components/timeBox";
import { MaterialIcons } from "@expo/vector-icons";

export default function UserTimes({ route, navigation }) {

  useEffect(() => navigation.setOptions({headerRight: () =>
    <TouchableOpacity onPress={resetFreeTimes}>
      <View style={globalStyles.iconContainer}>
        <MaterialIcons name='delete' size={30} color="black" />
      </View>
    </TouchableOpacity>}), []);

  const freeTimeIncrements = [
    {increment: "0  ", key: "0"},
    {increment: "10", key: "1"},
    {increment: "20", key: "2"},
    {increment: "30", key: "3"},
    {increment: "40", key: "4"},
    {increment: "50", key: "5"},
  ];

  const [dayFreeTimes, setDayFreeTimes] = useState(route.params.freeTimes);

  const selectedDayFreeTimes = [];

  const inputTime = (item) => {
    setDayFreeTimes(() => {
      item.color === "white"
        ? (item.color = "#00E600")
        : (item.color = "white");

      return dayFreeTimes.map((item) => (selectedDayFreeTimes[item] = item));
    });
  };

  const resetFreeTimes = () => {
    Alert.alert('Resetting FreeTimes!', 'Are you sure you want to reset your freetimes?', [{text: 'Yes', onPress: () => {
      setDayFreeTimes(() => {
        dayFreeTimes.forEach((item) => {
          item.increments.forEach((item) => item.color = 'white')
        });
        return dayFreeTimes.map((item) => (selectedDayFreeTimes[item] = item))
      })
    }}, {text: 'No'}])
  }

  return (
      <View style={globalStyles.container}>
        <Text style={globalStyles.titleText}>
          Please input {route.params.day} FreeTimes!
        </Text>

        <View style={styles.incrementContainer}>
          <FlatList
            data={freeTimeIncrements}
            renderItem={({ item }) => (
              <View style={styles.incrementBox}>
                <Text>{item.increment}</Text>
              </View>
            )}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            scrollEnabled={false}
            />
        </View>

        <FlatList
          data={dayFreeTimes}
          extraData={selectedDayFreeTimes}
          renderItem={({ item }) => (
            <View style={styles.listContainer}>
              <View style={styles.timeContainer}>
                <Text>{item.time}</Text>
              </View>
              <View style={styles.timeBox}>
              <FlatList
                data={item.increments}
                extraData={selectedDayFreeTimes}
                renderItem={({item}) => (
                  <TouchableOpacity onPress={() => inputTime(item)}>
                    <TimeBox item={item}></TimeBox>
                  </TouchableOpacity>
                )}
                showsHorizontalScrollIndicator={false}
                horizontal={true}
                scrollEnabled={false}
              />
              </View>
            </View>
          )}
          getItemLayout={(data, index) => (
            {length: 42, offset: 42 * index, index}
          )}
          initialScrollIndex={8}
          showsVerticalScrollIndicator={false}
          decelerationRate={.993}
          snapToInterval={42}
          directionalLockEnabled={true}
        />
      </View>
  );
}

const styles = StyleSheet.create({
  incrementContainer: {
    alignItems: 'flex-end',
    marginRight: '5%',
  },

  incrementBox: {
    flex: 1,
    padding: 16,
    paddingTop: 0,
    paddingBottom: 0,
    paddingRight: '30%',
  },

  listContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-end',
  },

  timeContainer: {
    flex: .14,
    marginLeft: 5,
    marginBottom: 20,
  },

  timeBox: {
    flex: .86,
    alignItems: 'flex-end',
    marginRight: 5,
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
});
