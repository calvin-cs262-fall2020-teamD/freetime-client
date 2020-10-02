import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { globalStyles } from "../styles/global";

export default function Groups({ navigation }) {
  const [groups, setGroups] = useState([
    { name: "example 1", key: "1" },
    { name: "example 2", key: "2" },
  ]);

  return (
    <View style={globalStyles.container}>
      <View style={styles.groupsContainer}>
        <View style={styles.listContainer}>
          <FlatList
            data={groups}
            renderItem={({ item }) => (
              <TouchableOpacity>
                <View style={styles.groupContainer}>
                  <Text style={styles.groupNames}>{item.name}</Text>
                </View>
              </TouchableOpacity>
            )}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  groupsContainer: {
    backgroundColor: "white",
    borderColor: "#00AAFF",
    borderWidth: 1.5,
    borderRadius: 5,
    margin: 0,
    padding: 10,
    width: "43%",
    height: "100%",
  },

  listContainer: {
    flex: 1,
  },

  groupContainer: {
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

  groupNames: {
    color: "black",
    textAlign: "center",
  },
});
