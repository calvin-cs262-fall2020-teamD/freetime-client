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

import { useUserContext } from "../context/userContext";
import { useGroupContext } from "../context/groupContext";

import { MaterialIcons } from "@expo/vector-icons";

import Card from "../components/card";
import Button from "../components/button";

export default function Groups(props) {
  const userContext = useUserContext();
  const groupContext = useGroupContext();

  if (groupContext.named) {
    useEffect(() => props.navigation.setOptions({title: "Groups", headerRight: () =>
      <TouchableOpacity onPress={groupContext.addGroup}>
        <View style={globalStyles.iconContainer}>
          <MaterialIcons name='group-add' size={30} color="black" />
        </View>
      </TouchableOpacity>}));

    return (
      <View style={globalStyles.container}>
        <View style={styles.groupsContainer}>
          <View style={styles.listContainer}>
            <FlatList
              data={groupContext.groups}
              extraData={groupContext.changedGroups}
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
            Input your Group Name
          </Text>
          <TextInput
            style={globalStyles.textInput}
            placeholder="Group Name"
            onChangeText={groupContext.changeHandler1}
            value={groupContext.text1}
          />
          {/* <TextInput
            style={globalStyles.textInput}
            placeholder="Admin Username"
            onChangeText={groupContext.changeHandler2}
            value={groupContext.text2}
          /> */}
          <Button text={"Confirm Group"} textColor={'black'} backgroundColor={'#70cefa'} onPress={() => groupContext.confirmGroup(userContext.userName)}></Button>
          <View style={globalStyles.cancelButtonContainer}>
            <Button text={"Cancel"} textColor={'black'} backgroundColor={'#ff5f5f'} onPress={groupContext.cancelGroup}></Button>
          </View>
        </View>
      </TouchableWithoutFeedback>
    )
  }
}

const styles = StyleSheet.create({
  groupsContainer: {
    backgroundColor: "white",
    borderColor: "#70cefa",
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
