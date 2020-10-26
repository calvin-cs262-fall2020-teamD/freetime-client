import React, {createContext, useContext, useState } from "react";
import { Alert } from "react-native";

const GroupsContext = createContext({});

  export function GroupsContextProvider(props) {
    const [groups, setGroups] = useState([]);
    const [named, setNamed] = useState(true);
    const [text1, setText1] = useState("");
    const [text2, setText2] = useState("");

    const changeHandler1 = (val) => {
      setText1(val);
    };

    const changeHandler2 = (val) => {
      setText2(val);
    }

    const addGroup = () => {
      setText1("");
      setText2("");
      setNamed(false);
    }

    const deleteGroup = (key, navigation) => {
      Alert.alert('Deleting this Group!', 'Are you sure you want to delete this Group?', [{text: 'Yes', onPress: () => {
        setGroups((prevGroups) => {
          return prevGroups.filter((group) => group.key != key);
        })
        navigation.goBack();
      }}, {text: 'No'}])
    }

    const confirmGroup = () => {
      setGroups((prevGroups) => {
          return [{ name: text1, adminUser: text2, key: Math.random().toString() }, ...prevGroups];
        });
      setNamed(true);
    }

    const cancelGroup = () => {
      setNamed(true);
    }

  return (
    <GroupsContext.Provider value={{ groups: groups, setGroups: setGroups, named: named, setNamed: setNamed, text1: text1, setText1: setText1, text2: text2, setText2: setText2, changeHandler1: changeHandler1, changeHandler2: changeHandler2, addGroup: addGroup, deleteGroup: deleteGroup, confirmGroup: confirmGroup, cancelGroup: cancelGroup}}>
      {props.children}
    </GroupsContext.Provider>
  )
}

export const useGroupsContext = () => useContext(GroupsContext);