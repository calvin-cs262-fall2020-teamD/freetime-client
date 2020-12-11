import React, {useEffect} from "react";
import {
    StyleSheet,
    View,
    Text,
    FlatList,
    TouchableOpacity,
} from "react-native";
import {globalStyles} from "../styles/global";
import {useGroupContext} from "../context/groupContext";
import {MaterialIcons} from "@expo/vector-icons";

export default function Group({route, navigation}) {
    const context = useGroupContext();
    
    useEffect(() => navigation.setOptions({
        title: route.params.groupname, headerRight: () =>
            <TouchableOpacity onPress={() => navigation.navigate("GroupSettings", {
                name: route.params.groupname,
                adminUser: route.params.adminUser,
                groupMembers: route.params.groupMembers,
                key: route.params.key
            })}>
                {/* context.deleteGroup(route.params.key, navigation) */}
                <View style={globalStyles.iconContainer}>
                    <MaterialIcons name='settings' size={30} color="black"/>
                </View>
            </TouchableOpacity>
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
            
            <Text style={globalStyles.titleText}>Best Time(s) for the group to meet:</Text>
            <FlatList
                data={context.bestTimes}
                keyExtractor={(item) => item}
                renderItem={({item}) => (
                    <View style={globalStyles.container}>
                        <Text style={globalStyles.moduleHeaderText}>{item}</Text>
                    </View>
                )}
            />
            
        </View>
    )
}
