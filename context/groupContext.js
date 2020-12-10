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

async function matchTimes(members) {
    //Step 1, get members ids
    let data = [];
    let ids = [];
    await fetch("https://freetime-service.herokuapp.com/Users")
        .then((response) => response.json())
        .then((json) => data = json)
        .catch((error) => console.log(error))
    
    for (let i = 0; i < data.length; i++) {
        if (members.includes(data[i].username)) {
            ids.push(data[i].id)
        }
    }

    //Step 2, get freetime of those members
    let freeTimes = [];
    await fetch(`https://freetime-service.herokuapp.com/getfreetimes`)
        .then((response) => response.json())
        .then((json) => freeTimes = json)
        .catch((error) => console.log(error))
    freeTimes = userFreeTimes.filter((freetime) => ids.includes(freetime.userid));
    data = [];
    ids.forEach((member) => { data.push(freeTimes.filter((freetime) => freetime.userid == member)) })

    //Step 3, get overlapping intervals
    let matches = [];
    let temp = [];
    for(let i = 0; i < data.length; i++) { //For every member
        for(let n = 0; n < data[i].length; n++) { //for each time slot they have
            start = data[n].starttime.split(',');
            end = data[n].endtime.split(',');
            while((start[0] <= end[0] && start[1] <= end[1]) || (start[0] < end[0])) { 
                if(i == 0) { //If the matches is empty, just fill it with the first member's times
                    matches.push({slot: start, day: data[n].weekday});
                } else {
                    for(let x = 0; x < matches.length; x++) {
                        if(matches[x].slot[0] == start[0] && matches[x].slot[1] == start[1]) {
                            temp.push({slot: start, day: data[n].weekday});
                        }
                    }
                }
                if(start[1] < 3) {
                    start[1]++;
                } else { //if start[1] == 3
                    start[0]++;
                    start[1] = 0;
                }
            }
        }
        matches = temp;
        temp = [];
    }
    console.log(matches);
    //Step 4, return array of 
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
    const [bestTimes, setBestTimes] = useState([]);
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
            deleteGroup: deleteGroup,
            bestTimes: bestTimes,
            setBestTimes: setBestTimes,
        }}>
            {props.children}
        </GroupContext.Provider>
    )
}

export const useGroupContext = () => useContext(GroupContext);
