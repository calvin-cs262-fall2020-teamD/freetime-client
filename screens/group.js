import React, {useEffect} from "react";
import {
    View,
    Text,
    FlatList,
    TouchableOpacity,
} from "react-native";
import {globalStyles} from "../styles/global";
import {useGroupContext} from "../context/groupContext";

import {MaterialIcons} from "@expo/vector-icons";
import Dialog from 'react-native-dialog'; //https://www.npmjs.com/package/react-native-dialog

export default function Group({route, navigation}) {
    const [visible, setVisible] = React.useState(false);

    const context = useGroupContext();

    useEffect(() => navigation.setOptions({
        title: route.params.groupname, headerRight: () =>
            <View style={globalStyles.container}>
                <View style={globalStyles.rightIconContainer}>
                    <TouchableOpacity style={{marginRight: 60}}onPress={() => setVisible(true)}>
                        <MaterialIcons name='help' size={32} color="black" />
                    </TouchableOpacity>
                    <Dialog.Container visible={visible} onBackdropPress={() => setVisible(false)}>
                        <Dialog.Title>Group Help</Dialog.Title>
                        <Dialog.Description>- Press the Settings icon to add Group Members.</Dialog.Description>
                        <Dialog.Description>- Press the Settings icon to rename this Group.</Dialog.Description>
                        <Dialog.Description>- Press the Settings icon to delete this Group.</Dialog.Description>
                    </Dialog.Container>
                    <TouchableOpacity onPress={() => navigation.navigate("GroupSettings", {
                        name: route.params.groupname,
                        adminUser: route.params.adminUser,
                        groupMembers: route.params.groupMembers,
                        key: route.params.key
                    })}>
                        <MaterialIcons name='settings' size={32} color="black"/>
                    </TouchableOpacity>
                </View>
            </View>,
    }));

    return (
        <View style={globalStyles.container}>
            <Text style={globalStyles.titleText}>Admin Username: {route.params.adminUser}</Text>
            <Text style={globalStyles.titleText}>Group Members:</Text>
            <FlatList
                data={route.params.groupMembers}
                extraData={context.addedGroupMembers}
                keyExtractor={(member) => member.username}
                renderItem={({item}) => (
                    <View style={globalStyles.container}>
                        <Text style={globalStyles.moduleHeaderText}>{item.username}</Text>
                    </View>
                )}
            />
        </View>
    )
}
