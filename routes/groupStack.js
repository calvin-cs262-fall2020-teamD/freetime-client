import React from "react";
import {createStackNavigator} from "@react-navigation/stack";

import groups from "../screens/groups";
import group from "../screens/group";
import groupSettings from "../screens/groupSettings";

const Stack = createStackNavigator();

export default function GroupStack() {
    return (
        <Stack.Navigator
            screenOptions={{
                headerStyle: {
                    backgroundColor: "#ddd",
                },
            }}
        >
            <Stack.Screen
                name="Groups"
                component={groups}
                options={{
                    title: "Groups", headerTitleAlign: 'center', headerLeft: () => {
                    }, gestureEnabled: false
                }}
            />

            <Stack.Screen
                name="Group"
                component={group}
                options={{title: 'Group', headerTitleAlign: 'center', gestureEnabled: false}}
            />

            <Stack.Screen
                name="GroupSettings"
                component={groupSettings}
                options={{title: 'Group Settings', headerTitleAlign: 'center', gestureEnabled: false}}
            />

        </Stack.Navigator>
    );
}
