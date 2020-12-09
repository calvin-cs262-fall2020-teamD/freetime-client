import React from "react";
import {StyleSheet, Text, View} from "react-native";
import {RFPercentage} from "react-native-responsive-fontsize"

export default function TimeBox({item}) {
    let timeString = "";
    let stringOffset = "";
    let twelveHrTime;
    if (item.hour > 12) {
        twelveHrTime = +item.hour - 12
    } else if (item.hour == 0) {
        twelveHrTime = 12
    } else twelveHrTime = item.hour;
    if (item.key == 0) {
        timeString = `${stringOffset}${twelveHrTime}:00 - ${twelveHrTime}:15`;
    } else if (item.key == 3) {
        if (twelveHrTime == 12) {
            timeString = `${stringOffset}${twelveHrTime}:${item.key * 15} - 1:00`
        } else {
            timeString = `${stringOffset}${twelveHrTime}:${item.key * 15} - ${+twelveHrTime + 1}:00`
        }
    } else {
        timeString = `${stringOffset}${twelveHrTime}:${item.key * 15} - ${twelveHrTime}:${(+item.key + 1) * 15}`
    }
    return (
        <View style={styles.timeBox} backgroundColor={item.color}>
            <Text style={styles.timeText}>{timeString}</Text>
        </View>
    )

}

const styles = StyleSheet.create({
    timeBox: {
        flex: 1,
        width: RFPercentage(11.75),
        flexDirection: "row",
        borderColor: "black",
        borderWidth: .5,
        paddingTop: 10,
        paddingLeft: 5,
        paddingRight: 5,
    },
    timeText: {
        color: "gray",
        marginTop: 0,
        fontSize: RFPercentage(1.12),
    }
});
