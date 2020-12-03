import React, { useState, useEffect } from "react";
import {
  View,
  StyleSheet,
  Text,
  FlatList,
  TouchableOpacity,
  TouchableWithoutFeedback,
  TextInput,
  Keyboard
} from "react-native";
import { globalStyles } from "../styles/global";

import { useGroupContext } from "../context/groupContext";

import Button from "../components/button";
import { HeaderBackButton } from "@react-navigation/stack";

export default function GroupSettings({ route, navigation }) {
  const context = useGroupContext();

  if (context.renamed) {
    useEffect(() => navigation.setOptions({headerLeft: (props) => (<HeaderBackButton {...props} onPress={() => {navigation.goBack()}}></HeaderBackButton>) }));

    return (
      <View style={globalStyles.container}>
        <Button text={"Rename Group"} backgroundColor={"#70cefa"} textColor={"green"} onPress={() => {console.log("renaming group " + route.params.name); context.renameGroup(route.params.name)}}></Button>
        <Button text={"Delete Group"} backgroundColor={"#70cefa"} textColor={"white"} onPress={() => {console.log("Deleting group " + route.params.name + " key passed in: " + route.params.key); context.deleteGroup(route.params.name, navigation)}}></Button>
      </View>
    )
  } else {
    useEffect(() => navigation.setOptions({ headerLeft: () => {} }));

    return (
      <TouchableWithoutFeedback onPress={() => {
        Keyboard.dismiss();
      }}>
        <View style={globalStyles.container}>
          <Text style={globalStyles.titleText}>
            Please rename your Group
          </Text>
          <TextInput
            style={globalStyles.textInput}
            placeholder={route.params.name}
            onChangeText={context.changeHandler3}
            value={context.text3}
          />
          <Button text={"Rename Group"} textColor={'black'} backgroundColor={'#70cefa'} onPress={() => context.renamedGroup(route.params.key, route.params.name, navigation)}></Button>
          <View style={globalStyles.cancelButtonContainer}>
            <Button text={"Cancel"} textColor={'black'} backgroundColor={'#ff5f5f'} onPress={() => context.cancelRename(navigation)}></Button>
          </View>
        </View>
      </TouchableWithoutFeedback>
    )
  }

}

const styles = StyleSheet.create({
});
