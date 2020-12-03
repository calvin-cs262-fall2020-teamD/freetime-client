import React, {createContext, useContext, useState } from "react";
import { Alert } from "react-native";

async function deleteFromDB(key, name) {
  //Deleting member records
  await fetch(`https://freetime-service.herokuapp.com/deletegroupmembers`, {
    method: "DELETE",
    body: JSON.stringify({groupID: key}),
    headers: {"Content-type": "application/json"}
  })
  .then((response) => response.text())
  .then((json) => console.log(json))
  .catch((error) => console.log(error))

  console.log("member records deleted")

  //Deleting group record
  await fetch(`https://freetime-service.herokuapp.com/deletegroup`, {
    method: "DELETE",
    body: JSON.stringify({id: key}),
    headers: {"Content-type": "application/json"}
  })
  .then((response) => response.text())
  .then((json) => console.log(json))
  .catch((error) => console.log(error))
  console.log("group deleted")
}

const GroupContext = createContext({});

  export function GroupContextProvider(props) {

    // groups.js
    const [groups, setGroups] = useState([]);
    const [changedGroups, setChangedGroups] = useState([]);
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

    const confirmGroup = (groupName, adminUsername, newkey) => {
      setGroups((prevGroups) => {
          return [{ groupname: groupName, adminUser: adminUsername, groupMembers: [], key: String(newkey)}, ...prevGroups];
        });
      setNamed(true);
    }

    const cancelGroup = () => {
      setNamed(true);
    }

    // groupsSettings.js

    const [renamed, setRenamed] = useState(true);
    const [text3, setText3] = useState("");

    const changeHandler3 = (val) => {
      setText3(val);
    }

    const renameGroup = (groupName) => {
      setRenamed(false);
      setText3(groupName);
    }

    const renamedGroup = (key, groupName, navigation) => {
      fetch(`https://freetime-service.herokuapp.com/changegroupname`, {
        method: "PUT",
        body: JSON.stringify({groupname: text3, id: key}),
        headers: {"Content-type": "application/json"}
      })
      .then((response) => response.text())
      .then((json) => console.log(json))
      .catch((error) => console.log(error))
      setGroups(() => {
        groups.forEach((item) => (item.groupname === groupName ? item.groupname = text3 : null));

        return groups;
      });
      setRenamed(true);
      navigation.navigate("Groups");
    }

    const cancelRename = () => {
      setRenamed(true);
    }

    const deleteGroup = (name, navigation) => {
      Alert.alert('Deleting this Group!', 'Are you sure you want to delete this Group?', [{text: 'Yes', onPress: () => {
        let myKey;
        console.log("dg function, key: ");
        for(let i = 0; i < groups.length; i++) {
          if(groups[i].groupname == name) {
            myKey = groups[i].key;
            console.log(myKey);
            console.log(name);
            deleteFromDB(myKey, name);
          }
        }
        setGroups((prevGroups) => {
          return prevGroups.filter((group) => group.groupname != name);
        })

        navigation.navigate("Groups");
        Alert.alert(`Group "${name}" has been deleted!`);
      }}, {text: 'No'}]);
    }

  return (
    <GroupContext.Provider value={{
      groups: groups, setGroups: setGroups, changedGroups: changedGroups, setChangedGroups: setChangedGroups, named: named, setNamed: setNamed, text1: text1, setText1: setText1, text2: text2, setText2: setText2, changeHandler1: changeHandler1, changeHandler2: changeHandler2, addGroup: addGroup, confirmGroup: confirmGroup, cancelGroup: cancelGroup,
      renamed: renamed, setRenamed: setRenamed, text3: text3, setText3: setText3, changeHandler3: changeHandler3, renameGroup: renameGroup, renamedGroup: renamedGroup, cancelRename: cancelRename, deleteGroup: deleteGroup
    }}>
      {props.children}
    </GroupContext.Provider>
  )
}

export const useGroupContext = () => useContext(GroupContext);