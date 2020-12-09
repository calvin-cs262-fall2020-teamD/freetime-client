import React, {createContext, useContext, useState} from "react";
import {Alert} from "react-native";

async function deleteFromDB(key, name) {
    //Deleting member records
    await fetch(`https://freetime-service.herokuapp.com/deletegroupmembers`, {
        method: "DELETE",
        body: JSON.stringify({groupID: key}),
        headers: {"Content-type": "application/json"}
    })
        .then((response) => response.text())
        .then((json) => json)
        .catch((error) => console.log(error))

    //Deleting group record
    await fetch(`https://freetime-service.herokuapp.com/deletegroup`, {
        method: "DELETE",
        body: JSON.stringify({id: key}),
        headers: {"Content-type": "application/json"}
    })
        .then((response) => response.text())
        .then((json) => json)
        .catch((error) => console.log(error))
}

const GroupContext = createContext({});

export function GroupContextProvider(props) {

    // Users GET from database
    const [users, setUsers] = useState([]);

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
        if (groupName.trim().length >= 3) {
            setGroups((prevGroups) => {
                return [{
                    groupname: groupName,
                    adminUser: adminUsername,
                    groupMembers: [],
                    key: String(newkey)
                }, ...prevGroups];
            });
            setNamed(true);
        } else {
            Alert.alert(`Please input a name that has 3 or more characters!`);
        }
    }

    const cancelGroup = () => {
        setNamed(true);
    }

    // groupsSettings.js

    const [membersAdded, setMembersAdded] = useState(true);
    const [addedGroupMembers, setAddedGroupMembers] = useState([]);
    const [text4, setText4] = useState("");

    const changeHandler4 = (val) => {
        setText4(val);
    }

    const addGroupMember = () => {
        setText4("");
        setMembersAdded(false);
    }

    const addedGroupMember = (adminUser, groupMembers, member, groupID, navigation) => {
        let memberExists = false;

        if (adminUser == member) {
            Alert.alert(`You can't add yourself ${member}!`);
            memberExists = true;
        } else {
            for (let currentMember of groupMembers) {
                if (currentMember.username == member) {
                    Alert.alert(`There was already a ${member} User!`);
                    memberExists = true;
                    break;
                }
            }
        }

        if (!memberExists) {
            let i = 0;
            for (let user of users) {
                if (user.username == member) {
                    groupMembers.push(user);

                    fetch(`https://freetime-service.herokuapp.com/addgroupmember`, {
                        method: "POST",
                        body: JSON.stringify({memberID: user.id, groupID: groupID}),
                        headers: {"Content-type": "application/json"}
                    })
                        .then((response) => response.text())
                        .then((json) => json)
                        .catch((error) => console.log(error))

                    break;
                } else {
                    i++;
                }
            }

            if (i == users.length) {
                Alert.alert(`There wasn't a ${member} User!`);
            }
        }

        setAddedGroupMembers(groupMembers);
        setMembersAdded(true);
        navigation.goBack();
    }

    const cancelGroupMember = () => {
        setMembersAdded(true);
    }

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
        if (text3.trim().length >= 3) {
            fetch(`https://freetime-service.herokuapp.com/changegroupname`, {
                method: "PUT",
                body: JSON.stringify({groupname: text3, id: key}),
                headers: {"Content-type": "application/json"}
            })
                .then((response) => response.text())
                .then((json) => json)
                .catch((error) => console.log(error))

            setGroups(() => {
                groups.forEach((item) => (item.groupname === groupName ? item.groupname = text3 : null));

                return groups;
            });
            setRenamed(true);
            navigation.goBack();
        } else {
            Alert.alert(`Please input a name that has 3 or more characters!`);
        }
    }

    const cancelRename = () => {
        setRenamed(true);
    }

    const deleteGroup = (name, navigation) => {
        Alert.alert('Deleting this Group!', 'Are you sure you want to delete this Group?', [{
            text: 'Yes', onPress: () => {
                let myKey;
                for (let i = 0; i < groups.length; i++) {
                    if (groups[i].groupname == name) {
                        myKey = groups[i].key;
                        deleteFromDB(myKey, name);
                    }
                }
                setGroups((prevGroups) => {
                    return prevGroups.filter((group) => group.groupname != name);
                })

                navigation.navigate("Groups");
                Alert.alert(`Group "${name}" has been deleted!`);
            }
        }, {text: 'No'}]);
    }

    return (
        <GroupContext.Provider value={{
            users: users,
            setUsers: setUsers,
            groups: groups,
            setGroups: setGroups,
            changedGroups: changedGroups,
            setChangedGroups: setChangedGroups,
            named: named,
            setNamed: setNamed,
            text1: text1,
            setText1: setText1,
            text2: text2,
            setText2: setText2,
            changeHandler1: changeHandler1,
            changeHandler2: changeHandler2,
            addGroup: addGroup,
            confirmGroup: confirmGroup,
            cancelGroup: cancelGroup,
            addGroupMember: addGroupMember,
            addedGroupMember: addedGroupMember,
            cancelGroupMember: cancelGroupMember,
            membersAdded: membersAdded,
            setMembersAdded: setMembersAdded,
            addedGroupMembers: addedGroupMembers,
            setAddedGroupMembers: setAddedGroupMembers,
            text4: text4,
            setText4: setText4,
            changeHandler4: changeHandler4,
            renamed: renamed,
            setRenamed: setRenamed,
            text3: text3,
            setText3: setText3,
            changeHandler3: changeHandler3,
            renameGroup: renameGroup,
            renamedGroup: renamedGroup,
            cancelRename: cancelRename,
            deleteGroup: deleteGroup
        }}>
            {props.children}
        </GroupContext.Provider>
    )
}

export const useGroupContext = () => useContext(GroupContext);
