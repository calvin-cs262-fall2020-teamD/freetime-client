import React, { useState } from "react";
import { View, StyleSheet, Text, TouchableOpacity, Button, ImageBackground, TouchableWithoutFeedback, Keyboard } from "react-native";
import { globalStyles } from "../styles/global";
import { LinearGradient } from 'expo-linear-gradient';
import { TextInput } from "react-native-gesture-handler";
import bgImg from '../assets/calvinWalkway2.jpg'
import { useScreens } from "react-native-screens";
import { NavigationActions } from "react-navigation";

const authenticate = (navigation, name, userPassword) => {
  // Temporary authenticate code
  navigation.navigate("TabNavigator", {}, NavigationActions.navigate({routeName: "UserWeek"}));

  let valid = false;
  //Fetch data

  //This would probably be the DB query we use later
  // SELECT password
  // FROM User
  // WHERE name = username
  // AND userPassword = usrPassword
  // //Then set some variable to true

  //TEMP -- REMOVE LATER
  valid = true;

  if(valid) {
    //Navigate into the app
  } else {
    //Send message INVALID username or password
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
  return (
    <ImageBackground style={styles.container} imageStyle={styles.backgroundImg} source={bgImg}>
      <TouchableWithoutFeedback onPress={() => {
        Keyboard.dismiss();
      }}>
        <LinearGradient
          colors={['rgba(0,170,255,1)', 'rgba(119,255,250,.7)' ]}
          style={styles.linearGradient}>
          <View style={styles.loginBox}>
            <Text style={styles.title}>Login</Text>
            <TextInput style={styles.inputBox} value={usernameValue} placeholder={"Enter username"} onChangeText={text => onChangeUsernameText(text)}/>
            <TextInput style={styles.inputBox} value={passwordValue} placeholder={"Enter password"} onChangeText={text => onChangePasswordText(text)}/>
            <TouchableOpacity style={styles.technicallyNotAButton} onPress={() => /*navigation.navigate("UserWeek")*/ authenticate(navigation, usernameValue, passwordValue)}>
              <Text>Submit</Text>
            </TouchableOpacity>

            <Text style={styles.options}> Forgot Password... </Text>
            {/* <Text style={styles.options}> Sign up </Text> */}
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
    justifyContent: 'center',
    width: '100%',
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
    padding: 30,
  },
  inputBox: {
    // borderColor: 'black',
    height: 30,
    // borderWidth: 1,
    backgroundColor: 'rgba(255,255,255,.8)',
    borderRadius: 10,
    margin: 5,
    marginLeft: 0,
    paddingLeft: 4,
  },
  technicallyNotAButton: {
    backgroundColor: 'rgba(255,255,255,.8)',
    color: 'black',
    alignItems: 'center',
    width: '50%',
    padding: 3,
    borderRadius: 15,
    // borderColor: 'gray',
    // borderWidth: 1,
    margin: 'auto',
  },
  options: {
    //Make side-by-side
  },
})