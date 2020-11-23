import { StyleSheet } from "react-native";

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
    //textDecorationLine: 'underline',
  },

  iconContainer: {
    marginLeft: 6,
    marginRight: 6,
  },

  // groups.js and groupsSettings.js
  textInput: {
    justifyContent: 'center',
    margin: 10,
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
    textShadowOffset: { width: -2, height: 2 },
    textShadowRadius: 3,
    padding: 2,
  }
});
