import React, { useEffect, useState } from "react";
import { View, StyleSheet, Text, TouchableOpacity, Alert, ImageBackground, TouchableWithoutFeedback, Keyboard } from "react-native";
import { globalStyles } from "../styles/global";
import { LinearGradient } from 'expo-linear-gradient';
import { TextInput } from "react-native-gesture-handler";
import bgImg from '../assets/calvinWalkway2.jpg'
import { useScreens } from "react-native-screens";
import { NavigationActions } from "react-navigation";
import { useUserContext } from "../context/userContext";

async function authenticate(navigation, name, userPassword, context) {
  let data = [];
  let id = 0;
  //Fetch list of all users (not including passwords)
  await fetch("https://freetime-service.herokuapp.com/Users")
    .then((response) => response.json())
    .then((json) => data = json)
    .catch((error) => "")

  //Get the ID of the correct user
  for(let i = 0; i < data.length; i++) {
    if(data[i].username == name) {
      id = data[i].id;
      break;
    }
  }
  //Get the password of that user
  await fetch(`https://freetime-service.herokuapp.com/Pass/${id}`)
    .then((response) => response.json())
    .then((json) => data = json)
    .catch((error) => "")

  //Check if inputted password matches
  if(userPassword == data.userpassword) {
    context.setUserInitials(name.slice(0, 1));
    context.setUsername(name);
    navigation.navigate("TabNavigator", {}, NavigationActions.navigate({routeName: "UserWeek"}));
  } else {
    Alert.alert("Invalid username or password");
  }
};

const forgotPassword = () => {
  //Move to password re-do screen
  //This'll be a future thing
};

const signUp = () => {
  //move to signup screen?
}

export default function Login({ navigation }) {
  const [usernameValue, onChangeUsernameText] = React.useState('');
  const [passwordValue, onChangePasswordText] = React.useState('');
  const context = useUserContext();

  return (
    <ImageBackground style={styles.container} imageStyle={styles.backgroundImg} source={bgImg}>
      <TouchableWithoutFeedback onPress={() => {
        Keyboard.dismiss();
      }}>
        <LinearGradient
          colors={['#70cefa', 'rgba(250,250,250,.78)' ]} //rgba(119,255,250,.7)
          style={styles.linearGradient}>
          <View style={styles.loginBox}>
            <Text style={styles.title}>Login</Text>
            <TextInput style={styles.inputBox} value={usernameValue} placeholder={"Enter username"} onChangeText={text => onChangeUsernameText(text)}/>
            <TextInput style={styles.inputBox} value={passwordValue} placeholder={"Enter password"} onChangeText={text => onChangePasswordText(text)}/>
            <TouchableOpacity style={styles.technicallyNotAButton} onPress={() => authenticate(navigation, usernameValue, passwordValue, context)}>
              <Text>Submit</Text>
            </TouchableOpacity>

            <Text style={styles.options} onPress={forgotPassword}> Forgot Password... </Text>
            <Text style={styles.options} onPress={signUp}> Sign Up </Text>
          </View>
        </LinearGradient>
      </TouchableWithoutFeedback>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  backgroundImg: {
    resizeMode: 'cover',
    position: 'absolute',
  },
  linearGradient: {
    flex: 1,
    alignItems: 'center',
    //justifyContent: 'center',
    width: '100%',
    paddingTop: 110, // Made it so that the keyboard can be shown and not cover the input box
    borderTopWidth: 1,
    borderTopColor: 'black',
  },
  title: {
    fontSize: 25,
    paddingBottom: 5,
    marginBottom: 2,
    borderBottomColor: 'black',
    borderBottomWidth: 1,
  },
  loginBox: {
    width: '60%',
    backgroundColor: 'rgba(255,255,255,.5)',
    padding: 25,
  },
  inputBox: {
    // borderColor: 'black',
    height: 30,
    // borderWidth: 1,
    backgroundColor: 'rgba(255,255,255,.8)',
    borderRadius: 10,
    margin: 5,
    marginLeft: 0,
    marginBottom: 5,
    paddingLeft: 4,
  },
  technicallyNotAButton: {
    backgroundColor: 'rgba(255,255,255,.8)',
    color: 'black',
    alignItems: 'center',
    width: '45%',
    padding: 3,
    borderRadius: 10,
    // borderColor: 'gray',
    // borderWidth: 1,
    margin: 3,
    marginBottom: 5
  },
  options: {
    fontSize: 11,
    //Make side-by-side
  },
})
