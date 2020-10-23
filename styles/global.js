import { StyleSheet } from "react-native";

export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
  },

  titleText: {
    textAlign: "center",
    fontSize: 18,
    fontWeight: 'bold',
    color: "#333",
    padding: 5,
    textDecorationLine: 'underline',
  },

  iconContainer: {
    marginLeft: 6,
    marginRight: 6,
  },

  buttonContainer: {
    backgroundColor: "#00AAFF",
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 5,
    margin: 5,
  },

  buttonText: {
    textAlign: "center",
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
    padding: 5,
  },
});
