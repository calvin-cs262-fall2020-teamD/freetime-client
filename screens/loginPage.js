import React, { useState } from "react";
import { View, StyleSheet, Text, TouchableOpacity
} from "react-native";
import { globalStyles } from "../styles/global";
import { LinearGradient } from 'expo-linear-gradient';
import { TextInput } from "react-native-gesture-handler";
import bgImg from '../assets/calvinWalkway2.jpg'

export default function Login() {
  const [value, onChangeText] = React.useState('username');
  return (
    <View style={styles.container}>
      <LinearGradient
          colors={['rgba(0,170,255,1)', 'rgba(119,255,250,.7)' ]}
          style={styles.linearGradient}>
          <Text style={styles.title}>Login</Text>
          <TextInput style={styles.inputBox} value={value} onChangeText={text => onChangeText(text)}/>
      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundImage: `url(${bgImg})`,
  },
  title: {
    fontSize: 30,
  },
  inputBox: {
    borderColor: 'gray',
    height: 30,
    borderWidth: 1,
    borderRadius: 10,
  },
  linearGradient: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
})