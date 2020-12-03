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

async function makeGroup(groupContext, groupname, username, userID) {
  let key;
  await fetch(`https://freetime-service.herokuapp.com/creategroup`, {
    method: "POST",
    body: JSON.stringify({groupName: groupname, adminID: userID}),
    headers: {"Content-type": "application/json"}
  })
  .then((response) => response.text())
  .then((json) => key = JSON.parse(json))
  .catch((error) => console.log(error))

  //Adding the admin user to the group
  await fetch(`https://freetime-service.herokuapp.com/addgroupmember`, {
    method: "POST",
    body: JSON.stringify({memberID: userID, groupID: key.id}),
    headers: {"Content-type": "application/json"}
  })
  .then((response) => response.text())
  .then((json) => console.log(json))
  .catch((error) => console.log(error))

  groupContext.confirmGroup(groupname, username, key.id);
}

export default function Groups(props) {
  const [groupName, setGroupName] = React.useState('');
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
          <View style={globalStyles.listContainer}>
            <FlatList
              data={groupContext.groups}
              extraData={groupContext.changedGroups}
              // keyExtractor={(key) => key.newKey}
              renderItem={({ item }) => (
                  <View style={globalStyles.moduleHeader}>
                <TouchableOpacity onPress={() => props.navigation.navigate("Group", item)}>
                   <Text style={globalStyles.moduleHeaderText}>{item.groupname}</Text>
                  <View style={globalStyles.moduleBox}>
                    <Text></Text>
                  </View>
                </TouchableOpacity>
                  </View>
              )}
              scrollEnabled={true}
              showsVerticalScrollIndicator={false}
            />
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
            onChangeText={text => setGroupName(text)}
            value={groupName}
          />
          <Button text={"Confirm Group"} textColor={'black'} backgroundColor={'#70cefa'} onPress={() => {
            let temp = groupName;
            setGroupName('');
            makeGroup(groupContext, temp, userContext.userName, userContext.userID)}}></Button>
          <View style={globalStyles.cancelButtonContainer}>
            <Button text={"Cancel"} textColor={'black'} backgroundColor={'#ff5f5f'} onPress={groupContext.cancelGroup}></Button>
          </View>
        </View>
      </TouchableWithoutFeedback>
    )
  }
}
