/*
 This file includes the implementation for the user's profile, which displays their name,
 username, and allows them to select interests
*/
import React from "react";
import {
    FlatList,
    StyleSheet,
    TouchableOpacity,
    Text,
    View,
} from "react-native";
import {globalStyles} from "../styles/global";

import {useUserContext} from "../context/userContext";

export default function Profile() {
    const context = useUserContext();

    // Displays your User Profile
    return (
        <View style={globalStyles.container}>
            <View style={styles.userInitialsCircle}>
                <Text style={styles.initials}>{context.userInitials}</Text>
            </View>
            <Text style={styles.nameTitle}>{context.userName}</Text>
            <Text style={globalStyles.titleText}>My Interests:</Text>
            <View>
                <FlatList
                    key={"_"}
                    data={context.userSelectedInterests}
                    numColumns={2}
                    scrollEnabled={true}
                    renderItem={({item}) => (
                        <TouchableOpacity
                            style={styles.interestContainer}
                            onPress={() => context.pressHandlerRemove(item.id, item.interestname, context.userID)}
                        >
                            <Text style={styles.interestCard}>{item.interestname}</Text>
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
                renderItem={({item}) => (
                    <TouchableOpacity
                        style={styles.interestContainer}
                        onPress={() => context.pressHandlerAdd(item.id, item.interestname, context.userID)}
                    >
                        <Text style={styles.interestCard}>{item.interestname}</Text>
                    </TouchableOpacity>
                )}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    userInitialsCircle: {
        width: 80,
        height: 80,
        borderRadius: 100 / 2,
        justifyContent: "center",
        alignSelf: "center",
        backgroundColor: "lightgray",
        top: 20,
    },

    initials: {
        padding: 10,
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
        backgroundColor: "#70cefa",
    },

    interestContainer: {
        width: "50%",
    },
});
