import React from "react";
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Alert,
} from "react-native";
import { globalStyles } from "../styles/global";

export default function UserTimes({ text }) {
  return (
    <View style={styles.cardContainer}>
      <Text style={styles.cards}>{text}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  cardContainer: {
    flex: 1,
    justifyContent: "space-around",
    backgroundColor: "white",
    borderColor: "#00AAFF",
    borderWidth: 1.5,
    borderRadius: 5,
    elevation: 3,
    shadowOffset: { width: 1, height: 1 },
    shadowColor: "#333",
    shadowOpacity: 0.3,
    shadowRadius: 2,
    margin: 3,
    paddingTop: 19,
    paddingBottom: 19,
  },

  cards: {
    color: "black",
    textAlign: "center",
  },
});