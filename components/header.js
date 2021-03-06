import React from "react";
import {StyleSheet, Text, View} from "react-native";

export default function Header() {
    return (
        <View style={styles.headerContainer}>
            <Text style={styles.title}>FreeTime</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    headerContainer: {
        height: 75,
        backgroundColor: "#70cefa",
    },

    title: {
        color: "white",
        textAlign: "center",
        textShadowColor: "black",
        textShadowOffset: {width: -.5, height: .5},
        textShadowRadius: 3,
        paddingTop: 30,
        paddingLeft: 0,
        fontSize: 30,
        fontWeight: "bold",
    },
});

