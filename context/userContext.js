import React, { createContext, useContext, useState } from "react";
import { Alert, StyleSheet } from "react-native";

const UserContext = createContext({});

export function UserContextProvider(props) {
  // userWeek.js
  const [weekDays, setWeekDays] = useState([
    {
      day: "Sunday",
      freeTimes: [
        {
          time: "12 AM",
          increments: [
            { color: "white", key: "0" },
            { color: "white", key: "1" },
            { color: "white", key: "2" },
            { color: "white", key: "3" },
            { color: "white", key: "4" },
            { color: "white", key: "5" },
          ],
          key: "0",
        },
        {
          time: "1 AM",
          increments: [
            { color: "white", key: "0" },
            { color: "white", key: "1" },
            { color: "white", key: "2" },
            { color: "white", key: "3" },
            { color: "white", key: "4" },
            { color: "white", key: "5" },
          ],
          key: "1",
        },
        {
          time: "2 AM",
          increments: [
            { color: "white", key: "0" },
            { color: "white", key: "1" },
            { color: "white", key: "2" },
            { color: "white", key: "3" },
            { color: "white", key: "4" },
            { color: "white", key: "5" },
          ],
          key: "2",
        },
        {
          time: "3 AM",
          increments: [
            { color: "white", key: "0" },
            { color: "white", key: "1" },
            { color: "white", key: "2" },
            { color: "white", key: "3" },
            { color: "white", key: "4" },
            { color: "white", key: "5" },
          ],
          key: "3",
        },
        {
          time: "4 AM",
          increments: [
            { color: "white", key: "0" },
            { color: "white", key: "1" },
            { color: "white", key: "2" },
            { color: "white", key: "3" },
            { color: "white", key: "4" },
            { color: "white", key: "5" },
          ],
          key: "4",
        },
        {
          time: "5 AM",
          increments: [
            { color: "white", key: "0" },
            { color: "white", key: "1" },
            { color: "white", key: "2" },
            { color: "white", key: "3" },
            { color: "white", key: "4" },
            { color: "white", key: "5" },
          ],
          key: "5",
        },
        {
          time: "6 AM",
          increments: [
            { color: "white", key: "0" },
            { color: "white", key: "1" },
            { color: "white", key: "2" },
            { color: "white", key: "3" },
            { color: "white", key: "4" },
            { color: "white", key: "5" },
          ],
          key: "6",
        },
        {
          time: "7 AM",
          increments: [
            { color: "white", key: "0" },
            { color: "white", key: "1" },
            { color: "white", key: "2" },
            { color: "white", key: "3" },
            { color: "white", key: "4" },
            { color: "white", key: "5" },
          ],
          key: "7",
        },
        {
          time: "8 AM",
          increments: [
            { color: "white", key: "0" },
            { color: "white", key: "1" },
            { color: "white", key: "2" },
            { color: "white", key: "3" },
            { color: "white", key: "4" },
            { color: "white", key: "5" },
          ],
          key: "8",
        },
        {
          time: "9 AM",
          increments: [
            { color: "white", key: "0" },
            { color: "white", key: "1" },
            { color: "white", key: "2" },
            { color: "white", key: "3" },
            { color: "white", key: "4" },
            { color: "white", key: "5" },
          ],
          key: "9",
        },
        {
          time: "10 AM",
          increments: [
            { color: "white", key: "0" },
            { color: "white", key: "1" },
            { color: "white", key: "2" },
            { color: "white", key: "3" },
            { color: "white", key: "4" },
            { color: "white", key: "5" },
          ],
          key: "10",
        },
        {
          time: "11 AM",
          increments: [
            { color: "white", key: "0" },
            { color: "white", key: "1" },
            { color: "white", key: "2" },
            { color: "white", key: "3" },
            { color: "white", key: "4" },
            { color: "white", key: "5" },
          ],
          key: "11",
        },
        {
          time: "12 PM",
          increments: [
            { color: "white", key: "0" },
            { color: "white", key: "1" },
            { color: "white", key: "2" },
            { color: "white", key: "3" },
            { color: "white", key: "4" },
            { color: "white", key: "5" },
          ],
          key: "12",
        },
        {
          time: "1 PM",
          increments: [
            { color: "white", key: "0" },
            { color: "white", key: "1" },
            { color: "white", key: "2" },
            { color: "white", key: "3" },
            { color: "white", key: "4" },
            { color: "white", key: "5" },
          ],
          key: "13",
        },
        {
          time: "2 PM",
          increments: [
            { color: "white", key: "0" },
            { color: "white", key: "1" },
            { color: "white", key: "2" },
            { color: "white", key: "3" },
            { color: "white", key: "4" },
            { color: "white", key: "5" },
          ],
          key: "14",
        },
        {
          time: "3 PM",
          increments: [
            { color: "white", key: "0" },
            { color: "white", key: "1" },
            { color: "white", key: "2" },
            { color: "white", key: "3" },
            { color: "white", key: "4" },
            { color: "white", key: "5" },
          ],
          key: "15",
        },
        {
          time: "4 PM",
          increments: [
            { color: "white", key: "0" },
            { color: "white", key: "1" },
            { color: "white", key: "2" },
            { color: "white", key: "3" },
            { color: "white", key: "4" },
            { color: "white", key: "5" },
          ],
          key: "16",
        },
        {
          time: "5 PM",
          increments: [
            { color: "white", key: "0" },
            { color: "white", key: "1" },
            { color: "white", key: "2" },
            { color: "white", key: "3" },
            { color: "white", key: "4" },
            { color: "white", key: "5" },
          ],
          key: "17",
        },
        {
          time: "6 PM",
          increments: [
            { color: "white", key: "0" },
            { color: "white", key: "1" },
            { color: "white", key: "2" },
            { color: "white", key: "3" },
            { color: "white", key: "4" },
            { color: "white", key: "5" },
          ],
          key: "18",
        },
        {
          time: "7 PM",
          increments: [
            { color: "white", key: "0" },
            { color: "white", key: "1" },
            { color: "white", key: "2" },
            { color: "white", key: "3" },
            { color: "white", key: "4" },
            { color: "white", key: "5" },
          ],
          key: "19",
        },
        {
          time: "8 PM",
          increments: [
            { color: "white", key: "0" },
            { color: "white", key: "1" },
            { color: "white", key: "2" },
            { color: "white", key: "3" },
            { color: "white", key: "4" },
            { color: "white", key: "5" },
          ],
          key: "20",
        },
        {
          time: "9 PM",
          increments: [
            { color: "white", key: "0" },
            { color: "white", key: "1" },
            { color: "white", key: "2" },
            { color: "white", key: "3" },
            { color: "white", key: "4" },
            { color: "white", key: "5" },
          ],
          key: "21",
        },
        {
          time: "10 PM",
          increments: [
            { color: "white", key: "0" },
            { color: "white", key: "1" },
            { color: "white", key: "2" },
            { color: "white", key: "3" },
            { color: "white", key: "4" },
            { color: "white", key: "5" },
          ],
          key: "22",
        },
        {
          time: "11 PM",
          increments: [
            { color: "white", key: "0" },
            { color: "white", key: "1" },
            { color: "white", key: "2" },
            { color: "white", key: "3" },
            { color: "white", key: "4" },
            { color: "white", key: "5" },
          ],
          key: "23",
        },
      ],
      key: "0",
    },
    {
      day: "Monday",
      freeTimes: [
        {
          time: "12 AM",
          increments: [
            { color: "white", key: "0" },
            { color: "white", key: "1" },
            { color: "white", key: "2" },
            { color: "white", key: "3" },
            { color: "white", key: "4" },
            { color: "white", key: "5" },
          ],
          key: "0",
        },
        {
          time: "1 AM",
          increments: [
            { color: "white", key: "0" },
            { color: "white", key: "1" },
            { color: "white", key: "2" },
            { color: "white", key: "3" },
            { color: "white", key: "4" },
            { color: "white", key: "5" },
          ],
          key: "1",
        },
        {
          time: "2 AM",
          increments: [
            { color: "white", key: "0" },
            { color: "white", key: "1" },
            { color: "white", key: "2" },
            { color: "white", key: "3" },
            { color: "white", key: "4" },
            { color: "white", key: "5" },
          ],
          key: "2",
        },
        {
          time: "3 AM",
          increments: [
            { color: "white", key: "0" },
            { color: "white", key: "1" },
            { color: "white", key: "2" },
            { color: "white", key: "3" },
            { color: "white", key: "4" },
            { color: "white", key: "5" },
          ],
          key: "3",
        },
        {
          time: "4 AM",
          increments: [
            { color: "white", key: "0" },
            { color: "white", key: "1" },
            { color: "white", key: "2" },
            { color: "white", key: "3" },
            { color: "white", key: "4" },
            { color: "white", key: "5" },
          ],
          key: "4",
        },
        {
          time: "5 AM",
          increments: [
            { color: "white", key: "0" },
            { color: "white", key: "1" },
            { color: "white", key: "2" },
            { color: "white", key: "3" },
            { color: "white", key: "4" },
            { color: "white", key: "5" },
          ],
          key: "5",
        },
        {
          time: "6 AM",
          increments: [
            { color: "white", key: "0" },
            { color: "white", key: "1" },
            { color: "white", key: "2" },
            { color: "white", key: "3" },
            { color: "white", key: "4" },
            { color: "white", key: "5" },
          ],
          key: "6",
        },
        {
          time: "7 AM",
          increments: [
            { color: "white", key: "0" },
            { color: "white", key: "1" },
            { color: "white", key: "2" },
            { color: "white", key: "3" },
            { color: "white", key: "4" },
            { color: "white", key: "5" },
          ],
          key: "7",
        },
        {
          time: "8 AM",
          increments: [
            { color: "white", key: "0" },
            { color: "white", key: "1" },
            { color: "white", key: "2" },
            { color: "white", key: "3" },
            { color: "white", key: "4" },
            { color: "white", key: "5" },
          ],
          key: "8",
        },
        {
          time: "9 AM",
          increments: [
            { color: "white", key: "0" },
            { color: "white", key: "1" },
            { color: "white", key: "2" },
            { color: "white", key: "3" },
            { color: "white", key: "4" },
            { color: "white", key: "5" },
          ],
          key: "9",
        },
        {
          time: "10 AM",
          increments: [
            { color: "white", key: "0" },
            { color: "white", key: "1" },
            { color: "white", key: "2" },
            { color: "white", key: "3" },
            { color: "white", key: "4" },
            { color: "white", key: "5" },
          ],
          key: "10",
        },
        {
          time: "11 AM",
          increments: [
            { color: "white", key: "0" },
            { color: "white", key: "1" },
            { color: "white", key: "2" },
            { color: "white", key: "3" },
            { color: "white", key: "4" },
            { color: "white", key: "5" },
          ],
          key: "11",
        },
        {
          time: "12 PM",
          increments: [
            { color: "white", key: "0" },
            { color: "white", key: "1" },
            { color: "white", key: "2" },
            { color: "white", key: "3" },
            { color: "white", key: "4" },
            { color: "white", key: "5" },
          ],
          key: "12",
        },
        {
          time: "1 PM",
          increments: [
            { color: "white", key: "0" },
            { color: "white", key: "1" },
            { color: "white", key: "2" },
            { color: "white", key: "3" },
            { color: "white", key: "4" },
            { color: "white", key: "5" },
          ],
          key: "13",
        },
        {
          time: "2 PM",
          increments: [
            { color: "white", key: "0" },
            { color: "white", key: "1" },
            { color: "white", key: "2" },
            { color: "white", key: "3" },
            { color: "white", key: "4" },
            { color: "white", key: "5" },
          ],
          key: "14",
        },
        {
          time: "3 PM",
          increments: [
            { color: "white", key: "0" },
            { color: "white", key: "1" },
            { color: "white", key: "2" },
            { color: "white", key: "3" },
            { color: "white", key: "4" },
            { color: "white", key: "5" },
          ],
          key: "15",
        },
        {
          time: "4 PM",
          increments: [
            { color: "white", key: "0" },
            { color: "white", key: "1" },
            { color: "white", key: "2" },
            { color: "white", key: "3" },
            { color: "white", key: "4" },
            { color: "white", key: "5" },
          ],
          key: "16",
        },
        {
          time: "5 PM",
          increments: [
            { color: "white", key: "0" },
            { color: "white", key: "1" },
            { color: "white", key: "2" },
            { color: "white", key: "3" },
            { color: "white", key: "4" },
            { color: "white", key: "5" },
          ],
          key: "17",
        },
        {
          time: "6 PM",
          increments: [
            { color: "white", key: "0" },
            { color: "white", key: "1" },
            { color: "white", key: "2" },
            { color: "white", key: "3" },
            { color: "white", key: "4" },
            { color: "white", key: "5" },
          ],
          key: "18",
        },
        {
          time: "7 PM",
          increments: [
            { color: "white", key: "0" },
            { color: "white", key: "1" },
            { color: "white", key: "2" },
            { color: "white", key: "3" },
            { color: "white", key: "4" },
            { color: "white", key: "5" },
          ],
          key: "19",
        },
        {
          time: "8 PM",
          increments: [
            { color: "white", key: "0" },
            { color: "white", key: "1" },
            { color: "white", key: "2" },
            { color: "white", key: "3" },
            { color: "white", key: "4" },
            { color: "white", key: "5" },
          ],
          key: "20",
        },
        {
          time: "9 PM",
          increments: [
            { color: "white", key: "0" },
            { color: "white", key: "1" },
            { color: "white", key: "2" },
            { color: "white", key: "3" },
            { color: "white", key: "4" },
            { color: "white", key: "5" },
          ],
          key: "21",
        },
        {
          time: "10 PM",
          increments: [
            { color: "white", key: "0" },
            { color: "white", key: "1" },
            { color: "white", key: "2" },
            { color: "white", key: "3" },
            { color: "white", key: "4" },
            { color: "white", key: "5" },
          ],
          key: "22",
        },
        {
          time: "11 PM",
          increments: [
            { color: "white", key: "0" },
            { color: "white", key: "1" },
            { color: "white", key: "2" },
            { color: "white", key: "3" },
            { color: "white", key: "4" },
            { color: "white", key: "5" },
          ],
          key: "23",
        },
      ],
      key: "1",
    },
    {
      day: "Tuesday",
      freeTimes: [
        {
          time: "12 AM",
          increments: [
            { color: "white", key: "0" },
            { color: "white", key: "1" },
            { color: "white", key: "2" },
            { color: "white", key: "3" },
            { color: "white", key: "4" },
            { color: "white", key: "5" },
          ],
          key: "0",
        },
        {
          time: "1 AM",
          increments: [
            { color: "white", key: "0" },
            { color: "white", key: "1" },
            { color: "white", key: "2" },
            { color: "white", key: "3" },
            { color: "white", key: "4" },
            { color: "white", key: "5" },
          ],
          key: "1",
        },
        {
          time: "2 AM",
          increments: [
            { color: "white", key: "0" },
            { color: "white", key: "1" },
            { color: "white", key: "2" },
            { color: "white", key: "3" },
            { color: "white", key: "4" },
            { color: "white", key: "5" },
          ],
          key: "2",
        },
        {
          time: "3 AM",
          increments: [
            { color: "white", key: "0" },
            { color: "white", key: "1" },
            { color: "white", key: "2" },
            { color: "white", key: "3" },
            { color: "white", key: "4" },
            { color: "white", key: "5" },
          ],
          key: "3",
        },
        {
          time: "4 AM",
          increments: [
            { color: "white", key: "0" },
            { color: "white", key: "1" },
            { color: "white", key: "2" },
            { color: "white", key: "3" },
            { color: "white", key: "4" },
            { color: "white", key: "5" },
          ],
          key: "4",
        },
        {
          time: "5 AM",
          increments: [
            { color: "white", key: "0" },
            { color: "white", key: "1" },
            { color: "white", key: "2" },
            { color: "white", key: "3" },
            { color: "white", key: "4" },
            { color: "white", key: "5" },
          ],
          key: "5",
        },
        {
          time: "6 AM",
          increments: [
            { color: "white", key: "0" },
            { color: "white", key: "1" },
            { color: "white", key: "2" },
            { color: "white", key: "3" },
            { color: "white", key: "4" },
            { color: "white", key: "5" },
          ],
          key: "6",
        },
        {
          time: "7 AM",
          increments: [
            { color: "white", key: "0" },
            { color: "white", key: "1" },
            { color: "white", key: "2" },
            { color: "white", key: "3" },
            { color: "white", key: "4" },
            { color: "white", key: "5" },
          ],
          key: "7",
        },
        {
          time: "8 AM",
          increments: [
            { color: "white", key: "0" },
            { color: "white", key: "1" },
            { color: "white", key: "2" },
            { color: "white", key: "3" },
            { color: "white", key: "4" },
            { color: "white", key: "5" },
          ],
          key: "8",
        },
        {
          time: "9 AM",
          increments: [
            { color: "white", key: "0" },
            { color: "white", key: "1" },
            { color: "white", key: "2" },
            { color: "white", key: "3" },
            { color: "white", key: "4" },
            { color: "white", key: "5" },
          ],
          key: "9",
        },
        {
          time: "10 AM",
          increments: [
            { color: "white", key: "0" },
            { color: "white", key: "1" },
            { color: "white", key: "2" },
            { color: "white", key: "3" },
            { color: "white", key: "4" },
            { color: "white", key: "5" },
          ],
          key: "10",
        },
        {
          time: "11 AM",
          increments: [
            { color: "white", key: "0" },
            { color: "white", key: "1" },
            { color: "white", key: "2" },
            { color: "white", key: "3" },
            { color: "white", key: "4" },
            { color: "white", key: "5" },
          ],
          key: "11",
        },
        {
          time: "12 PM",
          increments: [
            { color: "white", key: "0" },
            { color: "white", key: "1" },
            { color: "white", key: "2" },
            { color: "white", key: "3" },
            { color: "white", key: "4" },
            { color: "white", key: "5" },
          ],
          key: "12",
        },
        {
          time: "1 PM",
          increments: [
            { color: "white", key: "0" },
            { color: "white", key: "1" },
            { color: "white", key: "2" },
            { color: "white", key: "3" },
            { color: "white", key: "4" },
            { color: "white", key: "5" },
          ],
          key: "13",
        },
        {
          time: "2 PM",
          increments: [
            { color: "white", key: "0" },
            { color: "white", key: "1" },
            { color: "white", key: "2" },
            { color: "white", key: "3" },
            { color: "white", key: "4" },
            { color: "white", key: "5" },
          ],
          key: "14",
        },
        {
          time: "3 PM",
          increments: [
            { color: "white", key: "0" },
            { color: "white", key: "1" },
            { color: "white", key: "2" },
            { color: "white", key: "3" },
            { color: "white", key: "4" },
            { color: "white", key: "5" },
          ],
          key: "15",
        },
        {
          time: "4 PM",
          increments: [
            { color: "white", key: "0" },
            { color: "white", key: "1" },
            { color: "white", key: "2" },
            { color: "white", key: "3" },
            { color: "white", key: "4" },
            { color: "white", key: "5" },
          ],
          key: "16",
        },
        {
          time: "5 PM",
          increments: [
            { color: "white", key: "0" },
            { color: "white", key: "1" },
            { color: "white", key: "2" },
            { color: "white", key: "3" },
            { color: "white", key: "4" },
            { color: "white", key: "5" },
          ],
          key: "17",
        },
        {
          time: "6 PM",
          increments: [
            { color: "white", key: "0" },
            { color: "white", key: "1" },
            { color: "white", key: "2" },
            { color: "white", key: "3" },
            { color: "white", key: "4" },
            { color: "white", key: "5" },
          ],
          key: "18",
        },
        {
          time: "7 PM",
          increments: [
            { color: "white", key: "0" },
            { color: "white", key: "1" },
            { color: "white", key: "2" },
            { color: "white", key: "3" },
            { color: "white", key: "4" },
            { color: "white", key: "5" },
          ],
          key: "19",
        },
        {
          time: "8 PM",
          increments: [
            { color: "white", key: "0" },
            { color: "white", key: "1" },
            { color: "white", key: "2" },
            { color: "white", key: "3" },
            { color: "white", key: "4" },
            { color: "white", key: "5" },
          ],
          key: "20",
        },
        {
          time: "9 PM",
          increments: [
            { color: "white", key: "0" },
            { color: "white", key: "1" },
            { color: "white", key: "2" },
            { color: "white", key: "3" },
            { color: "white", key: "4" },
            { color: "white", key: "5" },
          ],
          key: "21",
        },
        {
          time: "10 PM",
          increments: [
            { color: "white", key: "0" },
            { color: "white", key: "1" },
            { color: "white", key: "2" },
            { color: "white", key: "3" },
            { color: "white", key: "4" },
            { color: "white", key: "5" },
          ],
          key: "22",
        },
        {
          time: "11 PM",
          increments: [
            { color: "white", key: "0" },
            { color: "white", key: "1" },
            { color: "white", key: "2" },
            { color: "white", key: "3" },
            { color: "white", key: "4" },
            { color: "white", key: "5" },
          ],
          key: "23",
        },
      ],
      key: "2",
    },
    {
      day: "Wednesday",
      freeTimes: [
        {
          time: "12 AM",
          increments: [
            { color: "white", key: "0" },
            { color: "white", key: "1" },
            { color: "white", key: "2" },
            { color: "white", key: "3" },
            { color: "white", key: "4" },
            { color: "white", key: "5" },
          ],
          key: "0",
        },
        {
          time: "1 AM",
          increments: [
            { color: "white", key: "0" },
            { color: "white", key: "1" },
            { color: "white", key: "2" },
            { color: "white", key: "3" },
            { color: "white", key: "4" },
            { color: "white", key: "5" },
          ],
          key: "1",
        },
        {
          time: "2 AM",
          increments: [
            { color: "white", key: "0" },
            { color: "white", key: "1" },
            { color: "white", key: "2" },
            { color: "white", key: "3" },
            { color: "white", key: "4" },
            { color: "white", key: "5" },
          ],
          key: "2",
        },
        {
          time: "3 AM",
          increments: [
            { color: "white", key: "0" },
            { color: "white", key: "1" },
            { color: "white", key: "2" },
            { color: "white", key: "3" },
            { color: "white", key: "4" },
            { color: "white", key: "5" },
          ],
          key: "3",
        },
        {
          time: "4 AM",
          increments: [
            { color: "white", key: "0" },
            { color: "white", key: "1" },
            { color: "white", key: "2" },
            { color: "white", key: "3" },
            { color: "white", key: "4" },
            { color: "white", key: "5" },
          ],
          key: "4",
        },
        {
          time: "5 AM",
          increments: [
            { color: "white", key: "0" },
            { color: "white", key: "1" },
            { color: "white", key: "2" },
            { color: "white", key: "3" },
            { color: "white", key: "4" },
            { color: "white", key: "5" },
          ],
          key: "5",
        },
        {
          time: "6 AM",
          increments: [
            { color: "white", key: "0" },
            { color: "white", key: "1" },
            { color: "white", key: "2" },
            { color: "white", key: "3" },
            { color: "white", key: "4" },
            { color: "white", key: "5" },
          ],
          key: "6",
        },
        {
          time: "7 AM",
          increments: [
            { color: "white", key: "0" },
            { color: "white", key: "1" },
            { color: "white", key: "2" },
            { color: "white", key: "3" },
            { color: "white", key: "4" },
            { color: "white", key: "5" },
          ],
          key: "7",
        },
        {
          time: "8 AM",
          increments: [
            { color: "white", key: "0" },
            { color: "white", key: "1" },
            { color: "white", key: "2" },
            { color: "white", key: "3" },
            { color: "white", key: "4" },
            { color: "white", key: "5" },
          ],
          key: "8",
        },
        {
          time: "9 AM",
          increments: [
            { color: "white", key: "0" },
            { color: "white", key: "1" },
            { color: "white", key: "2" },
            { color: "white", key: "3" },
            { color: "white", key: "4" },
            { color: "white", key: "5" },
          ],
          key: "9",
        },
        {
          time: "10 AM",
          increments: [
            { color: "white", key: "0" },
            { color: "white", key: "1" },
            { color: "white", key: "2" },
            { color: "white", key: "3" },
            { color: "white", key: "4" },
            { color: "white", key: "5" },
          ],
          key: "10",
        },
        {
          time: "11 AM",
          increments: [
            { color: "white", key: "0" },
            { color: "white", key: "1" },
            { color: "white", key: "2" },
            { color: "white", key: "3" },
            { color: "white", key: "4" },
            { color: "white", key: "5" },
          ],
          key: "11",
        },
        {
          time: "12 PM",
          increments: [
            { color: "white", key: "0" },
            { color: "white", key: "1" },
            { color: "white", key: "2" },
            { color: "white", key: "3" },
            { color: "white", key: "4" },
            { color: "white", key: "5" },
          ],
          key: "12",
        },
        {
          time: "1 PM",
          increments: [
            { color: "white", key: "0" },
            { color: "white", key: "1" },
            { color: "white", key: "2" },
            { color: "white", key: "3" },
            { color: "white", key: "4" },
            { color: "white", key: "5" },
          ],
          key: "13",
        },
        {
          time: "2 PM",
          increments: [
            { color: "white", key: "0" },
            { color: "white", key: "1" },
            { color: "white", key: "2" },
            { color: "white", key: "3" },
            { color: "white", key: "4" },
            { color: "white", key: "5" },
          ],
          key: "14",
        },
        {
          time: "3 PM",
          increments: [
            { color: "white", key: "0" },
            { color: "white", key: "1" },
            { color: "white", key: "2" },
            { color: "white", key: "3" },
            { color: "white", key: "4" },
            { color: "white", key: "5" },
          ],
          key: "15",
        },
        {
          time: "4 PM",
          increments: [
            { color: "white", key: "0" },
            { color: "white", key: "1" },
            { color: "white", key: "2" },
            { color: "white", key: "3" },
            { color: "white", key: "4" },
            { color: "white", key: "5" },
          ],
          key: "16",
        },
        {
          time: "5 PM",
          increments: [
            { color: "white", key: "0" },
            { color: "white", key: "1" },
            { color: "white", key: "2" },
            { color: "white", key: "3" },
            { color: "white", key: "4" },
            { color: "white", key: "5" },
          ],
          key: "17",
        },
        {
          time: "6 PM",
          increments: [
            { color: "white", key: "0" },
            { color: "white", key: "1" },
            { color: "white", key: "2" },
            { color: "white", key: "3" },
            { color: "white", key: "4" },
            { color: "white", key: "5" },
          ],
          key: "18",
        },
        {
          time: "7 PM",
          increments: [
            { color: "white", key: "0" },
            { color: "white", key: "1" },
            { color: "white", key: "2" },
            { color: "white", key: "3" },
            { color: "white", key: "4" },
            { color: "white", key: "5" },
          ],
          key: "19",
        },
        {
          time: "8 PM",
          increments: [
            { color: "white", key: "0" },
            { color: "white", key: "1" },
            { color: "white", key: "2" },
            { color: "white", key: "3" },
            { color: "white", key: "4" },
            { color: "white", key: "5" },
          ],
          key: "20",
        },
        {
          time: "9 PM",
          increments: [
            { color: "white", key: "0" },
            { color: "white", key: "1" },
            { color: "white", key: "2" },
            { color: "white", key: "3" },
            { color: "white", key: "4" },
            { color: "white", key: "5" },
          ],
          key: "21",
        },
        {
          time: "10 PM",
          increments: [
            { color: "white", key: "0" },
            { color: "white", key: "1" },
            { color: "white", key: "2" },
            { color: "white", key: "3" },
            { color: "white", key: "4" },
            { color: "white", key: "5" },
          ],
          key: "22",
        },
        {
          time: "11 PM",
          increments: [
            { color: "white", key: "0" },
            { color: "white", key: "1" },
            { color: "white", key: "2" },
            { color: "white", key: "3" },
            { color: "white", key: "4" },
            { color: "white", key: "5" },
          ],
          key: "23",
        },
      ],
      key: "3",
    },
    {
      day: "Thursday",
      freeTimes: [
        {
          time: "12 AM",
          increments: [
            { color: "white", key: "0" },
            { color: "white", key: "1" },
            { color: "white", key: "2" },
            { color: "white", key: "3" },
            { color: "white", key: "4" },
            { color: "white", key: "5" },
          ],
          key: "0",
        },
        {
          time: "1 AM",
          increments: [
            { color: "white", key: "0" },
            { color: "white", key: "1" },
            { color: "white", key: "2" },
            { color: "white", key: "3" },
            { color: "white", key: "4" },
            { color: "white", key: "5" },
          ],
          key: "1",
        },
        {
          time: "2 AM",
          increments: [
            { color: "white", key: "0" },
            { color: "white", key: "1" },
            { color: "white", key: "2" },
            { color: "white", key: "3" },
            { color: "white", key: "4" },
            { color: "white", key: "5" },
          ],
          key: "2",
        },
        {
          time: "3 AM",
          increments: [
            { color: "white", key: "0" },
            { color: "white", key: "1" },
            { color: "white", key: "2" },
            { color: "white", key: "3" },
            { color: "white", key: "4" },
            { color: "white", key: "5" },
          ],
          key: "3",
        },
        {
          time: "4 AM",
          increments: [
            { color: "white", key: "0" },
            { color: "white", key: "1" },
            { color: "white", key: "2" },
            { color: "white", key: "3" },
            { color: "white", key: "4" },
            { color: "white", key: "5" },
          ],
          key: "4",
        },
        {
          time: "5 AM",
          increments: [
            { color: "white", key: "0" },
            { color: "white", key: "1" },
            { color: "white", key: "2" },
            { color: "white", key: "3" },
            { color: "white", key: "4" },
            { color: "white", key: "5" },
          ],
          key: "5",
        },
        {
          time: "6 AM",
          increments: [
            { color: "white", key: "0" },
            { color: "white", key: "1" },
            { color: "white", key: "2" },
            { color: "white", key: "3" },
            { color: "white", key: "4" },
            { color: "white", key: "5" },
          ],
          key: "6",
        },
        {
          time: "7 AM",
          increments: [
            { color: "white", key: "0" },
            { color: "white", key: "1" },
            { color: "white", key: "2" },
            { color: "white", key: "3" },
            { color: "white", key: "4" },
            { color: "white", key: "5" },
          ],
          key: "7",
        },
        {
          time: "8 AM",
          increments: [
            { color: "white", key: "0" },
            { color: "white", key: "1" },
            { color: "white", key: "2" },
            { color: "white", key: "3" },
            { color: "white", key: "4" },
            { color: "white", key: "5" },
          ],
          key: "8",
        },
        {
          time: "9 AM",
          increments: [
            { color: "white", key: "0" },
            { color: "white", key: "1" },
            { color: "white", key: "2" },
            { color: "white", key: "3" },
            { color: "white", key: "4" },
            { color: "white", key: "5" },
          ],
          key: "9",
        },
        {
          time: "10 AM",
          increments: [
            { color: "white", key: "0" },
            { color: "white", key: "1" },
            { color: "white", key: "2" },
            { color: "white", key: "3" },
            { color: "white", key: "4" },
            { color: "white", key: "5" },
          ],
          key: "10",
        },
        {
          time: "11 AM",
          increments: [
            { color: "white", key: "0" },
            { color: "white", key: "1" },
            { color: "white", key: "2" },
            { color: "white", key: "3" },
            { color: "white", key: "4" },
            { color: "white", key: "5" },
          ],
          key: "11",
        },
        {
          time: "12 PM",
          increments: [
            { color: "white", key: "0" },
            { color: "white", key: "1" },
            { color: "white", key: "2" },
            { color: "white", key: "3" },
            { color: "white", key: "4" },
            { color: "white", key: "5" },
          ],
          key: "12",
        },
        {
          time: "1 PM",
          increments: [
            { color: "white", key: "0" },
            { color: "white", key: "1" },
            { color: "white", key: "2" },
            { color: "white", key: "3" },
            { color: "white", key: "4" },
            { color: "white", key: "5" },
          ],
          key: "13",
        },
        {
          time: "2 PM",
          increments: [
            { color: "white", key: "0" },
            { color: "white", key: "1" },
            { color: "white", key: "2" },
            { color: "white", key: "3" },
            { color: "white", key: "4" },
            { color: "white", key: "5" },
          ],
          key: "14",
        },
        {
          time: "3 PM",
          increments: [
            { color: "white", key: "0" },
            { color: "white", key: "1" },
            { color: "white", key: "2" },
            { color: "white", key: "3" },
            { color: "white", key: "4" },
            { color: "white", key: "5" },
          ],
          key: "15",
        },
        {
          time: "4 PM",
          increments: [
            { color: "white", key: "0" },
            { color: "white", key: "1" },
            { color: "white", key: "2" },
            { color: "white", key: "3" },
            { color: "white", key: "4" },
            { color: "white", key: "5" },
          ],
          key: "16",
        },
        {
          time: "5 PM",
          increments: [
            { color: "white", key: "0" },
            { color: "white", key: "1" },
            { color: "white", key: "2" },
            { color: "white", key: "3" },
            { color: "white", key: "4" },
            { color: "white", key: "5" },
          ],
          key: "17",
        },
        {
          time: "6 PM",
          increments: [
            { color: "white", key: "0" },
            { color: "white", key: "1" },
            { color: "white", key: "2" },
            { color: "white", key: "3" },
            { color: "white", key: "4" },
            { color: "white", key: "5" },
          ],
          key: "18",
        },
        {
          time: "7 PM",
          increments: [
            { color: "white", key: "0" },
            { color: "white", key: "1" },
            { color: "white", key: "2" },
            { color: "white", key: "3" },
            { color: "white", key: "4" },
            { color: "white", key: "5" },
          ],
          key: "19",
        },
        {
          time: "8 PM",
          increments: [
            { color: "white", key: "0" },
            { color: "white", key: "1" },
            { color: "white", key: "2" },
            { color: "white", key: "3" },
            { color: "white", key: "4" },
            { color: "white", key: "5" },
          ],
          key: "20",
        },
        {
          time: "9 PM",
          increments: [
            { color: "white", key: "0" },
            { color: "white", key: "1" },
            { color: "white", key: "2" },
            { color: "white", key: "3" },
            { color: "white", key: "4" },
            { color: "white", key: "5" },
          ],
          key: "21",
        },
        {
          time: "10 PM",
          increments: [
            { color: "white", key: "0" },
            { color: "white", key: "1" },
            { color: "white", key: "2" },
            { color: "white", key: "3" },
            { color: "white", key: "4" },
            { color: "white", key: "5" },
          ],
          key: "22",
        },
        {
          time: "11 PM",
          increments: [
            { color: "white", key: "0" },
            { color: "white", key: "1" },
            { color: "white", key: "2" },
            { color: "white", key: "3" },
            { color: "white", key: "4" },
            { color: "white", key: "5" },
          ],
          key: "23",
        },
      ],
      key: "4",
    },
    {
      day: "Friday",
      freeTimes: [
        {
          time: "12 AM",
          increments: [
            { color: "white", key: "0" },
            { color: "white", key: "1" },
            { color: "white", key: "2" },
            { color: "white", key: "3" },
            { color: "white", key: "4" },
            { color: "white", key: "5" },
          ],
          key: "0",
        },
        {
          time: "1 AM",
          increments: [
            { color: "white", key: "0" },
            { color: "white", key: "1" },
            { color: "white", key: "2" },
            { color: "white", key: "3" },
            { color: "white", key: "4" },
            { color: "white", key: "5" },
          ],
          key: "1",
        },
        {
          time: "2 AM",
          increments: [
            { color: "white", key: "0" },
            { color: "white", key: "1" },
            { color: "white", key: "2" },
            { color: "white", key: "3" },
            { color: "white", key: "4" },
            { color: "white", key: "5" },
          ],
          key: "2",
        },
        {
          time: "3 AM",
          increments: [
            { color: "white", key: "0" },
            { color: "white", key: "1" },
            { color: "white", key: "2" },
            { color: "white", key: "3" },
            { color: "white", key: "4" },
            { color: "white", key: "5" },
          ],
          key: "3",
        },
        {
          time: "4 AM",
          increments: [
            { color: "white", key: "0" },
            { color: "white", key: "1" },
            { color: "white", key: "2" },
            { color: "white", key: "3" },
            { color: "white", key: "4" },
            { color: "white", key: "5" },
          ],
          key: "4",
        },
        {
          time: "5 AM",
          increments: [
            { color: "white", key: "0" },
            { color: "white", key: "1" },
            { color: "white", key: "2" },
            { color: "white", key: "3" },
            { color: "white", key: "4" },
            { color: "white", key: "5" },
          ],
          key: "5",
        },
        {
          time: "6 AM",
          increments: [
            { color: "white", key: "0" },
            { color: "white", key: "1" },
            { color: "white", key: "2" },
            { color: "white", key: "3" },
            { color: "white", key: "4" },
            { color: "white", key: "5" },
          ],
          key: "6",
        },
        {
          time: "7 AM",
          increments: [
            { color: "white", key: "0" },
            { color: "white", key: "1" },
            { color: "white", key: "2" },
            { color: "white", key: "3" },
            { color: "white", key: "4" },
            { color: "white", key: "5" },
          ],
          key: "7",
        },
        {
          time: "8 AM",
          increments: [
            { color: "white", key: "0" },
            { color: "white", key: "1" },
            { color: "white", key: "2" },
            { color: "white", key: "3" },
            { color: "white", key: "4" },
            { color: "white", key: "5" },
          ],
          key: "8",
        },
        {
          time: "9 AM",
          increments: [
            { color: "white", key: "0" },
            { color: "white", key: "1" },
            { color: "white", key: "2" },
            { color: "white", key: "3" },
            { color: "white", key: "4" },
            { color: "white", key: "5" },
          ],
          key: "9",
        },
        {
          time: "10 AM",
          increments: [
            { color: "white", key: "0" },
            { color: "white", key: "1" },
            { color: "white", key: "2" },
            { color: "white", key: "3" },
            { color: "white", key: "4" },
            { color: "white", key: "5" },
          ],
          key: "10",
        },
        {
          time: "11 AM",
          increments: [
            { color: "white", key: "0" },
            { color: "white", key: "1" },
            { color: "white", key: "2" },
            { color: "white", key: "3" },
            { color: "white", key: "4" },
            { color: "white", key: "5" },
          ],
          key: "11",
        },
        {
          time: "12 PM",
          increments: [
            { color: "white", key: "0" },
            { color: "white", key: "1" },
            { color: "white", key: "2" },
            { color: "white", key: "3" },
            { color: "white", key: "4" },
            { color: "white", key: "5" },
          ],
          key: "12",
        },
        {
          time: "1 PM",
          increments: [
            { color: "white", key: "0" },
            { color: "white", key: "1" },
            { color: "white", key: "2" },
            { color: "white", key: "3" },
            { color: "white", key: "4" },
            { color: "white", key: "5" },
          ],
          key: "13",
        },
        {
          time: "2 PM",
          increments: [
            { color: "white", key: "0" },
            { color: "white", key: "1" },
            { color: "white", key: "2" },
            { color: "white", key: "3" },
            { color: "white", key: "4" },
            { color: "white", key: "5" },
          ],
          key: "14",
        },
        {
          time: "3 PM",
          increments: [
            { color: "white", key: "0" },
            { color: "white", key: "1" },
            { color: "white", key: "2" },
            { color: "white", key: "3" },
            { color: "white", key: "4" },
            { color: "white", key: "5" },
          ],
          key: "15",
        },
        {
          time: "4 PM",
          increments: [
            { color: "white", key: "0" },
            { color: "white", key: "1" },
            { color: "white", key: "2" },
            { color: "white", key: "3" },
            { color: "white", key: "4" },
            { color: "white", key: "5" },
          ],
          key: "16",
        },
        {
          time: "5 PM",
          increments: [
            { color: "white", key: "0" },
            { color: "white", key: "1" },
            { color: "white", key: "2" },
            { color: "white", key: "3" },
            { color: "white", key: "4" },
            { color: "white", key: "5" },
          ],
          key: "17",
        },
        {
          time: "6 PM",
          increments: [
            { color: "white", key: "0" },
            { color: "white", key: "1" },
            { color: "white", key: "2" },
            { color: "white", key: "3" },
            { color: "white", key: "4" },
            { color: "white", key: "5" },
          ],
          key: "18",
        },
        {
          time: "7 PM",
          increments: [
            { color: "white", key: "0" },
            { color: "white", key: "1" },
            { color: "white", key: "2" },
            { color: "white", key: "3" },
            { color: "white", key: "4" },
            { color: "white", key: "5" },
          ],
          key: "19",
        },
        {
          time: "8 PM",
          increments: [
            { color: "white", key: "0" },
            { color: "white", key: "1" },
            { color: "white", key: "2" },
            { color: "white", key: "3" },
            { color: "white", key: "4" },
            { color: "white", key: "5" },
          ],
          key: "20",
        },
        {
          time: "9 PM",
          increments: [
            { color: "white", key: "0" },
            { color: "white", key: "1" },
            { color: "white", key: "2" },
            { color: "white", key: "3" },
            { color: "white", key: "4" },
            { color: "white", key: "5" },
          ],
          key: "21",
        },
        {
          time: "10 PM",
          increments: [
            { color: "white", key: "0" },
            { color: "white", key: "1" },
            { color: "white", key: "2" },
            { color: "white", key: "3" },
            { color: "white", key: "4" },
            { color: "white", key: "5" },
          ],
          key: "22",
        },
        {
          time: "11 PM",
          increments: [
            { color: "white", key: "0" },
            { color: "white", key: "1" },
            { color: "white", key: "2" },
            { color: "white", key: "3" },
            { color: "white", key: "4" },
            { color: "white", key: "5" },
          ],
          key: "23",
        },
      ],
      key: "5",
    },
    {
      day: "Saturday",
      freeTimes: [
        {
          time: "12 AM",
          increments: [
            { color: "white", key: "0" },
            { color: "white", key: "1" },
            { color: "white", key: "2" },
            { color: "white", key: "3" },
            { color: "white", key: "4" },
            { color: "white", key: "5" },
          ],
          key: "0",
        },
        {
          time: "1 AM",
          increments: [
            { color: "white", key: "0" },
            { color: "white", key: "1" },
            { color: "white", key: "2" },
            { color: "white", key: "3" },
            { color: "white", key: "4" },
            { color: "white", key: "5" },
          ],
          key: "1",
        },
        {
          time: "2 AM",
          increments: [
            { color: "white", key: "0" },
            { color: "white", key: "1" },
            { color: "white", key: "2" },
            { color: "white", key: "3" },
            { color: "white", key: "4" },
            { color: "white", key: "5" },
          ],
          key: "2",
        },
        {
          time: "3 AM",
          increments: [
            { color: "white", key: "0" },
            { color: "white", key: "1" },
            { color: "white", key: "2" },
            { color: "white", key: "3" },
            { color: "white", key: "4" },
            { color: "white", key: "5" },
          ],
          key: "3",
        },
        {
          time: "4 AM",
          increments: [
            { color: "white", key: "0" },
            { color: "white", key: "1" },
            { color: "white", key: "2" },
            { color: "white", key: "3" },
            { color: "white", key: "4" },
            { color: "white", key: "5" },
          ],
          key: "4",
        },
        {
          time: "5 AM",
          increments: [
            { color: "white", key: "0" },
            { color: "white", key: "1" },
            { color: "white", key: "2" },
            { color: "white", key: "3" },
            { color: "white", key: "4" },
            { color: "white", key: "5" },
          ],
          key: "5",
        },
        {
          time: "6 AM",
          increments: [
            { color: "white", key: "0" },
            { color: "white", key: "1" },
            { color: "white", key: "2" },
            { color: "white", key: "3" },
            { color: "white", key: "4" },
            { color: "white", key: "5" },
          ],
          key: "6",
        },
        {
          time: "7 AM",
          increments: [
            { color: "white", key: "0" },
            { color: "white", key: "1" },
            { color: "white", key: "2" },
            { color: "white", key: "3" },
            { color: "white", key: "4" },
            { color: "white", key: "5" },
          ],
          key: "7",
        },
        {
          time: "8 AM",
          increments: [
            { color: "white", key: "0" },
            { color: "white", key: "1" },
            { color: "white", key: "2" },
            { color: "white", key: "3" },
            { color: "white", key: "4" },
            { color: "white", key: "5" },
          ],
          key: "8",
        },
        {
          time: "9 AM",
          increments: [
            { color: "white", key: "0" },
            { color: "white", key: "1" },
            { color: "white", key: "2" },
            { color: "white", key: "3" },
            { color: "white", key: "4" },
            { color: "white", key: "5" },
          ],
          key: "9",
        },
        {
          time: "10 AM",
          increments: [
            { color: "white", key: "0" },
            { color: "white", key: "1" },
            { color: "white", key: "2" },
            { color: "white", key: "3" },
            { color: "white", key: "4" },
            { color: "white", key: "5" },
          ],
          key: "10",
        },
        {
          time: "11 AM",
          increments: [
            { color: "white", key: "0" },
            { color: "white", key: "1" },
            { color: "white", key: "2" },
            { color: "white", key: "3" },
            { color: "white", key: "4" },
            { color: "white", key: "5" },
          ],
          key: "11",
        },
        {
          time: "12 PM",
          increments: [
            { color: "white", key: "0" },
            { color: "white", key: "1" },
            { color: "white", key: "2" },
            { color: "white", key: "3" },
            { color: "white", key: "4" },
            { color: "white", key: "5" },
          ],
          key: "12",
        },
        {
          time: "1 PM",
          increments: [
            { color: "white", key: "0" },
            { color: "white", key: "1" },
            { color: "white", key: "2" },
            { color: "white", key: "3" },
            { color: "white", key: "4" },
            { color: "white", key: "5" },
          ],
          key: "13",
        },
        {
          time: "2 PM",
          increments: [
            { color: "white", key: "0" },
            { color: "white", key: "1" },
            { color: "white", key: "2" },
            { color: "white", key: "3" },
            { color: "white", key: "4" },
            { color: "white", key: "5" },
          ],
          key: "14",
        },
        {
          time: "3 PM",
          increments: [
            { color: "white", key: "0" },
            { color: "white", key: "1" },
            { color: "white", key: "2" },
            { color: "white", key: "3" },
            { color: "white", key: "4" },
            { color: "white", key: "5" },
          ],
          key: "15",
        },
        {
          time: "4 PM",
          increments: [
            { color: "white", key: "0" },
            { color: "white", key: "1" },
            { color: "white", key: "2" },
            { color: "white", key: "3" },
            { color: "white", key: "4" },
            { color: "white", key: "5" },
          ],
          key: "16",
        },
        {
          time: "5 PM",
          increments: [
            { color: "white", key: "0" },
            { color: "white", key: "1" },
            { color: "white", key: "2" },
            { color: "white", key: "3" },
            { color: "white", key: "4" },
            { color: "white", key: "5" },
          ],
          key: "17",
        },
        {
          time: "6 PM",
          increments: [
            { color: "white", key: "0" },
            { color: "white", key: "1" },
            { color: "white", key: "2" },
            { color: "white", key: "3" },
            { color: "white", key: "4" },
            { color: "white", key: "5" },
          ],
          key: "18",
        },
        {
          time: "7 PM",
          increments: [
            { color: "white", key: "0" },
            { color: "white", key: "1" },
            { color: "white", key: "2" },
            { color: "white", key: "3" },
            { color: "white", key: "4" },
            { color: "white", key: "5" },
          ],
          key: "19",
        },
        {
          time: "8 PM",
          increments: [
            { color: "white", key: "0" },
            { color: "white", key: "1" },
            { color: "white", key: "2" },
            { color: "white", key: "3" },
            { color: "white", key: "4" },
            { color: "white", key: "5" },
          ],
          key: "20",
        },
        {
          time: "9 PM",
          increments: [
            { color: "white", key: "0" },
            { color: "white", key: "1" },
            { color: "white", key: "2" },
            { color: "white", key: "3" },
            { color: "white", key: "4" },
            { color: "white", key: "5" },
          ],
          key: "21",
        },
        {
          time: "10 PM",
          increments: [
            { color: "white", key: "0" },
            { color: "white", key: "1" },
            { color: "white", key: "2" },
            { color: "white", key: "3" },
            { color: "white", key: "4" },
            { color: "white", key: "5" },
          ],
          key: "22",
        },
        {
          time: "11 PM",
          increments: [
            { color: "white", key: "0" },
            { color: "white", key: "1" },
            { color: "white", key: "2" },
            { color: "white", key: "3" },
            { color: "white", key: "4" },
            { color: "white", key: "5" },
          ],
          key: "23",
        },
      ],
      key: "6",
    },
  ]);

  /**
   * @param  {} navigation
   */
  const resetWeekDays = (navigation) => {
    Alert.alert(
      "Resetting all of the UserWeek FreeTimes!",
      "Are you sure you want to reset your freetimes?",
      [
        {
          text: "Yes",
          onPress: () => {
            setWeekDays(() => {
              weekDays.forEach((item) => {
                item.freeTimes.forEach((item) => {
                  item.increments.forEach((item) => (item.color = "white"));
                });
              });
              navigation.navigate("UserWeek");
              return weekDays;
            });
            Alert.alert("Your UserWeek FreeTimes have been reset!");
          },
        },
        { text: "No" },
      ]
    );
  };

  // userTimes.js
  const [dayFreeTimes, setDayFreeTimes] = useState([]);

  const [selectedDayFreeTimes, setSelectedDayFreeTimes] = useState([]);

  /**
   * @param  {} item
   */
  const inputTime = (item) => {
    setDayFreeTimes(() => {
      item.color === "white"
        ? (item.color = "#00E600")
        : (item.color = "white");

      return setSelectedDayFreeTimes(dayFreeTimes);
    });
  };

  /**
   * @param  {} freeTimes
   * @param  {} day
   */
  const resetDayFreeTimes = (freeTimes, day) => {
    Alert.alert(
      "Resetting FreeTimes!",
      `Are you sure you want to reset your ${day} freetimes?`,
      [
        {
          text: "Yes",
          onPress: () => {
            setDayFreeTimes(() => {
              freeTimes.forEach((item) => {
                item.increments.forEach((item) => (item.color = "white"));
              });
              return setSelectedDayFreeTimes(freeTimes);
            });
          },
        },
        { text: "No" },
      ]
    );
  };

  // userProfile.js
  const name = "John Doe";
  const userName = "JohnnyD123";
  const userInitials = "JD";
  const [userSelectedInterests, setUserInterests] = useState([]);
  const [interests, setInterests] = useState([
    { title: "Climbing", key: 1 },
    { title: "Art", key: 2 },
    { title: "Studying", key: 3 },
    { title: "Chapel", key: 4 },
    { title: "Running", key: 5 },
    { title: "Gaming", key: 6 },
    { title: "Sports", key: 7 },
    { title: "Shopping", key: 8 },
  ]);

  /**
   * @param  {} key
   * @param  {} title
   */
  const pressHandlerAdd = (key, title) => {
    // remove interest from potential interest list
    setInterests((prevInterests) => {
      return prevInterests.filter((interest) => interest.key != key);
    });
    // add interest to user interests list
    setUserInterests((prevUserInterests) => {
      return [{ title: title, key: key }, ...prevUserInterests];
    });
  };

  /**
   * @param  {} key
   * @param  {} title
   */
  const pressHandlerRemove = (key, title) => {
    // make updated user interests list, remove key that was passed in
    setUserInterests((prevUserInterests) => {
      return prevUserInterests.filter((interest) => interest.key != key);
    });
    // add the interest back to potential list of interests
    setInterests((prevInterests) => {
      return [{ title: title, key: key }, ...prevInterests];
    });
  };

  return (
    <UserContext.Provider
      value={{
        weekDays: weekDays,
        setWeekDays: setWeekDays,
        resetWeekDays: resetWeekDays,
        dayFreeTimes: dayFreeTimes,
        setDayFreeTimes: setDayFreeTimes,
        selectedDayFreeTimes: selectedDayFreeTimes,
        setSelectedDayFreeTimes: setSelectedDayFreeTimes,
        inputTime: inputTime,
        resetDayFreeTimes: resetDayFreeTimes,
        name: name,
        userName: userName,
        userInitials: userInitials,
        userSelectedInterests: userSelectedInterests,
        interests: interests,
        setInterests: setInterests,
        pressHandlerAdd: pressHandlerAdd,
        pressHandlerRemove: pressHandlerRemove,
      }}
    >
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
