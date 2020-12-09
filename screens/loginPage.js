import React, { useEffect, useState } from "react";
import { View, StyleSheet, Text, TouchableOpacity, Alert, ImageBackground, TouchableWithoutFeedback, Keyboard, ActivityIndicator } from "react-native";
import { globalStyles } from "../styles/global";
import { LinearGradient } from 'expo-linear-gradient';
import { TextInput } from "react-native-gesture-handler";
import bgImg from '../assets/calvinWalkway2.jpg'
import { NavigationActions } from "react-navigation";
import { useUserContext } from "../context/userContext";
import Dialog from 'react-native-dialog'; //https://www.npmjs.com/package/react-native-dialog
import { MaterialIcons } from "@expo/vector-icons";
import { useGroupContext } from "../context/groupContext";

async function authenticate(navigation, name, userPassword, userContext, groupContext, setIsLoaded) {
  setIsLoaded(false);

  let data = [];
  let id = 0;
  //Fetch list of all users (not including passwords)
  await fetch("https://freetime-service.herokuapp.com/Users")
    .then((response) => response.json())
    .then((json) => data = json)
    .catch((error) => console.log(error))

  groupContext.setUsers(data);
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
    .catch((error) => console.log(error))

  //Check if inputted password matches
  if(userPassword == data.userpassword) {

    let userFreeTimes = [];
    await fetch(`https://temp-freetime-service.herokuapp.com/getfreetimes`)
      .then((response) => response.json())
      .then((json) => userFreeTimes = json)
      .catch((error) => console.log(error))

    let userInterests = [];
    await fetch(`https://freetime-service.herokuapp.com/User/Interests`)
      .then((response) => response.json())
      .then((json) => userInterests = json)
      .catch((error) => console.log(error))

    let interests = [];
    await fetch(`https://freetime-service.herokuapp.com/Interests`)
      .then((response) => response.json())
      .then((json) => interests = json)
      .catch((error) => console.log(error))

    let userGroups = [];
    await fetch(`https://freetime-service.herokuapp.com/User/Groups`)
      .then((response) => response.json())
      .then((json) => userGroups = json)
      .catch((error) => console.log(error))

    let userGroupsMembers = [];
    await fetch(`https://freetime-service.herokuapp.com/User/Groups/Members`)
      .then((response) => response.json())
      .then((json) => userGroupsMembers = json)
      .catch((error) => console.log(error))

    //fetch person's freetimes and modify list

    userContext.setUserID(id);
    userContext.setUserInitials(name.slice(0, 1));
    userContext.setUsername(name);
    userFreeTimes = userFreeTimes.filter((freetime) => freetime.userid == id);
    console.log(userFreeTimes);
    // userContext.setWeekDays(() => {
    //   userContext.weekDays.forEach((userDay) => {
    //     userFreeTimes.forEach((userFreeTime) => {
    //       if(userDay.day == userFreeTime.weekday) {
    //         userDay.freeTimes.forEach((userDayFreeTime) => {
    //           let beginning = userFreeTime.starttime.split(",");
    //           let beginningHour = Number(beginning[0]);
    //           let beginningIncrement = Number(beginning[1]);
    //           let end = userFreeTime.endtime.split(",");
    //           let endHour = Number(end[0]);
    //           let endIncrement = Number(end[1]);
    //           for(let i = 0; i <= (endHour - beginningHour); i++) {
    //             if(userDayFreeTime.key == i+beginningHour) {
    //               for(let j = 0; j <= (endIncrement - beginningIncrement); j++) {
    //                 userDayFreeTime.increments.forEach((userFreeTimeIncrement) => {
    //                   if(userFreeTimeIncrement.key == (j+beginningIncrement)) {
    //                     userFreeTimeIncrement.color = "#00E600";
    //                   }
    //                 })
    //               }
    //             }
    //           }
    //         })
    //       }
    //     })
    //   })
    //   return userContext.weekDays;
    // })
    // userContext.setWeekDays(() => {
    //   userContext.weekDays.forEach((userDay) => {
    //     userFreeTimes.forEach((userFreeTime) => {
    //       if(userDay.day == userFreeTime.weekday) {
    //         userDay.freeTimes.forEach((userDayFreeTime) => {
    //           userDayFreeTime.increments.forEach((userFreeTimeIncrement) => {
    //           let beginning = userFreeTime.starttime.split(",");
    //           let beginningHour = Number(beginning[0]);
    //           let beginningIncrement = Number(beginning[1]);
    //           let end = userFreeTime.endtime.split(",");
    //           let endHour = Number(end[0]);
    //           let endIncrement = Number(end[1]);
    //           for(let i = 0; i <= (endHour - beginningHour); i++) {

    //               for(let j = 0; j <= (endIncrement - beginningIncrement); j++) {

    //                   if(userDayFreeTime.key == i+beginningHour) {
    //                   if(userFreeTimeIncrement.key == (j+beginningIncrement)) {
    //                     userFreeTimeIncrement.color = "#00E600";
    //                   }
    //                 }


    //               }

    //           }
    //         })
    //         })
    //       }
    //     })
    //   })
    //   return userContext.weekDays;
    // })
    // userContext.setWeekDays(() => {
    //   userContext.weekDays.forEach((userDay) => {
    //     userFreeTimes.forEach((userFreeTime) => {
    //       if(userDay.day == userFreeTime.weekday) {
    //         for(let i = 0; i < userDay.freeTimes.length; i++) {
    //           let beginning = userFreeTime.starttime;
    //           console.log("starttime" + beginning);
    //           let end = userFreeTime.endtime;
    //           // end = end[0] + "," + (Number(end[1])+1);
    //           console.log("endtime" + end);
    //           console.log("length" + userDay.freeTimes[i].increments.length)
    //           let range = (4*(end.split(",")[0] - beginning.split(",")[0])) + (end.split(",")[1] - beginning.split(",")[1]);
    //           if(Math.sign((end.split(",")[1] - beginning.split(",")[1])) == 0 || Math.sign((end.split(",")[1] - beginning.split(",")[1])) == 1) {
    //             range+=1;
    //           } else {
    //             range-=1;
    //           }
    //           console.log(range);
    //           let increment = 1;
    //           for(let j = 0; j < /*userDay.freeTimes[i].increments.length*/range; j++) {
    //             if((userDay.freeTimes[i].key + "," + userDay.freeTimes[i].increments[j%4].key == beginning && userDay.freeTimes[i].key + "," + userDay.freeTimes[i].increments[j%4].key != end)) {
    //               console.log(beginning);
    //               console.log(userDay.freeTimes[i].key + "," + userDay.freeTimes[i].increments[j%4].key);
    //               console.log(end);

    //               beginning = `${i},${(j+1)%4}`;
    //               console.log(beginning);
    //               userDay.freeTimes[i].increments[j%4].color = "#00E600";
    //               if((j) == 3) {
    //                 beginning = `${i},${(j+1)%4}`;
    //                 i+=1;
    //                 userDay.freeTimes[i+increment].increments[(j+1)%4].color = "#00E600";
    //                 increment+=1;
    //                 console.log("wrap" + beginning);
    //               }
    //             } else if(beginning == end) {
    //               //i+=1;
    //               userDay.freeTimes[i].increments[j%4].color = "#00E600";
    //             } else {
    //               //beginning = `${i+1},${j%4}`;
    //               console.log("else");
    //             }
    //           }
    //         }
    //       }
    //     })
    //   })
    //   return userContext.weekDays;
    // })
    userContext.setInterests(interests);
    for (let interest of userInterests) {
      if(interest.userid == id) {
        userContext.pressHandlerAdd(interest.id.toString(), interest.interestname);
      }
    }
    for (let group of userGroups) {
      if(group.memberid == id) {
        let groupMembers = [];
        for(let member of userGroupsMembers) {
          if(member.groupname == group.groupname && member.memberid != group.adminid) {
            groupMembers.push(member);
          }
        }
        groupContext.setGroups((prevGroups) => {
          return [{ groupname: group.groupname, groupMembers: groupMembers, adminUser: group.username, key: group.groupid.toString() }, ...prevGroups];
        });
      }
    }

    navigation.navigate("TabNavigator", {}, NavigationActions.navigate({routeName: "UserWeek"}));
  } else {
    setIsLoaded(true);
    Alert.alert("Invalid username or password");
  }

};

