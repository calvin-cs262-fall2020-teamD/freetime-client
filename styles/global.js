import {StyleSheet} from "react-native";

export const globalStyles = StyleSheet.create({
    container: {
        flex: 1,
    },

    titleText: {
        textAlign: "center",
        fontSize: 16,
        fontWeight: 'bold',
        color: "#333",
        marginTop: 5,
        padding: 5,
    },

    leftIconContainer: {
        marginLeft: 6,
        marginRight: 6,
    },

    rightIconContainer: {
        flexDirection: 'row',
        marginTop: 6,
        marginLeft: 6,
        marginRight: 6,
    },

    // groups.js and groupsSettings.js
    textInput: {
        justifyContent: 'center',
        margin: 5,
        padding: 10,
        borderColor: 'black',
        borderWidth: 2,
        borderRadius: 5,
        backgroundColor: 'white',
    },

    cancelButtonContainer: {
        flex: 1,
        justifyContent: 'flex-end',
    },

    headerBackTitleStyle: {
        color: "#00AAFF",
        textShadowColor: "black",
        textShadowOffset: {width: -2, height: 2},
        textShadowRadius: 3,
        padding: 2,
    },

    listContainer: {
        flex: 1,
        width: "90%",
        alignSelf: "center",
    },

    moduleHeader: {
        flex: 1,
        justifyContent: "space-around",
        backgroundColor: "#70cefa",
        borderColor: "black",
        borderWidth: 1.5,
        borderRadius: 5,
        elevation: 5,
        shadowOffset: {width: -.5, height: .5},
        shadowColor: "#333",
        shadowOpacity: 0.3,
        shadowRadius: 3,
        margin: 3,
        marginTop: 15,
        padding: 15,
    },

    moduleHeaderText: {
        alignSelf: "center",
        fontSize: 20,
        shadowOffset: {width: -.5, height: .5},
        shadowColor: "white",
        shadowOpacity: .6,
        shadowRadius: 3,
    },

    loadingText: {
        textAlign: "center",
        color: "#70cefa",
        fontSize: 20,
        margin: 5,
    }
});
