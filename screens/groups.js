import React, {useEffect, createContext, useContext} from "react";
import {
    View,
    Text,
    FlatList,
    TouchableOpacity,
    TextInput,
    TouchableWithoutFeedback,
    Keyboard,
    Alert,
    ActivityIndicator,
} from "react-native";
import {globalStyles} from "../styles/global";

import {useUserContext} from "../context/userContext";
import {useGroupContext} from "../context/groupContext";

import {MaterialIcons} from "@expo/vector-icons";
import Dialog from 'react-native-dialog'; //https://www.npmjs.com/package/react-native-dialog

import Button from "../components/button";
/**
 * @param  {} userContext
 * @param  {} groupContext
 * @param  {} groupname
 * @param  {} username
 * @param  {} userID
 */
async function makeGroup(userContext, groupContext, groupname, username, userID) {
    // This checks to make sure you put in the correct lenth for a Group name
    if (groupname.trim().length >= 3 && groupname.trim().length <= 12) {
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
            .then((json) => json)
            .catch((error) => console.log(error))

        // Puts the Group in the groups array
        groupContext.confirmGroup(userContext, groupname, username, key.id);
    } else {
        Alert.alert(`Please input a name that has a length between 3 and 12 characters!`);
    }
}

export default function Groups(props) {
    const [visible, setVisible] = React.useState(false);

    const [groupName, setGroupName] = React.useState('');
    const userContext = useUserContext();
    const groupContext = useGroupContext();
    if (groupContext.named) {
        useEffect(() => props.navigation.setOptions({
            title: "Groups", headerRight: () =>
                <View style={globalStyles.container}>
                    <View style={globalStyles.rightIconContainer}>
                        <TouchableOpacity style={{marginRight: 75}}onPress={() => setVisible(true)}>
                            <MaterialIcons name='help' size={32} color="black" />
                        </TouchableOpacity>
                        <Dialog.Container visible={visible} onBackdropPress={() => setVisible(false)}>
                            <Dialog.Title style={globalStyles.helpHeader}>Groups Help</Dialog.Title>
                            <Dialog.Description style={globalStyles.helpDescription}>• Press the Add Group icon to create a new Group.</Dialog.Description>
                            <Dialog.Description style={globalStyles.helpDescription}>• Press a Group Card to view that Group.</Dialog.Description>
                        </Dialog.Container>
                        <TouchableOpacity onPress={groupContext.addGroup}>
                            <MaterialIcons name='group-add' size={32} color="black"/>
                        </TouchableOpacity>
                    </View>
                </View>,
        }));

        return (
            // This FlatList will display each Group
            <View style={globalStyles.container}>
                <View style={globalStyles.listContainer}>
                    <FlatList
                        data={groupContext.groups}
                        extraData={groupContext.changedGroups}
                        renderItem={({item}) => (
                            <View style={globalStyles.moduleHeader}>
                                <TouchableOpacity onPress={() => { groupContext.matchTimes(groupContext, item.groupMembers); props.navigation.navigate("Group", item)}}>
                                    <Text style={globalStyles.moduleHeaderText}>{item.groupname}</Text>
                                </TouchableOpacity>
                            </View>
                        )}
                        scrollEnabled={true}
                        showsVerticalScrollIndicator={false}
                    />
                </View>
            </View>
        )
    } else if(!groupContext.named) {
        useEffect(() => props.navigation.setOptions({
            title: 'Add Group', headerRight: () => {
            }
        }));

        return (
            // This is the screen for adding a Group
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
                        makeGroup(userContext, groupContext, temp, userContext.userName, userContext.userID)
                    }}></Button>
                    <View style={globalStyles.cancelButtonContainer}>
                        <Button text={"Cancel"} textColor={'black'} backgroundColor={'#ff5f5f'}
                                onPress={groupContext.cancelGroup}></Button>
                    </View>
                </View>
            </TouchableWithoutFeedback>
        )
    }
}
