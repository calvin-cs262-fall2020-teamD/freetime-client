import React from "react";
import {
    View,
    Text,
    FlatList,
    TouchableOpacity,
} from "react-native";
import {globalStyles} from "../styles/global";

import {useUserContext} from "../context/userContext";

export default function UserWeek({navigation}) {
    const context = useUserContext();

    return (
        <View style={globalStyles.container}>
            <View style={globalStyles.listContainer}>
                <FlatList
                    data={context.weekDays}
                    renderItem={({item}) => (
                        <View style={globalStyles.moduleHeader}>
                            <TouchableOpacity
                                onPress={() => navigation.navigate("UserTimes", item)}
                            >
                                <Text style={globalStyles.moduleHeaderText}>{item.day}</Text>
                                {/* <View style={globalStyles.moduleBox}>
                                    <Text></Text>
                                </View> */}
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
