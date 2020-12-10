import React, { createContext, useContext, useState } from "react";
import { Alert, StyleSheet } from "react-native";

const UserContext = createContext({});

  export function UserContextProvider(props) {
    const [loading, setLoading] = useState(false);
    // userWeek.js
    const [weekDays, setWeekDays] = useState([
      {
        day: "Sunday",
        freeTimes: [
          { time: "12 AM", increments: [{color: 'white', hour: "0", key: "0"}, {color: 'white', hour: "0", key: "1"}, {color: 'white', hour: "0", key: "2"}, {color: 'white', hour: "0", key: "3"}], key: "0" },
          { time: "1 AM", increments: [{color: '#ededed', hour: "1", key: "0"}, {color: '#ededed', hour: "1", key: "1"}, {color: '#ededed', hour: "1", key: "2"}, {color: '#ededed', hour: "1", key: "3"}], key: "1" },
          { time: "2 AM", increments: [{color: 'white', hour: "2", key: "0"}, {color: 'white', hour: "2", key: "1"}, {color: 'white', hour: "2", key: "2"}, {color: 'white', hour: "2", key: "3"}], key: "2" },
          { time: "3 AM", increments: [{color: '#ededed', hour: "3", key: "0"}, {color: '#ededed', hour: "3", key: "1"}, {color: '#ededed', hour: "3", key: "2"}, {color: '#ededed', hour: "3", key: "3"}], key: "3" },
          { time: "4 AM", increments: [{color: 'white', hour: "4", key: "0"}, {color: 'white', hour: "4", key: "1"}, {color: 'white', hour: "4", key: "2"}, {color: 'white', hour: "4", key: "3"}], key: "4" },
          { time: "5 AM", increments: [{color: '#ededed', hour: "5", key: "0"}, {color: '#ededed', hour: "5", key: "1"}, {color: '#ededed', hour: "5", key: "2"}, {color: '#ededed', hour: "5", key: "3"}], key: "5" },
          { time: "6 AM", increments: [{color: 'white', hour: "6", key: "0"}, {color: 'white', hour: "6", key: "1"}, {color: 'white', hour: "6", key: "2"}, {color: 'white', hour: "6", key: "3"}], key: "6" },
          { time: "7 AM", increments: [{color: '#ededed', hour: "7", key: "0"}, {color: '#ededed', hour: "7", key: "1"}, {color: '#ededed', hour: "7", key: "2"}, {color: '#ededed', hour: "7", key: "3"}], key: "7" },
          { time: "8 AM", increments: [{color: 'white', hour: "8", key: "0"}, {color: 'white', hour: "8", key: "1"}, {color: 'white', hour: "8", key: "2"}, {color: 'white', hour: "8", key: "3"}], key: "8" },
          { time: "9 AM", increments: [{color: '#ededed', hour: "9", key: "0"}, {color: '#ededed', hour: "9", key: "1"}, {color: '#ededed', hour: "9", key: "2"}, {color: '#ededed', hour: "9", key: "3"}], key: "9" },
          { time: "10 AM", increments: [{color: 'white', hour: "10", key: "0"}, {color: 'white', hour: "10", key: "1"}, {color: 'white', hour: "10", key: "2"}, {color: 'white', hour: "10", key: "3"}], key: "10" },
          { time: "11 AM", increments: [{color: '#ededed', hour: "11", key: "0"}, {color: '#ededed', hour: "11", key: "1"}, {color: '#ededed', hour: "11", key: "2"}, {color: '#ededed', hour: "11", key: "3"}], key: "11" },
          { time: "12 PM", increments: [{color: 'white', hour: "12", key: "0"}, {color: 'white', hour: "12", key: "1"}, {color: 'white', hour: "12", key: "2"}, {color: 'white', hour: "12", key: "3"}], key: "12" },
          { time: "1 PM", increments: [{color: '#ededed', hour: "13", key: "0"}, {color: '#ededed', hour: "13", key: "1"}, {color: '#ededed', hour: "13", key: "2"}, {color: '#ededed', hour: "13", key: "3"}], key: "13" },
          { time: "2 PM", increments: [{color: 'white', hour: "14", key: "0"}, {color: 'white', hour: "14", key: "1"}, {color: 'white', hour: "14", key: "2"}, {color: 'white', hour: "14", key: "3"}], key: "14" },
          { time: "3 PM", increments: [{color: '#ededed', hour: "15", key: "0"}, {color: '#ededed', hour: "15", key: "1"}, {color: '#ededed', hour: "15", key: "2"}, {color: '#ededed', hour: "15", key: "3"}], key: "15" },
          { time: "4 PM", increments: [{color: 'white', hour: "16", key: "0"}, {color: 'white', hour: "16", key: "1"}, {color: 'white', hour: "16", key: "2"}, {color: 'white', hour: "16", key: "3"}], key: "16" },
          { time: "5 PM", increments: [{color: '#ededed', hour: "17", key: "0"}, {color: '#ededed', hour: "17", key: "1"}, {color: '#ededed', hour: "17", key: "2"}, {color: '#ededed', hour: "17", key: "3"}], key: "17" },
          { time: "6 PM", increments: [{color: 'white', hour: "18", key: "0"}, {color: 'white', hour: "18", key: "1"}, {color: 'white', hour: "18", key: "2"}, {color: 'white', hour: "18", key: "3"}], key: "18" },
          { time: "7 PM", increments: [{color: '#ededed', hour: "19", key: "0"}, {color: '#ededed', hour: "19", key: "1"}, {color: '#ededed', hour: "19", key: "2"}, {color: '#ededed', hour: "19", key: "3"}], key: "19" },
          { time: "8 PM", increments: [{color: 'white', hour: "20", key: "0"}, {color: 'white', hour: "20", key: "1"}, {color: 'white', hour: "20", key: "2"}, {color: 'white', hour: "20", key: "3"}], key: "20" },
          { time: "9 PM", increments: [{color: '#ededed', hour: "21", key: "0"}, {color: '#ededed', hour: "21", key: "1"}, {color: '#ededed', hour: "21", key: "2"}, {color: '#ededed', hour: "21", key: "3"}], key: "21" },
          { time: "10 PM", increments: [{color: 'white', hour: "22", key: "0"}, {color: 'white', hour: "22", key: "1"}, {color: 'white', hour: "22", key: "2"}, {color: 'white', hour: "22", key: "3"}], key: "22" },
          { time: "11 PM", increments: [{color: '#ededed', hour: "23", key: "0"}, {color: '#ededed', hour: "23", key: "1"}, {color: '#ededed', hour: "23", key: "2"}, {color: '#ededed', hour: "23", key: "3"}], key: "23" },
        ],
        key: "0",
      },
      {
        day: "Monday",
        freeTimes: [
          { time: "12 AM", increments: [{color: 'white', hour: "0", key: "0"}, {color: 'white', hour: "0", key: "1"}, {color: 'white', hour: "0", key: "2"}, {color: 'white', hour: "0", key: "3"}], key: "0" },
          { time: "1 AM", increments: [{color: '#ededed', hour: "1", key: "0"}, {color: '#ededed', hour: "1", key: "1"}, {color: '#ededed', hour: "1", key: "2"}, {color: '#ededed', hour: "1", key: "3"}], key: "1" },
          { time: "2 AM", increments: [{color: 'white', hour: "2", key: "0"}, {color: 'white', hour: "2", key: "1"}, {color: 'white', hour: "2", key: "2"}, {color: 'white', hour: "2", key: "3"}], key: "2" },
          { time: "3 AM", increments: [{color: '#ededed', hour: "3", key: "0"}, {color: '#ededed', hour: "3", key: "1"}, {color: '#ededed', hour: "3", key: "2"}, {color: '#ededed', hour: "3", key: "3"}], key: "3" },
          { time: "4 AM", increments: [{color: 'white', hour: "4", key: "0"}, {color: 'white', hour: "4", key: "1"}, {color: 'white', hour: "4", key: "2"}, {color: 'white', hour: "4", key: "3"}], key: "4" },
          { time: "5 AM", increments: [{color: '#ededed', hour: "5", key: "0"}, {color: '#ededed', hour: "5", key: "1"}, {color: '#ededed', hour: "5", key: "2"}, {color: '#ededed', hour: "5", key: "3"}], key: "5" },
          { time: "6 AM", increments: [{color: 'white', hour: "6", key: "0"}, {color: 'white', hour: "6", key: "1"}, {color: 'white', hour: "6", key: "2"}, {color: 'white', hour: "6", key: "3"}], key: "6" },
          { time: "7 AM", increments: [{color: '#ededed', hour: "7", key: "0"}, {color: '#ededed', hour: "7", key: "1"}, {color: '#ededed', hour: "7", key: "2"}, {color: '#ededed', hour: "7", key: "3"}], key: "7" },
          { time: "8 AM", increments: [{color: 'white', hour: "8", key: "0"}, {color: 'white', hour: "8", key: "1"}, {color: 'white', hour: "8", key: "2"}, {color: 'white', hour: "8", key: "3"}], key: "8" },
          { time: "9 AM", increments: [{color: '#ededed', hour: "9", key: "0"}, {color: '#ededed', hour: "9", key: "1"}, {color: '#ededed', hour: "9", key: "2"}, {color: '#ededed', hour: "9", key: "3"}], key: "9" },
          { time: "10 AM", increments: [{color: 'white', hour: "10", key: "0"}, {color: 'white', hour: "10", key: "1"}, {color: 'white', hour: "10", key: "2"}, {color: 'white', hour: "10", key: "3"}], key: "10" },
          { time: "11 AM", increments: [{color: '#ededed', hour: "11", key: "0"}, {color: '#ededed', hour: "11", key: "1"}, {color: '#ededed', hour: "11", key: "2"}, {color: '#ededed', hour: "11", key: "3"}], key: "11" },
          { time: "12 PM", increments: [{color: 'white', hour: "12", key: "0"}, {color: 'white', hour: "12", key: "1"}, {color: 'white', hour: "12", key: "2"}, {color: 'white', hour: "12", key: "3"}], key: "12" },
          { time: "1 PM", increments: [{color: '#ededed', hour: "13", key: "0"}, {color: '#ededed', hour: "13", key: "1"}, {color: '#ededed', hour: "13", key: "2"}, {color: '#ededed', hour: "13", key: "3"}], key: "13" },
          { time: "2 PM", increments: [{color: 'white', hour: "14", key: "0"}, {color: 'white', hour: "14", key: "1"}, {color: 'white', hour: "14", key: "2"}, {color: 'white', hour: "14", key: "3"}], key: "14" },
          { time: "3 PM", increments: [{color: '#ededed', hour: "15", key: "0"}, {color: '#ededed', hour: "15", key: "1"}, {color: '#ededed', hour: "15", key: "2"}, {color: '#ededed', hour: "15", key: "3"}], key: "15" },
          { time: "4 PM", increments: [{color: 'white', hour: "16", key: "0"}, {color: 'white', hour: "16", key: "1"}, {color: 'white', hour: "16", key: "2"}, {color: 'white', hour: "16", key: "3"}], key: "16" },
          { time: "5 PM", increments: [{color: '#ededed', hour: "17", key: "0"}, {color: '#ededed', hour: "17", key: "1"}, {color: '#ededed', hour: "17", key: "2"}, {color: '#ededed', hour: "17", key: "3"}], key: "17" },
          { time: "6 PM", increments: [{color: 'white', hour: "18", key: "0"}, {color: 'white', hour: "18", key: "1"}, {color: 'white', hour: "18", key: "2"}, {color: 'white', hour: "18", key: "3"}], key: "18" },
          { time: "7 PM", increments: [{color: '#ededed', hour: "19", key: "0"}, {color: '#ededed', hour: "19", key: "1"}, {color: '#ededed', hour: "19", key: "2"}, {color: '#ededed', hour: "19", key: "3"}], key: "19" },
          { time: "8 PM", increments: [{color: 'white', hour: "20", key: "0"}, {color: 'white', hour: "20", key: "1"}, {color: 'white', hour: "20", key: "2"}, {color: 'white', hour: "20", key: "3"}], key: "20" },
          { time: "9 PM", increments: [{color: '#ededed', hour: "21", key: "0"}, {color: '#ededed', hour: "21", key: "1"}, {color: '#ededed', hour: "21", key: "2"}, {color: '#ededed', hour: "21", key: "3"}], key: "21" },
          { time: "10 PM", increments: [{color: 'white', hour: "22", key: "0"}, {color: 'white', hour: "22", key: "1"}, {color: 'white', hour: "22", key: "2"}, {color: 'white', hour: "22", key: "3"}], key: "22" },
          { time: "11 PM", increments: [{color: '#ededed', hour: "23", key: "0"}, {color: '#ededed', hour: "23", key: "1"}, {color: '#ededed', hour: "23", key: "2"}, {color: '#ededed', hour: "23", key: "3"}], key: "23" },
        ],
        key: "1",
      },
      {
        day: "Tuesday",
        freeTimes: [
          { time: "12 AM", increments: [{color: 'white', hour: "0", key: "0"}, {color: 'white', hour: "0", key: "1"}, {color: 'white', hour: "0", key: "2"}, {color: 'white', hour: "0", key: "3"}], key: "0" },
          { time: "1 AM", increments: [{color: '#ededed', hour: "1", key: "0"}, {color: '#ededed', hour: "1", key: "1"}, {color: '#ededed', hour: "1", key: "2"}, {color: '#ededed', hour: "1", key: "3"}], key: "1" },
          { time: "2 AM", increments: [{color: 'white', hour: "2", key: "0"}, {color: 'white', hour: "2", key: "1"}, {color: 'white', hour: "2", key: "2"}, {color: 'white', hour: "2", key: "3"}], key: "2" },
          { time: "3 AM", increments: [{color: '#ededed', hour: "3", key: "0"}, {color: '#ededed', hour: "3", key: "1"}, {color: '#ededed', hour: "3", key: "2"}, {color: '#ededed', hour: "3", key: "3"}], key: "3" },
          { time: "4 AM", increments: [{color: 'white', hour: "4", key: "0"}, {color: 'white', hour: "4", key: "1"}, {color: 'white', hour: "4", key: "2"}, {color: 'white', hour: "4", key: "3"}], key: "4" },
          { time: "5 AM", increments: [{color: '#ededed', hour: "5", key: "0"}, {color: '#ededed', hour: "5", key: "1"}, {color: '#ededed', hour: "5", key: "2"}, {color: '#ededed', hour: "5", key: "3"}], key: "5" },
          { time: "6 AM", increments: [{color: 'white', hour: "6", key: "0"}, {color: 'white', hour: "6", key: "1"}, {color: 'white', hour: "6", key: "2"}, {color: 'white', hour: "6", key: "3"}], key: "6" },
          { time: "7 AM", increments: [{color: '#ededed', hour: "7", key: "0"}, {color: '#ededed', hour: "7", key: "1"}, {color: '#ededed', hour: "7", key: "2"}, {color: '#ededed', hour: "7", key: "3"}], key: "7" },
          { time: "8 AM", increments: [{color: 'white', hour: "8", key: "0"}, {color: 'white', hour: "8", key: "1"}, {color: 'white', hour: "8", key: "2"}, {color: 'white', hour: "8", key: "3"}], key: "8" },
          { time: "9 AM", increments: [{color: '#ededed', hour: "9", key: "0"}, {color: '#ededed', hour: "9", key: "1"}, {color: '#ededed', hour: "9", key: "2"}, {color: '#ededed', hour: "9", key: "3"}], key: "9" },
          { time: "10 AM", increments: [{color: 'white', hour: "10", key: "0"}, {color: 'white', hour: "10", key: "1"}, {color: 'white', hour: "10", key: "2"}, {color: 'white', hour: "10", key: "3"}], key: "10" },
          { time: "11 AM", increments: [{color: '#ededed', hour: "11", key: "0"}, {color: '#ededed', hour: "11", key: "1"}, {color: '#ededed', hour: "11", key: "2"}, {color: '#ededed', hour: "11", key: "3"}], key: "11" },
          { time: "12 PM", increments: [{color: 'white', hour: "12", key: "0"}, {color: 'white', hour: "12", key: "1"}, {color: 'white', hour: "12", key: "2"}, {color: 'white', hour: "12", key: "3"}], key: "12" },
          { time: "1 PM", increments: [{color: '#ededed', hour: "13", key: "0"}, {color: '#ededed', hour: "13", key: "1"}, {color: '#ededed', hour: "13", key: "2"}, {color: '#ededed', hour: "13", key: "3"}], key: "13" },
          { time: "2 PM", increments: [{color: 'white', hour: "14", key: "0"}, {color: 'white', hour: "14", key: "1"}, {color: 'white', hour: "14", key: "2"}, {color: 'white', hour: "14", key: "3"}], key: "14" },
          { time: "3 PM", increments: [{color: '#ededed', hour: "15", key: "0"}, {color: '#ededed', hour: "15", key: "1"}, {color: '#ededed', hour: "15", key: "2"}, {color: '#ededed', hour: "15", key: "3"}], key: "15" },
          { time: "4 PM", increments: [{color: 'white', hour: "16", key: "0"}, {color: 'white', hour: "16", key: "1"}, {color: 'white', hour: "16", key: "2"}, {color: 'white', hour: "16", key: "3"}], key: "16" },
          { time: "5 PM", increments: [{color: '#ededed', hour: "17", key: "0"}, {color: '#ededed', hour: "17", key: "1"}, {color: '#ededed', hour: "17", key: "2"}, {color: '#ededed', hour: "17", key: "3"}], key: "17" },
          { time: "6 PM", increments: [{color: 'white', hour: "18", key: "0"}, {color: 'white', hour: "18", key: "1"}, {color: 'white', hour: "18", key: "2"}, {color: 'white', hour: "18", key: "3"}], key: "18" },
          { time: "7 PM", increments: [{color: '#ededed', hour: "19", key: "0"}, {color: '#ededed', hour: "19", key: "1"}, {color: '#ededed', hour: "19", key: "2"}, {color: '#ededed', hour: "19", key: "3"}], key: "19" },
          { time: "8 PM", increments: [{color: 'white', hour: "20", key: "0"}, {color: 'white', hour: "20", key: "1"}, {color: 'white', hour: "20", key: "2"}, {color: 'white', hour: "20", key: "3"}], key: "20" },
          { time: "9 PM", increments: [{color: '#ededed', hour: "21", key: "0"}, {color: '#ededed', hour: "21", key: "1"}, {color: '#ededed', hour: "21", key: "2"}, {color: '#ededed', hour: "21", key: "3"}], key: "21" },
          { time: "10 PM", increments: [{color: 'white', hour: "22", key: "0"}, {color: 'white', hour: "22", key: "1"}, {color: 'white', hour: "22", key: "2"}, {color: 'white', hour: "22", key: "3"}], key: "22" },
          { time: "11 PM", increments: [{color: '#ededed', hour: "23", key: "0"}, {color: '#ededed', hour: "23", key: "1"}, {color: '#ededed', hour: "23", key: "2"}, {color: '#ededed', hour: "23", key: "3"}], key: "23" },
        ],
        key: "2",
      },
      {
        day: "Wednesday",
        freeTimes: [
          { time: "12 AM", increments: [{color: 'white', hour: "0", key: "0"}, {color: 'white', hour: "0", key: "1"}, {color: 'white', hour: "0", key: "2"}, {color: 'white', hour: "0", key: "3"}], key: "0" },
          { time: "1 AM", increments: [{color: '#ededed', hour: "1", key: "0"}, {color: '#ededed', hour: "1", key: "1"}, {color: '#ededed', hour: "1", key: "2"}, {color: '#ededed', hour: "1", key: "3"}], key: "1" },
          { time: "2 AM", increments: [{color: 'white', hour: "2", key: "0"}, {color: 'white', hour: "2", key: "1"}, {color: 'white', hour: "2", key: "2"}, {color: 'white', hour: "2", key: "3"}], key: "2" },
          { time: "3 AM", increments: [{color: '#ededed', hour: "3", key: "0"}, {color: '#ededed', hour: "3", key: "1"}, {color: '#ededed', hour: "3", key: "2"}, {color: '#ededed', hour: "3", key: "3"}], key: "3" },
          { time: "4 AM", increments: [{color: 'white', hour: "4", key: "0"}, {color: 'white', hour: "4", key: "1"}, {color: 'white', hour: "4", key: "2"}, {color: 'white', hour: "4", key: "3"}], key: "4" },
          { time: "5 AM", increments: [{color: '#ededed', hour: "5", key: "0"}, {color: '#ededed', hour: "5", key: "1"}, {color: '#ededed', hour: "5", key: "2"}, {color: '#ededed', hour: "5", key: "3"}], key: "5" },
          { time: "6 AM", increments: [{color: 'white', hour: "6", key: "0"}, {color: 'white', hour: "6", key: "1"}, {color: 'white', hour: "6", key: "2"}, {color: 'white', hour: "6", key: "3"}], key: "6" },
          { time: "7 AM", increments: [{color: '#ededed', hour: "7", key: "0"}, {color: '#ededed', hour: "7", key: "1"}, {color: '#ededed', hour: "7", key: "2"}, {color: '#ededed', hour: "7", key: "3"}], key: "7" },
          { time: "8 AM", increments: [{color: 'white', hour: "8", key: "0"}, {color: 'white', hour: "8", key: "1"}, {color: 'white', hour: "8", key: "2"}, {color: 'white', hour: "8", key: "3"}], key: "8" },
          { time: "9 AM", increments: [{color: '#ededed', hour: "9", key: "0"}, {color: '#ededed', hour: "9", key: "1"}, {color: '#ededed', hour: "9", key: "2"}, {color: '#ededed', hour: "9", key: "3"}], key: "9" },
          { time: "10 AM", increments: [{color: 'white', hour: "10", key: "0"}, {color: 'white', hour: "10", key: "1"}, {color: 'white', hour: "10", key: "2"}, {color: 'white', hour: "10", key: "3"}], key: "10" },
          { time: "11 AM", increments: [{color: '#ededed', hour: "11", key: "0"}, {color: '#ededed', hour: "11", key: "1"}, {color: '#ededed', hour: "11", key: "2"}, {color: '#ededed', hour: "11", key: "3"}], key: "11" },
          { time: "12 PM", increments: [{color: 'white', hour: "12", key: "0"}, {color: 'white', hour: "12", key: "1"}, {color: 'white', hour: "12", key: "2"}, {color: 'white', hour: "12", key: "3"}], key: "12" },
          { time: "1 PM", increments: [{color: '#ededed', hour: "13", key: "0"}, {color: '#ededed', hour: "13", key: "1"}, {color: '#ededed', hour: "13", key: "2"}, {color: '#ededed', hour: "13", key: "3"}], key: "13" },
          { time: "2 PM", increments: [{color: 'white', hour: "14", key: "0"}, {color: 'white', hour: "14", key: "1"}, {color: 'white', hour: "14", key: "2"}, {color: 'white', hour: "14", key: "3"}], key: "14" },
          { time: "3 PM", increments: [{color: '#ededed', hour: "15", key: "0"}, {color: '#ededed', hour: "15", key: "1"}, {color: '#ededed', hour: "15", key: "2"}, {color: '#ededed', hour: "15", key: "3"}], key: "15" },
          { time: "4 PM", increments: [{color: 'white', hour: "16", key: "0"}, {color: 'white', hour: "16", key: "1"}, {color: 'white', hour: "16", key: "2"}, {color: 'white', hour: "16", key: "3"}], key: "16" },
          { time: "5 PM", increments: [{color: '#ededed', hour: "17", key: "0"}, {color: '#ededed', hour: "17", key: "1"}, {color: '#ededed', hour: "17", key: "2"}, {color: '#ededed', hour: "17", key: "3"}], key: "17" },
          { time: "6 PM", increments: [{color: 'white', hour: "18", key: "0"}, {color: 'white', hour: "18", key: "1"}, {color: 'white', hour: "18", key: "2"}, {color: 'white', hour: "18", key: "3"}], key: "18" },
          { time: "7 PM", increments: [{color: '#ededed', hour: "19", key: "0"}, {color: '#ededed', hour: "19", key: "1"}, {color: '#ededed', hour: "19", key: "2"}, {color: '#ededed', hour: "19", key: "3"}], key: "19" },
          { time: "8 PM", increments: [{color: 'white', hour: "20", key: "0"}, {color: 'white', hour: "20", key: "1"}, {color: 'white', hour: "20", key: "2"}, {color: 'white', hour: "20", key: "3"}], key: "20" },
          { time: "9 PM", increments: [{color: '#ededed', hour: "21", key: "0"}, {color: '#ededed', hour: "21", key: "1"}, {color: '#ededed', hour: "21", key: "2"}, {color: '#ededed', hour: "21", key: "3"}], key: "21" },
          { time: "10 PM", increments: [{color: 'white', hour: "22", key: "0"}, {color: 'white', hour: "22", key: "1"}, {color: 'white', hour: "22", key: "2"}, {color: 'white', hour: "22", key: "3"}], key: "22" },
          { time: "11 PM", increments: [{color: '#ededed', hour: "23", key: "0"}, {color: '#ededed', hour: "23", key: "1"}, {color: '#ededed', hour: "23", key: "2"}, {color: '#ededed', hour: "23", key: "3"}], key: "23" },
        ],
        key: "3",
      },
      {
        day: "Thursday",
        freeTimes: [
          { time: "12 AM", increments: [{color: 'white', hour: "0", key: "0"}, {color: 'white', hour: "0", key: "1"}, {color: 'white', hour: "0", key: "2"}, {color: 'white', hour: "0", key: "3"}], key: "0" },
          { time: "1 AM", increments: [{color: '#ededed', hour: "1", key: "0"}, {color: '#ededed', hour: "1", key: "1"}, {color: '#ededed', hour: "1", key: "2"}, {color: '#ededed', hour: "1", key: "3"}], key: "1" },
          { time: "2 AM", increments: [{color: 'white', hour: "2", key: "0"}, {color: 'white', hour: "2", key: "1"}, {color: 'white', hour: "2", key: "2"}, {color: 'white', hour: "2", key: "3"}], key: "2" },
          { time: "3 AM", increments: [{color: '#ededed', hour: "3", key: "0"}, {color: '#ededed', hour: "3", key: "1"}, {color: '#ededed', hour: "3", key: "2"}, {color: '#ededed', hour: "3", key: "3"}], key: "3" },
          { time: "4 AM", increments: [{color: 'white', hour: "4", key: "0"}, {color: 'white', hour: "4", key: "1"}, {color: 'white', hour: "4", key: "2"}, {color: 'white', hour: "4", key: "3"}], key: "4" },
          { time: "5 AM", increments: [{color: '#ededed', hour: "5", key: "0"}, {color: '#ededed', hour: "5", key: "1"}, {color: '#ededed', hour: "5", key: "2"}, {color: '#ededed', hour: "5", key: "3"}], key: "5" },
          { time: "6 AM", increments: [{color: 'white', hour: "6", key: "0"}, {color: 'white', hour: "6", key: "1"}, {color: 'white', hour: "6", key: "2"}, {color: 'white', hour: "6", key: "3"}], key: "6" },
          { time: "7 AM", increments: [{color: '#ededed', hour: "7", key: "0"}, {color: '#ededed', hour: "7", key: "1"}, {color: '#ededed', hour: "7", key: "2"}, {color: '#ededed', hour: "7", key: "3"}], key: "7" },
          { time: "8 AM", increments: [{color: 'white', hour: "8", key: "0"}, {color: 'white', hour: "8", key: "1"}, {color: 'white', hour: "8", key: "2"}, {color: 'white', hour: "8", key: "3"}], key: "8" },
          { time: "9 AM", increments: [{color: '#ededed', hour: "9", key: "0"}, {color: '#ededed', hour: "9", key: "1"}, {color: '#ededed', hour: "9", key: "2"}, {color: '#ededed', hour: "9", key: "3"}], key: "9" },
          { time: "10 AM", increments: [{color: 'white', hour: "10", key: "0"}, {color: 'white', hour: "10", key: "1"}, {color: 'white', hour: "10", key: "2"}, {color: 'white', hour: "10", key: "3"}], key: "10" },
          { time: "11 AM", increments: [{color: '#ededed', hour: "11", key: "0"}, {color: '#ededed', hour: "11", key: "1"}, {color: '#ededed', hour: "11", key: "2"}, {color: '#ededed', hour: "11", key: "3"}], key: "11" },
          { time: "12 PM", increments: [{color: 'white', hour: "12", key: "0"}, {color: 'white', hour: "12", key: "1"}, {color: 'white', hour: "12", key: "2"}, {color: 'white', hour: "12", key: "3"}], key: "12" },
          { time: "1 PM", increments: [{color: '#ededed', hour: "13", key: "0"}, {color: '#ededed', hour: "13", key: "1"}, {color: '#ededed', hour: "13", key: "2"}, {color: '#ededed', hour: "13", key: "3"}], key: "13" },
          { time: "2 PM", increments: [{color: 'white', hour: "14", key: "0"}, {color: 'white', hour: "14", key: "1"}, {color: 'white', hour: "14", key: "2"}, {color: 'white', hour: "14", key: "3"}], key: "14" },
          { time: "3 PM", increments: [{color: '#ededed', hour: "15", key: "0"}, {color: '#ededed', hour: "15", key: "1"}, {color: '#ededed', hour: "15", key: "2"}, {color: '#ededed', hour: "15", key: "3"}], key: "15" },
          { time: "4 PM", increments: [{color: 'white', hour: "16", key: "0"}, {color: 'white', hour: "16", key: "1"}, {color: 'white', hour: "16", key: "2"}, {color: 'white', hour: "16", key: "3"}], key: "16" },
          { time: "5 PM", increments: [{color: '#ededed', hour: "17", key: "0"}, {color: '#ededed', hour: "17", key: "1"}, {color: '#ededed', hour: "17", key: "2"}, {color: '#ededed', hour: "17", key: "3"}], key: "17" },
          { time: "6 PM", increments: [{color: 'white', hour: "18", key: "0"}, {color: 'white', hour: "18", key: "1"}, {color: 'white', hour: "18", key: "2"}, {color: 'white', hour: "18", key: "3"}], key: "18" },
          { time: "7 PM", increments: [{color: '#ededed', hour: "19", key: "0"}, {color: '#ededed', hour: "19", key: "1"}, {color: '#ededed', hour: "19", key: "2"}, {color: '#ededed', hour: "19", key: "3"}], key: "19" },
          { time: "8 PM", increments: [{color: 'white', hour: "20", key: "0"}, {color: 'white', hour: "20", key: "1"}, {color: 'white', hour: "20", key: "2"}, {color: 'white', hour: "20", key: "3"}], key: "20" },
          { time: "9 PM", increments: [{color: '#ededed', hour: "21", key: "0"}, {color: '#ededed', hour: "21", key: "1"}, {color: '#ededed', hour: "21", key: "2"}, {color: '#ededed', hour: "21", key: "3"}], key: "21" },
          { time: "10 PM", increments: [{color: 'white', hour: "22", key: "0"}, {color: 'white', hour: "22", key: "1"}, {color: 'white', hour: "22", key: "2"}, {color: 'white', hour: "22", key: "3"}], key: "22" },
          { time: "11 PM", increments: [{color: '#ededed', hour: "23", key: "0"}, {color: '#ededed', hour: "23", key: "1"}, {color: '#ededed', hour: "23", key: "2"}, {color: '#ededed', hour: "23", key: "3"}], key: "23" },
        ],
        key: "4",
      },
      {
        day: "Friday",
        freeTimes: [
          { time: "12 AM", increments: [{color: 'white', hour: "0", key: "0"}, {color: 'white', hour: "0", key: "1"}, {color: 'white', hour: "0", key: "2"}, {color: 'white', hour: "0", key: "3"}], key: "0" },
          { time: "1 AM", increments: [{color: '#ededed', hour: "1", key: "0"}, {color: '#ededed', hour: "1", key: "1"}, {color: '#ededed', hour: "1", key: "2"}, {color: '#ededed', hour: "1", key: "3"}], key: "1" },
          { time: "2 AM", increments: [{color: 'white', hour: "2", key: "0"}, {color: 'white', hour: "2", key: "1"}, {color: 'white', hour: "2", key: "2"}, {color: 'white', hour: "2", key: "3"}], key: "2" },
          { time: "3 AM", increments: [{color: '#ededed', hour: "3", key: "0"}, {color: '#ededed', hour: "3", key: "1"}, {color: '#ededed', hour: "3", key: "2"}, {color: '#ededed', hour: "3", key: "3"}], key: "3" },
          { time: "4 AM", increments: [{color: 'white', hour: "4", key: "0"}, {color: 'white', hour: "4", key: "1"}, {color: 'white', hour: "4", key: "2"}, {color: 'white', hour: "4", key: "3"}], key: "4" },
          { time: "5 AM", increments: [{color: '#ededed', hour: "5", key: "0"}, {color: '#ededed', hour: "5", key: "1"}, {color: '#ededed', hour: "5", key: "2"}, {color: '#ededed', hour: "5", key: "3"}], key: "5" },
          { time: "6 AM", increments: [{color: 'white', hour: "6", key: "0"}, {color: 'white', hour: "6", key: "1"}, {color: 'white', hour: "6", key: "2"}, {color: 'white', hour: "6", key: "3"}], key: "6" },
          { time: "7 AM", increments: [{color: '#ededed', hour: "7", key: "0"}, {color: '#ededed', hour: "7", key: "1"}, {color: '#ededed', hour: "7", key: "2"}, {color: '#ededed', hour: "7", key: "3"}], key: "7" },
          { time: "8 AM", increments: [{color: 'white', hour: "8", key: "0"}, {color: 'white', hour: "8", key: "1"}, {color: 'white', hour: "8", key: "2"}, {color: 'white', hour: "8", key: "3"}], key: "8" },
          { time: "9 AM", increments: [{color: '#ededed', hour: "9", key: "0"}, {color: '#ededed', hour: "9", key: "1"}, {color: '#ededed', hour: "9", key: "2"}, {color: '#ededed', hour: "9", key: "3"}], key: "9" },
          { time: "10 AM", increments: [{color: 'white', hour: "10", key: "0"}, {color: 'white', hour: "10", key: "1"}, {color: 'white', hour: "10", key: "2"}, {color: 'white', hour: "10", key: "3"}], key: "10" },
          { time: "11 AM", increments: [{color: '#ededed', hour: "11", key: "0"}, {color: '#ededed', hour: "11", key: "1"}, {color: '#ededed', hour: "11", key: "2"}, {color: '#ededed', hour: "11", key: "3"}], key: "11" },
          { time: "12 PM", increments: [{color: 'white', hour: "12", key: "0"}, {color: 'white', hour: "12", key: "1"}, {color: 'white', hour: "12", key: "2"}, {color: 'white', hour: "12", key: "3"}], key: "12" },
          { time: "1 PM", increments: [{color: '#ededed', hour: "13", key: "0"}, {color: '#ededed', hour: "13", key: "1"}, {color: '#ededed', hour: "13", key: "2"}, {color: '#ededed', hour: "13", key: "3"}], key: "13" },
          { time: "2 PM", increments: [{color: 'white', hour: "14", key: "0"}, {color: 'white', hour: "14", key: "1"}, {color: 'white', hour: "14", key: "2"}, {color: 'white', hour: "14", key: "3"}], key: "14" },
          { time: "3 PM", increments: [{color: '#ededed', hour: "15", key: "0"}, {color: '#ededed', hour: "15", key: "1"}, {color: '#ededed', hour: "15", key: "2"}, {color: '#ededed', hour: "15", key: "3"}], key: "15" },
          { time: "4 PM", increments: [{color: 'white', hour: "16", key: "0"}, {color: 'white', hour: "16", key: "1"}, {color: 'white', hour: "16", key: "2"}, {color: 'white', hour: "16", key: "3"}], key: "16" },
          { time: "5 PM", increments: [{color: '#ededed', hour: "17", key: "0"}, {color: '#ededed', hour: "17", key: "1"}, {color: '#ededed', hour: "17", key: "2"}, {color: '#ededed', hour: "17", key: "3"}], key: "17" },
          { time: "6 PM", increments: [{color: 'white', hour: "18", key: "0"}, {color: 'white', hour: "18", key: "1"}, {color: 'white', hour: "18", key: "2"}, {color: 'white', hour: "18", key: "3"}], key: "18" },
          { time: "7 PM", increments: [{color: '#ededed', hour: "19", key: "0"}, {color: '#ededed', hour: "19", key: "1"}, {color: '#ededed', hour: "19", key: "2"}, {color: '#ededed', hour: "19", key: "3"}], key: "19" },
          { time: "8 PM", increments: [{color: 'white', hour: "20", key: "0"}, {color: 'white', hour: "20", key: "1"}, {color: 'white', hour: "20", key: "2"}, {color: 'white', hour: "20", key: "3"}], key: "20" },
          { time: "9 PM", increments: [{color: '#ededed', hour: "21", key: "0"}, {color: '#ededed', hour: "21", key: "1"}, {color: '#ededed', hour: "21", key: "2"}, {color: '#ededed', hour: "21", key: "3"}], key: "21" },
          { time: "10 PM", increments: [{color: 'white', hour: "22", key: "0"}, {color: 'white', hour: "22", key: "1"}, {color: 'white', hour: "22", key: "2"}, {color: 'white', hour: "22", key: "3"}], key: "22" },
          { time: "11 PM", increments: [{color: '#ededed', hour: "23", key: "0"}, {color: '#ededed', hour: "23", key: "1"}, {color: '#ededed', hour: "23", key: "2"}, {color: '#ededed', hour: "23", key: "3"}], key: "23" },
        ],
        key: "5",
      },
      {
        day: "Saturday",
        freeTimes: [
          { time: "12 AM", increments: [{color: 'white', hour: "0", key: "0"}, {color: 'white', hour: "0", key: "1"}, {color: 'white', hour: "0", key: "2"}, {color: 'white', hour: "0", key: "3"}], key: "0" },
          { time: "1 AM", increments: [{color: '#ededed', hour: "1", key: "0"}, {color: '#ededed', hour: "1", key: "1"}, {color: '#ededed', hour: "1", key: "2"}, {color: '#ededed', hour: "1", key: "3"}], key: "1" },
          { time: "2 AM", increments: [{color: 'white', hour: "2", key: "0"}, {color: 'white', hour: "2", key: "1"}, {color: 'white', hour: "2", key: "2"}, {color: 'white', hour: "2", key: "3"}], key: "2" },
          { time: "3 AM", increments: [{color: '#ededed', hour: "3", key: "0"}, {color: '#ededed', hour: "3", key: "1"}, {color: '#ededed', hour: "3", key: "2"}, {color: '#ededed', hour: "3", key: "3"}], key: "3" },
          { time: "4 AM", increments: [{color: 'white', hour: "4", key: "0"}, {color: 'white', hour: "4", key: "1"}, {color: 'white', hour: "4", key: "2"}, {color: 'white', hour: "4", key: "3"}], key: "4" },
          { time: "5 AM", increments: [{color: '#ededed', hour: "5", key: "0"}, {color: '#ededed', hour: "5", key: "1"}, {color: '#ededed', hour: "5", key: "2"}, {color: '#ededed', hour: "5", key: "3"}], key: "5" },
          { time: "6 AM", increments: [{color: 'white', hour: "6", key: "0"}, {color: 'white', hour: "6", key: "1"}, {color: 'white', hour: "6", key: "2"}, {color: 'white', hour: "6", key: "3"}], key: "6" },
          { time: "7 AM", increments: [{color: '#ededed', hour: "7", key: "0"}, {color: '#ededed', hour: "7", key: "1"}, {color: '#ededed', hour: "7", key: "2"}, {color: '#ededed', hour: "7", key: "3"}], key: "7" },
          { time: "8 AM", increments: [{color: 'white', hour: "8", key: "0"}, {color: 'white', hour: "8", key: "1"}, {color: 'white', hour: "8", key: "2"}, {color: 'white', hour: "8", key: "3"}], key: "8" },
          { time: "9 AM", increments: [{color: '#ededed', hour: "9", key: "0"}, {color: '#ededed', hour: "9", key: "1"}, {color: '#ededed', hour: "9", key: "2"}, {color: '#ededed', hour: "9", key: "3"}], key: "9" },
          { time: "10 AM", increments: [{color: 'white', hour: "10", key: "0"}, {color: 'white', hour: "10", key: "1"}, {color: 'white', hour: "10", key: "2"}, {color: 'white', hour: "10", key: "3"}], key: "10" },
          { time: "11 AM", increments: [{color: '#ededed', hour: "11", key: "0"}, {color: '#ededed', hour: "11", key: "1"}, {color: '#ededed', hour: "11", key: "2"}, {color: '#ededed', hour: "11", key: "3"}], key: "11" },
          { time: "12 PM", increments: [{color: 'white', hour: "12", key: "0"}, {color: 'white', hour: "12", key: "1"}, {color: 'white', hour: "12", key: "2"}, {color: 'white', hour: "12", key: "3"}], key: "12" },
          { time: "1 PM", increments: [{color: '#ededed', hour: "13", key: "0"}, {color: '#ededed', hour: "13", key: "1"}, {color: '#ededed', hour: "13", key: "2"}, {color: '#ededed', hour: "13", key: "3"}], key: "13" },
          { time: "2 PM", increments: [{color: 'white', hour: "14", key: "0"}, {color: 'white', hour: "14", key: "1"}, {color: 'white', hour: "14", key: "2"}, {color: 'white', hour: "14", key: "3"}], key: "14" },
          { time: "3 PM", increments: [{color: '#ededed', hour: "15", key: "0"}, {color: '#ededed', hour: "15", key: "1"}, {color: '#ededed', hour: "15", key: "2"}, {color: '#ededed', hour: "15", key: "3"}], key: "15" },
          { time: "4 PM", increments: [{color: 'white', hour: "16", key: "0"}, {color: 'white', hour: "16", key: "1"}, {color: 'white', hour: "16", key: "2"}, {color: 'white', hour: "16", key: "3"}], key: "16" },
          { time: "5 PM", increments: [{color: '#ededed', hour: "17", key: "0"}, {color: '#ededed', hour: "17", key: "1"}, {color: '#ededed', hour: "17", key: "2"}, {color: '#ededed', hour: "17", key: "3"}], key: "17" },
          { time: "6 PM", increments: [{color: 'white', hour: "18", key: "0"}, {color: 'white', hour: "18", key: "1"}, {color: 'white', hour: "18", key: "2"}, {color: 'white', hour: "18", key: "3"}], key: "18" },
          { time: "7 PM", increments: [{color: '#ededed', hour: "19", key: "0"}, {color: '#ededed', hour: "19", key: "1"}, {color: '#ededed', hour: "19", key: "2"}, {color: '#ededed', hour: "19", key: "3"}], key: "19" },
          { time: "8 PM", increments: [{color: 'white', hour: "20", key: "0"}, {color: 'white', hour: "20", key: "1"}, {color: 'white', hour: "20", key: "2"}, {color: 'white', hour: "20", key: "3"}], key: "20" },
          { time: "9 PM", increments: [{color: '#ededed', hour: "21", key: "0"}, {color: '#ededed', hour: "21", key: "1"}, {color: '#ededed', hour: "21", key: "2"}, {color: '#ededed', hour: "21", key: "3"}], key: "21" },
          { time: "10 PM", increments: [{color: 'white', hour: "22", key: "0"}, {color: 'white', hour: "22", key: "1"}, {color: 'white', hour: "22", key: "2"}, {color: 'white', hour: "22", key: "3"}], key: "22" },
          { time: "11 PM", increments: [{color: '#ededed', hour: "23", key: "0"}, {color: '#ededed', hour: "23", key: "1"}, {color: '#ededed', hour: "23", key: "2"}, {color: '#ededed', hour: "23", key: "3"}], key: "23" },
        ],
        key: "6",
      },
    ]);
    // loginPage.js

    // userTimes.js

    /**
     * @param  {} navigation
     */
    const resetWeekDays = (navigation) => {
      Alert.alert(
          "Deleting all of the UserWeek FreeTimes!",
          "Are you sure you want to delete your freetimes?",
          [
            {
              text: "Yes",
              onPress: async function () {
                setLoading(true);
                await fetch(`https://freetime-service.herokuapp.com/deleteweektimes`, {
                  method: "DELETE",
                  body: JSON.stringify({userID: userID}),
                  headers: {"Content-type": "application/json"}
                })
                    .then((response) => response.text())
                    .then((json) => json)
                    .catch((error) => console.log(error))

                setWeekDays(() => {
                  weekDays.forEach((item) => {
                    item.freeTimes.forEach((item) => {
                      item.increments.forEach((item) => {
                        if (item.hour % 2 == 0) {
                          item.color === "#00E600"
                              ? (item.color = "white")
                              : null;
                        } else {
                          item.color === "#00E600"
                              ? (item.color = "#ededed")
                              : null;
                        }
                      })
                    });
                  });

                  navigation.navigate("UserWeek");
                  return weekDays;
                });
                setLoading(false);
                Alert.alert("Your UserWeek FreeTimes have been deleted!");
              },
            },
            {text: "No"},
          ]
      );
    };

    // userProfile.js
    const name = "John Doe";
    const [userID, setUserID] = useState(undefined);
    const [userName, setUsername] = useState("");
    const [userInitials, setUserInitials] = useState("");
    const [userSelectedInterests, setUserInterests] = useState([]);
    const [interests, setInterests] = useState([]);

    /**
     * @param  {} id
     * @param  {} interestname
     */
    const pressHandlerAdd = (id, interestname, userID) => {
      // remove interest from potential interest list
      setInterests((prevInterests) => {
        return prevInterests.filter((interest) => interest.id != id);
      });
      // add interest to user interests list
      setUserInterests((prevUserInterests) => {
        return [{interestname: interestname, id: id.toString()}, ...prevUserInterests];
      });

      fetch(`https://freetime-service.herokuapp.com/User/addInterest`, {
        method: "POST",
        body: JSON.stringify({userID: userID, interestID: id}),
        headers: {"Content-type": "application/json"}
      })
          .then((response) => response.text())
          .then((json) => json)
          .catch((error) => console.log(error))
    };

    /**
     * @param  {} id
     * @param  {} interestname
     */
    const pressHandlerRemove = (id, interestname, userID) => {
      // make updated user interests list, remove key that was passed in
      setUserInterests((prevUserInterests) => {
        return prevUserInterests.filter((interest) => interest.id != id);
      });
      // add the interest back to potential list of interests
      setInterests((prevInterests) => {
        return [{interestname: interestname, id: id.toString()}, ...prevInterests];
      });

      fetch(`https://freetime-service.herokuapp.com/User/deleteInterest`, {
        method: "DELETE",
        body: JSON.stringify({userID: userID, interestID: id}),
        headers: {"Content-type": "application/json"}
      })
          .then((response) => response.text())
          .then((json) => json)
          .catch((error) => console.log(error))
    };

    return (
        <UserContext.Provider
            value={{
              loading: loading,
              setLoading: setLoading,
              weekDays: weekDays,
              setWeekDays: setWeekDays,
              resetWeekDays: resetWeekDays,
              //resetDayFreeTimes: resetDayFreeTimes,
              name: name,
              userName: userName,
              setUsername: setUsername,
              userInitials: userInitials,
              setUserInitials: setUserInitials,
              userSelectedInterests: userSelectedInterests,
              interests: interests,
              setInterests: setInterests,
              setUserInterests: setUserInterests,
              pressHandlerAdd: pressHandlerAdd,
              pressHandlerRemove: pressHandlerRemove,
              userID: userID,
              setUserID: setUserID,
            }}>
          {props.children}
        </UserContext.Provider>
    );
  }

export const useUserContext = () => useContext(UserContext);

const styles = StyleSheet.create({
  cancel: {
    color: "red",
  },
});
