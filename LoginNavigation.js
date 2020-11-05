import React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import Navigator from "./routes/loginStack";

export default function LoginNavigation(props) {
  return (
    <NavigationContainer>
      <Navigator props={props.setLoggedIn}></Navigator>
    </NavigationContainer>
  )
}