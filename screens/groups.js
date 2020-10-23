import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  FlatList,
  TouchableOpacity,
  Alert,
  TextInput,
} from "react-native";
import { globalStyles } from "../styles/global";

import Card from "../components/card";
import Button from "../components/button";

export default function Groups({ navigation }) {
  const [groups, setGroups] = useState([]);
  const [named, setNamed] = useState(true);
  const [text, setText] = useState("");

  const changeHandler = (val) => {
    setText(val);
  };

  const addGroup = () => {
    Alert.alert('Adding a Group', 'Would you like to add a Group?', [{text: 'Yes', onPress: () => {
      setText("");
      setNamed(false);
    }}, {text: 'No'}])
  }

  const confirmGroup = () => {
    setGroups((prevGroups) => {
        return [{ name: text, key: Math.random().toString() }, ...prevGroups];
      });
    setNamed(true);
  }

  if (named) {
    return (
      <View style={globalStyles.container}>
        <View style={styles.groupsContainer}>
          <View style={styles.listContainer}>
            <FlatList
              data={groups}
              renderItem={({ item }) => (
                <TouchableOpacity onPress={() => navigation.navigate("Group", item)}>
                  <Card text={item.name}></Card>
                </TouchableOpacity>
              )}
            />
          </View>
        </View>
        <Button text={"Add Group"} onPress={addGroup}></Button>
      </View>
    );
  } else {
    return (
      <View style={globalStyles.container}>
        <TextInput
          style={styles.textInput}
          placeholder="Group Name"
          onChangeText={changeHandler}
          value={text}
        />
        <Button text={"Confirm Group"} onPress={confirmGroup}></Button>
      </View>
    )
  }

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
    height: "90.5%",
  },

  listContainer: {
    flex: 1,
  },

  textInput: {
    justifyContent: 'center',
    margin: 10,
    padding: 10,
    borderColor: 'black',
    borderWidth: 2,
  }
});