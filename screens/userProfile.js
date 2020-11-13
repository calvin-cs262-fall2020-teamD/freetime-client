/*
 This file includes the implementation for the user's profile, which displays their name,
 username, and allows them to select interests
 Last updated: 10/29/2020

 Current Issues:
 - Touchable Opacity messes up formatting
 - Name, username, initials are placeholders
 - If top list is too full, bottom list is pushed down
 - General UI polishing needed
 - Interests reset when you leave the page
  */

import React, { useState } from "react";
import {
    FlatList,
    StyleSheet,
    TouchableOpacity,
    Text,
    View,
} from "react-native";
import { globalStyles } from "../styles/global";
import Card from "../components/card";

import { useUserContext } from "../context/userContext";

export default function Profile() {
    const context = useUserContext();

    return (
        <View style={globalStyles.container}>
        <View style={styles.userInitialsCircle}>
            <Text style={styles.initials}>{context.userInitials}</Text>
        </View>
        <Text style={styles.nameTitle}>{context.name}</Text>
        <Text style={globalStyles.titleText}>My Interests:</Text>
        <View>
            <FlatList
            key={"_"} // essential for multiple columns in a FlatList, not sure why
            data={context.userSelectedInterests}
            numColumns={2}
            scrollEnabled={true}
            renderItem={({ item }) => (
                <TouchableOpacity
                style={styles.interestContainer}
                onPress={() => context.pressHandlerRemove(item.key, item.title)}
                >
                <Text style={styles.interestCard}>{item.title}</Text>
                </TouchableOpacity>
            )}
            />
        </View>
        <Text style={globalStyles.titleText}>Choose Interests:</Text>
        <FlatList
            key={"__"}
            data={context.interests}
            numColumns={2}
            scrollEnabled={true}
            renderItem={({ item }) => (
            <TouchableOpacity
                style={styles.interestContainer}
                onPress={() => context.pressHandlerAdd(item.key, item.title)}
            >
                <Text style={styles.interestCard}>{item.title}</Text>
            </TouchableOpacity>
            )}
        />
        </View>
    );
}

const styles = StyleSheet.create({
    userInitialsCircle: {
        width: 100,
        height: 100,
        borderRadius: 100 / 2,
        justifyContent: "center",
        alignSelf: "center",
        backgroundColor: "lightgray",
        top: 20,
    },

    initials: {
        padding: 20,
        fontSize: 40,
        alignSelf: "center",
    },

    nameTitle: {
        padding: 15,
        top: 12,
        alignSelf: "center",
        fontSize: 30,
    },

    interestCard: {
        alignSelf: "center",
        width: "99%",
        borderWidth: 2,
        borderRadius: 5,
        padding: 10,
        marginVertical: 3,
        marginHorizontal: 5,
        textAlign: "center",
        backgroundColor: "springgreen",
    },

    interestContainer: {
        width: "50%",
    },
});
