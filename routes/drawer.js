import * as React from 'react';
import { Button, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

import Profile from "../routes/userStack";
import Settings from "../routes/userStack";

const Drawer = createDrawerNavigator();

export default function DrawerNavigator() {
    return (
        <Drawer.Navigator>
            {/* <Drawer.Screen name="Profile" component={Profile} />
            <Drawer.Screen name="Settings" component={Settings} /> */}
        </Drawer.Navigator>
    );
};
