import React from "react";
import {
    View,
    TouchableOpacity,
    Text,
} from "react-native";
import {MaterialIcons} from "@expo/vector-icons";
import Dialog from 'react-native-dialog'; //https://www.npmjs.com/package/react-native-dialog
import {createStackNavigator} from "@react-navigation/stack";

import UserWeek from "../screens/userWeek";
import UserTimes from "../screens/userTimes";
import Settings from "../screens/settings";
import Profile from "../screens/userProfile";
import About from "../screens/about";
import {globalStyles} from "../styles/global";

const Stack = createStackNavigator();

export default function UserStack({navigation}) {
    const [visible, setVisible] = React.useState(false);
    return (
        <Stack.Navigator initialRouteName={"UserWeek"}
                         screenOptions={{
                             headerStyle: {
                                 backgroundColor: "#ddd",
                             },
                         }}
        >
            <Stack.Screen
                name="UserWeek"
                component={UserWeek}
                options={{
                    title: "User Week", headerTitleAlign: 'center', headerRight: () =>
                        <View style={globalStyles.container}>
                            <View style={globalStyles.rightIconContainer}>
                                <TouchableOpacity style={{marginRight: 60}}onPress={() => setVisible(true)}>
                                    <MaterialIcons name='help' size={32} color="black" />
                                </TouchableOpacity>
                                <Dialog.Container visible={visible} onBackdropPress={() => setVisible(false)}>
                                    <Dialog.Title style={globalStyles.helpHeader}>User Week Help</Dialog.Title>
                                    <Dialog.Description style={globalStyles.helpDescription}>• Press a Day Card to enter FreeTimes.</Dialog.Description>
                                    <Dialog.Description style={globalStyles.helpDescription}>• Press the Profile icon to access your profile.</Dialog.Description>
                                    <Dialog.Description style={globalStyles.helpDescription}>• Press the Settings icon to access User Week's settings.</Dialog.Description>
                                    <Dialog.Description style={globalStyles.helpDescription}>• In settings you can learn about our app FreeTime.</Dialog.Description>
                                    <Dialog.Description style={globalStyles.helpDescription}>• In settings you can delete all your Week's FreeTimes.</Dialog.Description>
                                </Dialog.Container>
                                <TouchableOpacity onPress={() => navigation.navigate("Settings")}>
                                    <MaterialIcons name='settings' size={32} color="black"/>
                                </TouchableOpacity>
                            </View>
                        </View>,
                    headerLeft: () =>
                        <TouchableOpacity onPress={() => navigation.navigate("Profile")}>
                            <View style={globalStyles.leftIconContainer}>
                                <MaterialIcons name='account-circle' size={33} color="black"/>
                            </View>
                        </TouchableOpacity>,
                    gestureEnabled: false
                }}
            />

            <Stack.Screen
                name="UserTimes"
                component={UserTimes}
                options={{title: "User Times", headerTitleAlign: 'center', gestureEnabled: false}}
            />

            <Stack.Screen
                name="Settings"
                component={Settings}
                options={{title: "Settings", gestureEnabled: false}}
            />

            <Stack.Screen
                name="Profile"
                component={Profile}
                options={{title: "Profile", gestureEnabled: false}}
            />

            <Stack.Screen
                name="About"
                component={About}
                options={{title: "About", gestureEnabled: false}}
            />

        </Stack.Navigator>
    );
}
