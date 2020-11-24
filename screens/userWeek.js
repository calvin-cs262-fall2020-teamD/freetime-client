import React, {useState} from "react";
import {
    View,
    StyleSheet,
    Text,
    FlatList,
    TouchableOpacity,
} from "react-native";
import {globalStyles} from "../styles/global";
import Card from "../components/card";

import {useUserContext} from "../context/userContext";

export default function UserWeek({navigation}) {
    const context = useUserContext();

    return (
        <View style={globalStyles.container}>
            <View style={styles.listContainer}>
                <FlatList
                    data={context.weekDays}
                    renderItem={({item}) => (
                        <View style={styles.weekDayHeader}>
                            <TouchableOpacity
                                onPress={() => navigation.navigate("UserTimes", item)}
                            >
                                <Text style={styles.weekDayHeaderText}>{item.day}</Text>
                                <View style={styles.weekDayBox}>
                                    <Text></Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    )}
                    scrollEnabled={true}
                    showsVerticalScrollIndicator={false}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    userWeekContainer: {
        backgroundColor: "white",
        borderColor: "#70cefa",
        borderWidth: 1.5,
        borderRadius: 5,
        marginBottom: 5,
        padding: '3%',
        width: "50%",
        height: "99%",
    },

    listContainer: {
        flex: 1,
        width: "90%",
        alignSelf: "center",
    },

    weekDayHeader: {
        flex: 1,
        justifyContent: "space-around",
        backgroundColor: "#70cefa",
        borderColor: "black",
        //borderBottomColor: "#70cefa",
        borderWidth: 1.5,
        borderRadius: 5,
        elevation: 5,
        shadowOffset: {width: -.5, height: .5},
        shadowColor: "#333",
        shadowOpacity: 0.3,
        shadowRadius: 3,
        margin: 3,
        marginTop: 30,
        paddingTop: 19,
    },

    weekDayHeaderText: {
        alignSelf: "center",
        fontSize: 20
    },

    weekDayBox: {
        flex: 1,
        backgroundColor: "#EEE",
        borderWidth: 1.5,
        borderRadius: 5,
        borderColor: "#70cefa",
        borderBottomColor: "transparent",
        elevation: 5,
        margin: 10,
        marginBottom: 1,
        height: 125,

    }
});
