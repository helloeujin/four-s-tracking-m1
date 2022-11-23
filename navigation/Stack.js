import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Detail from "../screens/Profile";
import Profile from "../screens/Profile";

const StackNav = createNativeStackNavigator();

const Stack = () => {
  return (
    <StackNav.Navigator>
      <StackNav.Group screenOptions={{ presentation: "modal" }}>
        <StackNav.Screen name="Profile" component={Profile} />
      </StackNav.Group>
    </StackNav.Navigator>
  );
};

export default Stack;
