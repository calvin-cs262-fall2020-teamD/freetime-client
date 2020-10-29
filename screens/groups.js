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
import { useGroupsContext } from "../context/groupsContext";

import { MaterialIcons } from "@expo/vector-icons";

import Card from "../components/card";
import Button from "../components/button";

// const GroupsContext = createContext({});

//   export function GroupsContextProvider(props) {
//     const [groups, setGroups] = useState([]);
//     const [named, setNamed] = useState(true);
//     const [text1, setText1] = useState("");
//     const [text2, setText2] = useState("");

//     const changeHandler1 = (val) => {
//       setText1(val);
//     };

//     const changeHandler2 = (val) => {
//       setText2(val);
//     }

//     const addGroup = () => {
//       setText1("");
//       setText2("");
//       setNamed(false);
//     }

//     const deleteGroup = (key, navigation) => {
//       Alert.alert('Deleting this Group!', 'Are you sure you want to delete this Group?', [{text: 'Yes', onPress: () => {
//         setGroups((prevGroups) => {
//           return prevGroups.filter((group) => group.key != key);
//         })
//         navigation.goBack();
//       }}, {text: 'No'}])
//     }

//     const confirmGroup = () => {
//       setGroups((prevGroups) => {
//           return [{ name: text1, adminUser: text2, key: Math.random().toString() }, ...prevGroups];
//         });
//       setNamed(true);
//     }

//     const cancelGroup = () => {
//       setNamed(true);
//     }

//   return (
//     <GroupsContext.Provider value={{ groups: groups, setGroups: setGroups, named: named, setNamed: setNamed, text1: text1, setText1: setText1, text2: text2, setText2: setText2, changeHandler1: changeHandler1, changeHandler2: changeHandler2, addGroup: addGroup, deleteGroup: deleteGroup, confirmGroup: confirmGroup, cancelGroup: cancelGroup}}>
//       {props.children}
//     </GroupsContext.Provider>
//   )
// }

// export const useGroupsContext = () => useContext(GroupsContext);

export default function Groups(props) {
  const context = useGroupsContext();

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
            style={styles.textInput}
            placeholder="Group Name"
            onChangeText={context.changeHandler1}
            value={context.text1}
          />
          <TextInput
            style={styles.textInput}
            placeholder="Admin Username"
            onChangeText={context.changeHandler2}
            value={context.text2}
          />
          <Button text={"Confirm Group"} textColor={'white'} backgroundColor={'#00AAFF'} onPress={context.confirmGroup}></Button>
          <View style={styles.cancelButtonContainer}>
            <Button text={"Cancel"} textColor={'white'} backgroundColor={'red'} onPress={context.cancelGroup}></Button>
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

  textInput: {
    justifyContent: 'center',
    margin: 10,
    padding: 10,
    borderColor: 'black',
    borderWidth: 2,
  },

  cancelButtonContainer: {
    flex: 1,
    justifyContent: 'flex-end',
  }
});
