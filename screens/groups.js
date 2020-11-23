import React, { useState, useEffect, createContext, useContext } from "react";
import {
  View,
  StyleSheet,
  Text,
  FlatList,
  TouchableOpacity,
  Alert,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { globalStyles } from "../styles/global";
import { useGroupContext } from "../context/groupContext";

import { MaterialIcons } from "@expo/vector-icons";

import Card from "../components/card";
import Button from "../components/button";

export default function Groups(props) {
  const context = useGroupContext();

  if (context.named) {
    useEffect(() => props.navigation.setOptions({title: "Groups", headerRight: () =>
      <TouchableOpacity onPress={context.addGroup}>
        <View style={globalStyles.iconContainer}>
          <MaterialIcons name='group-add' size={30} color="black" />
        </View>
      </TouchableOpacity>}));

    return (
      <View style={globalStyles.container}>
        <View style={styles.groupsContainer}>
          <View style={styles.listContainer}>
            <FlatList
              data={context.groups}
              extraData={context.changedGroups}
              renderItem={({ item }) => (
                <TouchableOpacity onPress={() => props.navigation.navigate("Group", item)}>
                  <Card text={item.name}></Card>
                </TouchableOpacity>
              )}
            />
          </View>
        </View>
      </View>
    );
  } else {
    useEffect(() => props.navigation.setOptions({ title: 'Add Group', headerRight: () => {}}));

    return (
      <TouchableWithoutFeedback onPress={() => {
        Keyboard.dismiss();
      }}>
        <View style={globalStyles.container}>
          <Text style={globalStyles.titleText}>
            Please input your Group Name and Admin Username
          </Text>
          <TextInput
            style={globalStyles.textInput}
            placeholder="Group Name"
            onChangeText={context.changeHandler1}
            value={context.text1}
          />
          <TextInput
            style={globalStyles.textInput}
            placeholder="Admin Username"
            onChangeText={context.changeHandler2}
            value={context.text2}
          />
          <Button text={"Confirm Group"} textColor={'black'} backgroundColor={'#00AAFF'} onPress={context.confirmGroup}></Button>
          <View style={globalStyles.cancelButtonContainer}>
            <Button text={"Cancel"} textColor={'black'} backgroundColor={'red'} onPress={context.cancelGroup}></Button>
          </View>
        </View>
      </TouchableWithoutFeedback>
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
    height: "99%",
  },

  listContainer: {
    flex: 1,
  },
});
