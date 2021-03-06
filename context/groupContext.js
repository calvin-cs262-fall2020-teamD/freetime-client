import React, {createContext, useContext, useState} from "react";
import {Alert} from "react-native";

/**
 * @param  {} key
 * @param  {} name
 */
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
/**
 * @param  {} context
 * @param  {} members
 */
async function matchTimes(context, members) {
    //Step 1, extract member ids
    let ids = [];
    members.forEach((member) => { ids.push(member.memberid) }); //members doesn't include admin

    //Step 2, get freetime of those members
    let freeTimes = [];
    await fetch(`https://freetime-service.herokuapp.com/getfreetimes`)
        .then((response) => response.json())
        .then((json) => freeTimes = json)
        .catch((error) => console.log(error))
    freeTimes = freeTimes.filter((freetime) => ids.includes(freetime.userid));
    let data = [];
    ids.forEach((member) => { data.push(freeTimes.filter((freetime) => freetime.userid == member)) })
    //Step 3, get overlapping intervals
    //This is done by splitting up fetched ranges into individual time slots, which then get made back into new ranges in step 4
    let matches = [];
    let temp = [];
    let start;
    let end;
    for(let i = 0; i < data.length; i++) { //For every member
        for(let n = 0; n < data[i].length; n++) { //for each time slot they have
            start = data[i][n].starttime.split(',').map((item) => parseInt(item));
            end = data[i][n].endtime.split(',').map((item) => parseInt(item));
            while((start[0] <= end[0] && start[1] <= end[1]) || (start[0] < end[0])) {
                if(i == 0) { //If the matches is empty, just fill it with the first member's times
                    temp.push({slot: start.map((i)=>i), day: data[i][n].weekday});
                } else {
                    for(let x = 0; x < matches.length; x++) {
                        if(matches[x].slot[0] == start[0] && matches[x].slot[1] == start[1]) {
                            temp.push({slot: start.map((i)=>i), day: data[i][n].weekday});
                        }
                    }
                }
                if(start[1] < 3) {
                    start[1]++;
                } else {
                    start[0]++;
                    start[1] = 0;
                }
            }
        }
        matches = temp.map((i)=>i);
        temp = [];
    }
    //Step 4, re-form into ranges not individual slots
    if(matches.length != 0) {
        let ranges = [{start: matches[0].slot, end: matches[0].slot, day: matches[0].day}];
        for(let i = 0; i < matches.length-1; i++) {
            if((parseInt(matches[i+1].slot[1]) == parseInt(ranges[ranges.length-1].end[1]) + 1 && parseInt(matches[i+1].slot[0]) == parseInt(ranges[ranges.length-1].end[0]) ) || (parseInt(matches[i+1].slot[0]) != parseInt(ranges[ranges.length-1].end[0]) && (parseInt(matches[i+1].slot[1]) - parseInt(ranges[ranges.length-1].end[1]) == 3))) {
                //Somewhere above ^^^ there were string and integer type mismatches, for now it's easier to manually parse everything to ints than to figure out where the issue is originating from
                ranges[ranges.length-1].end = [matches[i+1].slot[0],matches[i+1].slot[1]];
            } else { //start a new range
                ranges.push({start: matches[i+1].slot, end: matches[i+1].slot, day: matches[i+1].day});
            }
        }
        //Step 5, format into array
        const startminutes = ["00","15","30","45"];
        const endminutes = ["15","30","45","00"];
        for(let i = 0; i < ranges.length; i++) {
            //starts
            if(parseInt(ranges[i].start[0]) <= 12 && parseInt(ranges[i].start[0]) != 0) {
                ranges[i].start = ranges[i].start[0] + ":" + startminutes[parseInt(ranges[i].start[1])] + "am";
            } //if its before 1pm and not midnight
            else if(parseInt(ranges[i].start[0]) > 12) {
                ranges[i].start = parseInt(ranges[i].start[0]) - 12 + ":" + startminutes[parseInt(ranges[i].start[1])] + "pm";
            }
            else {
                ranges[i].start = "12:" + startminutes[parseInt(ranges[i].start[1])] + "am";
            }

            //ends
            if(parseInt(ranges[i].end[0]) <= 12 && parseInt(ranges[i].end[0]) != 0) {
                if(parseInt(ranges[i].end[1]) == 3) {
                    ranges[i].end = parseInt(ranges[i].end[0]) + 1 + ":" + endminutes[parseInt(ranges[i].end[1])] + "am";
                } else {
                    ranges[i].end = ranges[i].end[0] + ":" + endminutes[parseInt(ranges[i].end[1])] + "am";
                }
            }
            else if(parseInt(ranges[i].end[0]) > 12) { //doesnt hadle next hour
                if(parseInt(ranges[i].end[1]) == 3) {
                    ranges[i].end = parseInt(ranges[i].end[0]) - 11 + ":" + endminutes[parseInt(ranges[i].end[1])] + "pm";
                } else {
                    ranges[i].end = parseInt(ranges[i].end[0]) - 12 + ":" + endminutes[parseInt(ranges[i].end[1])] + "pm";
                }
            }
            else {
                if(parseInt(ranges[i].end[1]) == 3) {
                    ranges[i].end = "1:" + endminutes[parseInt(ranges[i].end[1])] + "am";
                } else {
                    ranges[i].end = "12:" + endminutes[parseInt(ranges[i].end[1])] + "am";
                }
            }
        }
        let formattedStrings = [];
        for(let i = 0; i < ranges.length; i++) {
            formattedStrings.push(ranges[i].day + ": " + ranges[i].start + " to " + ranges[i].end);
        }
        context.setBestTimes(formattedStrings);
    } else {
        context.setBestTimes(["No times found for the whole group to meet."]);
    }
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

    /**
     * @param  {} val
     */
    // This function is used for entering a Group name
    const changeHandler1 = (val) => {
        setText1(val);
    };
    /**
     * @param  {} val
     */
    const changeHandler2 = (val) => {
        setText2(val);
    }

    // This function will bring you to the Add Group screen
    const addGroup = () => {
        setText1("");
        setText2("");
        setNamed(false);
    }

    /**
     * @param  {} userContext
     * @param  {} groupName
     * @param  {} adminUsername
     * @param  {} newkey
     */
    // This function will create a new Group by adding it to the groups array
    const confirmGroup = (userContext, groupName, adminUsername, newkey) => {
        setGroups((prevGroups) => {
            return [{
                groupname: groupName,
                adminUser: adminUsername,
                groupMembers: [{memberid: userContext.userID, username: adminUsername}],
                key: String(newkey)
            }, ...prevGroups];
        });
        setNamed(true);
    }

    // This function will bring you back to the Groups screen
    const cancelGroup = () => {
        setNamed(true);
    }

    // groupsSettings.js

    const [membersAdded, setMembersAdded] = useState(true);
    const [addedGroupMembers, setAddedGroupMembers] = useState([]);
    const [text4, setText4] = useState("");

    /**
     * @param  {} val
     */
    // This function changes the inputted name to add to a Group
    const changeHandler4 = (val) => {
        setText4(val);
    }

    // This function will bring you to the Add Group Member screen
    const addGroupMember = () => {
        setText4("");
        setMembersAdded(false);
    }
    /**
     * @param  {} context
     * @param  {} adminUser
     * @param  {} groupMembers
     * @param  {} member
     * @param  {} groupID
     * @param  {} navigation
     */
    // This function checks for the Group Member in the database and if they are there it will add it to your Group
    const addedGroupMember = (context, adminUser, groupMembers, member, groupID, navigation) => {
        let memberExists = false;
        // Makes sure you don't add yourself to the Group as the admin created it
        if (adminUser == member) {
            Alert.alert(`You can't add yourself ${member}!`);
            memberExists = true;
        } else {
            // Double checks that the Group Member being added isn't already there
            for (let currentMember of groupMembers) {
                if (currentMember.username == member) {
                    Alert.alert(`There was already a ${member} User!`);
                    memberExists = true;
                    break;
                }
            }
        }

        // Pushes the user to the GroupMembers array and POST's it to the database
        if (!memberExists) {
            let i = 0;
            for (let user of users) {
                if (user.username == member) {
                    groupMembers.push({memberid: user.id, username: user.username});

                    fetch(`https://freetime-service.herokuapp.com/addgroupmember`, {
                        method: "POST",
                        body: JSON.stringify({memberID: user.id, groupID: groupID}),
                        headers: {"Content-type": "application/json"}
                    })
                        .then((response) => response.text())
                        .then((json) => json)
                        .catch((error) => console.log(error))
                    matchTimes(context, groupMembers);
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

    // This function brings you back to the Group screen
    const cancelGroupMember = () => {
        setMembersAdded(true);
    }

    const [renamed, setRenamed] = useState(true);
    const [text3, setText3] = useState("");

    /**
     * @param  {} val
     */
    // This function is used for renaming a Group name
    const changeHandler3 = (val) => {
        setText3(val);
    }

    // This function brings you to the Rename Group screen
    const renameGroup = (groupName) => {
        setRenamed(false);
        setText3(groupName);
    }
    /**
     * @param  {} key
     * @param  {} groupName
     * @param  {} navigation
     */
    // This function will set the new name for the Group and PUT it to the database
    const renamedGroup = (key, groupName, navigation) => {
        if (text3.trim().length >= 3 && text3.trim().length <= 12) {
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
            Alert.alert(`Please input a name that has a length between 3 and 12 characters!`);
        }
    }

    // This function brings you back to the Group Settings screen
    const cancelRename = () => {
        setRenamed(true);
    }
    /**
     * @param  {} name
     * @param  {} navigation
     */
    // This function will delete your Group and DELETE it in the database along with all of its Group Members
    const deleteGroup = (name, navigation) => {
        Alert.alert('Deleting this Group!', 'Are you sure you want to delete this Group?', [{
            text: 'Yes', onPress: () => {
                let myKey;
                for (let i = 0; i < groups.length; i++) {
                    if (groups[i].groupname == name) {
                        myKey = groups[i].key;
                        // Delete's from the database here
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
            matchTimes: matchTimes,
        }}>
            {props.children}
        </GroupContext.Provider>
    )
}

export const useGroupContext = () => useContext(GroupContext);
