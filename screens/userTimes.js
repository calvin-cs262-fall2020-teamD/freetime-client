import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { globalStyles } from "../styles/global";

import TimeBox from "../components/timeBox";
import { MaterialIcons } from "@expo/vector-icons";
import { HeaderBackButton } from "@react-navigation/stack";
import { useUserContext } from "../context/userContext";

export default function UserTimes({ route, navigation }) {
  const context = useUserContext();

  const freeTimeIncrements = [
    {increment: "   00   ", key: "0"},
    {increment: "   15   ", key: "1"},
    {increment: "   30   ", key: "2"},
    {increment: "   45   ", key: "3"},
  ];

  context.setDayFreeTimes(route.params.freeTimes);

  useEffect(() => { 
    navigation.setOptions({headerLeft: (props) => (<HeaderBackButton {...props} onPress={() => {
      //Gets called on navigating out of a userTime day

      //Deleting old freetimes for the day
      fetch(`https://radiant-dusk-08201.herokuapp.com/deletedaytimes`, {
        method: "DELETE",
        body: JSON.stringify({userID: context.userID, weekday: route.params.day}),
        headers: {"Content-type": "application/json"}
      })
      .then((response) => response.text())
      .then((json) => console.log(json))
      .catch((error) => console.log(error))

      const array = route.params.freeTimes;
      // console.log(array);
      let beginning;
      let end;
      let rangeSelected = false;
      for(let i = 0; i < array.length; i++) {
        for(let n = 0; n < array[i].increments.length; n++) {
          if(array[i].increments[n].color == "#00E600" && rangeSelected == false) {
            rangeSelected = true;
            beginning = `${i},${n}`;
          } else if (array[i].increments[n].color != "#00E600" && rangeSelected == true) {
            rangeSelected = false;
            if(n == 0) { //Last box of previous row was selected and first box of this row isn't
              end = `${i-1},${array[i].increments.length - 1}`
            } else {
              end = `${i},${n-1}`
            }

            //Adding new freetimes for the day
            fetch(`https://radiant-dusk-08201.herokuapp.com/uploadtimes`, {
              method: "POST",
              body: JSON.stringify({userID: context.userID, starttime: beginning, endtime: end, weekday: route.params.day}),
              headers: {"Content-type": "application/json"}
            })
            .then((response) => response.text())
            .then((json) => console.log(json))
            .catch((error) => console.log(error))

            beginning = "";
            end = "";
          }
        }
      }

      navigation.goBack()
    }}></HeaderBackButton>) })
    
    navigation.setOptions({headerRight: () =>
    <TouchableOpacity onPress={() => {context.resetDayFreeTimes(route.params.freeTimes, route.params.day)}}>
      <View style={globalStyles.iconContainer}>
        <MaterialIcons name='delete' size={30} color="black" />
      </View>
    </TouchableOpacity>}), []});

  return (
      <View style={globalStyles.container}>
        <Text style={globalStyles.titleText}>
          Tap slots to input {route.params.day} FreeTimes!
        </Text>

        {/* This is the FlatList that shows the increment markers */}
        {/* <View style={styles.incrementContainer}>
          <FlatList
            style={styles.incrementList}
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
        </View> */}

        {/* This is the FlatList that displays the hours */}
        <FlatList
          style={styles.outerContainer}
          data={context.dayFreeTimes}
          extraData={context.setSelectedDayFreeTimes}
          renderItem={({ item }) => (
            <View style={styles.listContainer}>
              <View style={styles.timeContainer}>
                <Text>{item.time}</Text>
              </View>
              <View style={styles.timeBoxListContainer}>
                {/* This is the FlatList that displays the timeBox's */}
                <FlatList
                  style={styles.boxList}
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
            {length: 40.5, offset: 40.5 * index, index}
          )}
          initialScrollIndex={8}
          showsVerticalScrollIndicator={false}
          decelerationRate={.993}
          snapToInterval={40.5}
          directionalLockEnabled={true}
        />
      </View>
  );
}

const styles = StyleSheet.create({
  // incrementContainer: {
  //   paddingLeft: "15%",
  // },
  // incrementList: {
  //   backgroundColor: "red",
  // },
  // incrementBox: {
  //   backgroundColor: "pink",
  //   borderColor: "black",
  //   borderWidth: 1,
  //   paddingLeft: 16,
  //   paddingRight: 16,
  //   // marginLeft: "25%",
  // },

  listContainer: {
    flex: 1,
    flexDirection: 'row',
  },
  timeContainer: {
    flex: .14,
    marginLeft: 5,
    marginBottom: 20,
  },
  timeBoxListContainer: {
    flex: .86,
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
