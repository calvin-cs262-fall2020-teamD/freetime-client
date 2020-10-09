import React, { useState } from "react";
import {View, StyleSheet, Text, FlatList, TouchableOpacity, } from "react-native";
import { globalStyles } from "../styles/global";
import * as math from "mathjs";
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
    //Notes
    //Instead, add up total # of people with that free time in a matrix
    //Attatch their names to respective cells
        //Have 2 identically sized matricies, one having triple nested arrays containing a person list
    //When it's filled go through and analyze, grouping times with the same # of people
    //
};
//const result = matchTimes([user1, user2]);

const initialMatchTimes = (userList) => {
    //For this we'd all need to install math.js
    //const matrix = math.zeros(7,userList[0].sun.length,[]); //[rows][cols]

    //NEW PLAN! Initialize Array
    const numberTimeIncrements = userList[0].sun.length;
    const matrix = [ [], [], [], [], [], [], [] ];
    for (let b  = 0; b < numberTimeIncrements; b++) {
        for (let m = 0; m < 7; m++) {
            matrix[m][b] = [];
          }
    }
    

    const dayKeys = ["sun","mon","tues","wed","thurs","fri","sat"];
    for (let n=0; n<7; n++) { //Each day of the week
        for (let i = 0; i < userList.length; i++) { //Each user
            for (let x=0; x < numberTimeIncrements; x++) { //Each timeslot in a day
                if ( i === userList.length - 1) { //On the last user, while we're already going through, keep track of the best times
                    matrix[n][x][ matrix[n][x].length ] = userList[i].name;
                    
                } else {
                    matrix[n][x][ matrix[n][x].length ] = userList[i].name;
                }

            }
        }
    }

}

const updateTimes = (user) => {
    //updates the matrix based purely on 1 additional user
}

















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