import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Profile from "../screens/Profile";

const StackNav = createStackNavigator();

const Stack = () => {
  return (
    <StackNav.Navigator screenOptions={modalOptions}>
      <StackNav.Screen
        name="Profile"
        component={Profile}
        // options={modalOptions}
      />
    </StackNav.Navigator>
  );
};

export default Stack;
