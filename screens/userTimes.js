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

import { useUserContext } from "../context/userContext";

export default function UserTimes({ route, navigation }) {
  const context = useUserContext();

  const freeTimeIncrements = [
    {increment: "0  ", key: "0"},
    {increment: "10", key: "1"},
    {increment: "20", key: "2"},
    {increment: "30", key: "3"},
    {increment: "40", key: "4"},
    {increment: "50", key: "5"},
  ];

  context.setDayFreeTimes(route.params.freeTimes);

  useEffect(() => navigation.setOptions({headerRight: () =>
    <TouchableOpacity onPress={() => context.resetDayFreeTimes(route.params.freeTimes, route.params.day)}>
      <View style={globalStyles.iconContainer}>
        <MaterialIcons name='delete' size={30} color="black" />
      </View>
    </TouchableOpacity>}), []);

  return (
      <View style={globalStyles.container}>
        <Text style={globalStyles.titleText}>
          Please input {route.params.day} FreeTimes!
        </Text>

        {/* This is the FlatList that shows the increment markers */}
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

        {/* This is the FlatList that displays the hours */}
        <FlatList
          data={context.dayFreeTimes}
          extraData={context.setSelectedDayFreeTimes}
          renderItem={({ item }) => (
            <View style={styles.listContainer}>
              <View style={styles.timeContainer}>
                <Text>{item.time}</Text>
              </View>
              <View style={styles.timeBox}>
              {/* This is the FlatList that displays the timeBox's */}
              <FlatList
                data={item.increments}
                extraData={context.setSelectedDayFreeTimes}
                renderItem={({item}) => (
                  <TouchableOpacity onPress={() => context.inputTime(item)}>
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
