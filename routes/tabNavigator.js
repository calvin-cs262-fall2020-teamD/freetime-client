import React from "react";
import {StyleSheet} from "react-native";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {MaterialIcons} from "@expo/vector-icons";

import userStack from "../routes/userStack";
import groupStack from "../routes/groupStack";

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
    return (
        <Tab.Navigator
            initialRouteName="UserWeek"
            tabBarOptions={{
                tabStyle: styles.tabStyle,
                activeTintColor: 'black',
                labelPosition: 'beside-icon',
                activeBackgroundColor: '#33BBFF',
            }}
        >
            <Tab.Screen name="User Week" component={userStack} options={{
                tabBarIcon: ({color, size}) => (
                    <MaterialIcons name="person" color={'black'} size={30}/>
                )
            }}>
            </Tab.Screen>

            <Tab.Screen name="Groups" component={groupStack} options={{
                tabBarIcon: ({color, size}) => (
                    <MaterialIcons name="group" color={'black'} size={30}/>
                )
            }}>
            </Tab.Screen>
        </Tab.Navigator>
    );
}

const styles = StyleSheet.create({
    tabStyle: {
        borderWidth: .75,
    },

    labelStyle: {
        textAlign: "center",
        fontSize: 15,
        marginTop: 12,
    },
});
