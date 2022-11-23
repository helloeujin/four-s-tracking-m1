import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Detail from "../screens/Profile";
import Profile from "../screens/Profile";

const Nav = createNativeStackNavigator();

const Stack = () => {
  return (
    <Nav.Navigator>
      <Nav.Screen name="Profile" component={Profile} />
    </Nav.Navigator>
  );
};

export default Stack;
