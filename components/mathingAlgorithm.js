import React, { useState } from "react";
import {View, StyleSheet, Text, FlatList, TouchableOpacity, } from "react-native";
import { globalStyles } from "../styles/global";

const user1 = {
    name: "David Sen",
    sun: [0,1,1,0,1,0,0,1,1,1,1],
    mon: [],
    tues: [],
    wed: [],
    thurs: [],
    fri: [],
    sat: [],
};

const user2 = {
    name: "Ryan Vreeke",
    sun: [1,1,0,1,0,0,0,1,1,0,1],
    mon: [],
    tues: [],
    wed: [],
    thurs: [],
    fri: [],
    sat: [],
};
const matchTimes = (userList) => {
    //Things we need this to do
    // - Find a time everybody is free 
    // - I really like the heatmap feature of when2meet.com
    const baseLine = [0,0,0,0,0,0,0,0,0,0,0];
    const dayKeys = ["sun","mon","tues","wed","thurs","fri","sat"];
    const matchedTimes = [ [], [], [], [], [], [], [] ];
    for (let n=0; n<7; n++) { //Each day of the week
        for (let i = 1; i < userList.length; i++) { //Each user - looks at pairs of users so starts at 2nd user
            for (let x=0; x < userList[0].sun.length; x++) { //Each timeslot in a day
                if ( i === 1) {
                    matchedTimes[n][x] = userList[i-1][dayKeys[n]][x] && userList[i][dayKeys[n]][x]; //Right now matchedTimes[n] is empty, so compare 2 users
                } else {
                    matchedTimes[n][x] = matchedTimes[n][x] && userList[i][dayKeys[n]][x]; //Right now it's not empty, so compare user to it
                }
            }
        }
    }
    return(matchedTimes);
    // Still TODO
    // Heatmap, keep track of names
    // format output
    // map truthy indexes to times (either in this function or make another function for that, use a calculation not just index time matching)
};
//const result = matchTimes([user1, user2]);

export default function matchingAlgorithm({ navigation }) {
  const [weekDays, setWeekDays] = useState([
  ]);
  
  return (
    <View style={globalStyles.container}>
    </View>
  );
}

const styles = StyleSheet.create({

});

// const user = {
//     name: "David Sen",
//     sun: [],
//     mon: [],
//     tues: [],
//     wed: [],
//     thurs: [],
//     fri: [],
//     sat: [],
// };