import React from "react";
import {
    StyleSheet,
    View,
    Text,
} from "react-native";
import {globalStyles} from "../styles/global";

//import { useUserContext } from "../context/userContext";

export default function About({navigation}) {
    return (
        <View style={globalStyles.container}>
            <Text style={globalStyles.titleText}>FreeTime</Text>
            <Text style={styles.text}>     The purpose of our app is to help busy groups of students easily find a time to
                get together despite their differing schedules. This is an issue especially for large groups of people
                such as a dorm floor. When everybody simply posts their availability into a group chat, coordinating a
                meeting can be overwhelming or near impossible.</Text>
            <Text></Text>
            <Text style={styles.text}>     In our app, students can input their general weekly availability into a
                user-friendly GUI and join/create a group(s) for a dorm floor, friend group, sports team, etc. The app
                will then calculate the best time for an activity based on the collective availability. Partial overlaps
                of free times will also be calculated. Furthermore, group creators will be able to add events and give
                them descriptive tags, timeframes, as well as who is allowed/invited to the event. There will be both
                pre-determined and custom event-tags.</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    text: {
        marginLeft: 5,
        justifyContent: 'space-around',
    }
});
