import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { globalStyles } from "../styles/global";
import Card from "../components/card";

export default function Groups({ navigation }) {
  const [groups, setGroups] = useState([
    { name: "Group 1", key: "1" },
    //{ name: "Group 2", key: "2" },
  ]);

  return (
    <View style={globalStyles.container}>
      <View style={styles.groupsContainer}>
        <View style={styles.listContainer}>
          <FlatList
            data={groups}
            renderItem={({ item }) => (
              <TouchableOpacity>
                <Card text={item.name}></Card>
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
    height: "99%",
  },

  listContainer: {
    flex: 1,
  },
});
