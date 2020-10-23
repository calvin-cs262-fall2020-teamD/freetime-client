import * as React from 'react';
import { Button, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

import userStack from "../routes/userStack";
import groupStack from "../routes/groupStack";

const Drawer = createDrawerNavigator();

export default function DrawerNavigator() {
    return (

        <Drawer.Navigator>

        </Drawer.Navigator>
    );
};
