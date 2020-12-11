import React, {useEffect} from "react";
import {
    View,
    StyleSheet,
    Text,
    FlatList,
    TouchableWithoutFeedback,
    TextInput,
    Keyboard,
} from "react-native";
import {globalStyles} from "../styles/global";

import {useGroupContext} from "../context/groupContext";

import Button from "../components/button";
import {HeaderBackButton} from "@react-navigation/stack";

export default function GroupSettings({route, navigation}) {
    const context = useGroupContext();

    if (context.renamed && context.membersAdded) {
        useEffect(() => navigation.setOptions({
            headerLeft: (props) => (<HeaderBackButton {...props} onPress={() => {
                navigation.goBack()
            }}></HeaderBackButton>)
        }));

        return (
            // This is the base screen for Group Settings with three buttons for Group functionality
            <View style={globalStyles.container}>
                <Button text={"Add Group Member"} backgroundColor={"#70cefa"} textColor={"white"}
                        onPress={context.addGroupMember}></Button>
                <Button text={"Rename Group"} backgroundColor={"#70cefa"} textColor={"white"} onPress={() => {
                    context.renameGroup(route.params.name)
                }}></Button>
                <Button text={"Delete Group"} backgroundColor={"#70cefa"} textColor={"white"} onPress={() => {
                    context.deleteGroup(route.params.name, navigation)
                }}></Button>
            </View>
        )
    } else if (!context.renamed && context.membersAdded) {
        useEffect(() => navigation.setOptions({
            headerLeft: () => {
            }
        }));

        return (
            // Displays the screen for renaming you Group
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
                    <Button text={"Rename Group"} textColor={'black'} backgroundColor={'#70cefa'}
                            onPress={() => context.renamedGroup(route.params.key, route.params.name, navigation)}></Button>
                    <View style={globalStyles.cancelButtonContainer}>
                        <Button text={"Cancel"} textColor={'black'} backgroundColor={'#ff5f5f'}
                                onPress={() => context.cancelRename(navigation)}></Button>
                    </View>
                </View>
            </TouchableWithoutFeedback>
        )
    } else if (context.renamed && !context.membersAdded) {
        useEffect(() => navigation.setOptions({
            headerLeft: () => {
            }
        }));

        return (
            // Displays the screen for Adding Group Members
            <TouchableWithoutFeedback onPress={() => {
                Keyboard.dismiss();
            }}>
                <View style={globalStyles.container}>
                    <Text style={globalStyles.titleText}>
                        Please add Members to your Group
                    </Text>
                    <TextInput
                        style={globalStyles.textInput}
                        placeholder={"Username"}
                        onChangeText={context.changeHandler4}
                        value={context.text4}
                    />
                    <View style={globalStyles.container}>
                        <FlatList
                            data={context.users}
                            keyExtractor={(user) => user.id.toString()}
                            renderItem={({item}) => (
                                <View style={globalStyles.container}>
                                    <Text style={{marginLeft: 10, fontSize: 15}}>{item.username}</Text>
                                </View>
                            )}
                            scrollEnabled={true}
                            showsVerticalScrollIndicator={false}
                        />
                    </View>
                    <View style={globalStyles.container}>
                        <Button text={"Add Member"} textColor={'black'} backgroundColor={'#70cefa'}
                                onPress={() => context.addedGroupMember(context, route.params.adminUser, route.params.groupMembers, context.text4, route.params.key, navigation)}></Button>
                        <View style={globalStyles.cancelButtonContainer}>
                            <Button text={"Cancel"} textColor={'black'} backgroundColor={'#ff5f5f'}
                                    onPress={context.cancelGroupMember}></Button>
                        </View>
                    </View>
                </View>
            </TouchableWithoutFeedback>
        )
    }
}
