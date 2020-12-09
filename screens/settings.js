import React from "react";
import {
    View,
    StyleSheet,
    Text,
    ActivityIndicator,
} from "react-native";
import {globalStyles} from "../styles/global";

import {useUserContext} from "../context/userContext";

import Button from "../components/button";

export default function Settings({navigation}) {
    const context = useUserContext();

    if (!context.loading) {
        return (
            <View style={globalStyles.container}>
                <Button text={"About FreeTime"} backgroundColor={"#70cefa"} textColor={"green"}
                        onPress={() => navigation.navigate("About")}></Button>
                <Button text={"Delete Week Times"} backgroundColor={"#70cefa"} textColor={"white"}
                        onPress={() => context.resetWeekDays(navigation)}></Button>
            </View>
        );
    } else {
        return (
            <View style={{flex: 1, justifyContent: 'center'}}>
                <Text style={globalStyles.loadingText}>Deleting your FreeTimes...</Text>
                <ActivityIndicator size="large" color="#70cefa"></ActivityIndicator>
            </View>
        )
    }
}

const styles = StyleSheet.create({});