const forgotPassword = () => {

};

const createUser = (name, pass) => {
  const data = {username: name, userPassword: pass };
  fetch(`https://freetime-service.herokuapp.com/createuser`, {
    method: "POST",
    body: JSON.stringify(data),
    headers: {"Content-type": "application/json"}
  })
  .then((response) => response.text())
  .then((json) => json)
  .catch((error) => console.log(error))
}

export default function Login({ navigation }) {
  const [isLoaded, setIsLoaded] = useState(true);
  const [usernameValue, onChangeUsernameText] = React.useState('');
  const [passwordValue, onChangePasswordText] = React.useState('');
  const [confirmPasswordValue, onChangeConfirmPasswordText] = React.useState('x');
  const [visible, setVisible] = React.useState(false);
  const userContext = useUserContext();
  const groupContext = useGroupContext();

  async function validateSignup() {
    //Checking if username is already taken (this is only within the login function so that it easily has access to setVisible())
    let data = [];
    await fetch("https://freetime-service.herokuapp.com/Users")
      .then((response) => response.json())
      .then((json) => data = json)
      .catch((error) => console.log(error))
    let duplicateExists = false;
    // console.log(name);
    for(let i = 0; i < data.length; i++) {
      // console.log(data[i].username);
      if(data[i].username == usernameValue) {
        // console.log("in if");
        duplicateExists = true;
        break;
      }
    }
    if(duplicateExists) {
      Alert.alert("Username already taken")
    }
    else {
      createUser(usernameValue, passwordValue);
      Alert.alert("Success!!!");
    }
    setVisible(duplicateExists);
  }

  if (isLoaded) {
    return (
      <ImageBackground style={styles.container} imageStyle={styles.backgroundImg} source={bgImg}>
        <TouchableWithoutFeedback onPress={() => {
          Keyboard.dismiss();
        }}>
          <LinearGradient
            colors={['#70cefa', 'rgba(250,250,250,.78)' ]}
            style={styles.linearGradient}>
            <View style={styles.loginBox}>
              <Text style={styles.title}>Login</Text>
              <TextInput style={styles.inputBox} value={usernameValue} placeholder={"Enter username"} onChangeText={text => onChangeUsernameText(text)}/>
              <TextInput secureTextEntry={true} style={styles.inputBox} value={passwordValue} placeholder={"Enter password"} onChangeText={text => onChangePasswordText(text)}/>
              <TouchableOpacity style={styles.technicallyNotAButton} onPress={() => authenticate(navigation, usernameValue, passwordValue, userContext, groupContext, setIsLoaded)}>
                <Text>Submit</Text>
              </TouchableOpacity>
                <Text style={styles.options} onPress={forgotPassword}> Forgot Password... </Text>
              <Text style={styles.options} onPress={() => setVisible(true)}> Create Account </Text>
            </View>
            <View>
              <Dialog.Container visible={visible} onBackdropPress={() => setVisible(false)}>
                <TouchableOpacity onPress={() => setVisible(false)} style={styles.closeIcon}>
                  <MaterialIcons name="close" color={'black'} size={30} />
                </TouchableOpacity>
                <Dialog.Title>Create Account</Dialog.Title>
                <Dialog.Description>Welcome to Freetime!</Dialog.Description>
                <Dialog.Input label={"Create a username:"} placeholder={"Username"} onChangeText={text => onChangeUsernameText(text)}></Dialog.Input>
                <Dialog.Input secureTextEntry={true} label={"Create a password:"} placeholder={"Password"} onChangeText={text => onChangePasswordText(text)}></Dialog.Input>
                <Dialog.Input secureTextEntry={true} label={"Confirm password:"} placeholder={"Password"} onChangeText={text => onChangeConfirmPasswordText(text)}></Dialog.Input>
                <Dialog.Button
                  style={styles.submitButton}
                  label={"Sign Up"}
                  onPress={() => (passwordValue == confirmPasswordValue ? validateSignup() : Alert.alert("Passwords don't match")) }>
                </Dialog.Button>
              </Dialog.Container>
            </View>
          </LinearGradient>
        </TouchableWithoutFeedback>
      </ImageBackground>
    );
  } else {
    return (
      <View style={{flex: 1, justifyContent: 'center'}}>
        <Text style={globalStyles.loadingText}>Loading please wait...</Text>
        <ActivityIndicator size="large" color="#70cefa"></ActivityIndicator>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  closeIcon: {
    right: 0,
    padding: 2,
    margin: 5,
    position: "absolute",

  },
  submitButton: {
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,.2)',
  },
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
    padding: 8,
    borderRadius: 10,
    // borderColor: 'gray',
    // borderWidth: 1,
    margin: 8,
    marginLeft: 1.5,
    marginBottom: 7.5,
  },
  options: {
    fontSize: 13,
    //Make side-by-side
  },

  loading: {
    justifyContent: "center",
    alignItems: 'center',
  }
})
