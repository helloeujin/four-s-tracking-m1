import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Profile from "../screens/Profile";
import MultiComplete from "../modules/MultiComplete";

const StackNav = createStackNavigator();

const Stack = () => {
  return (
    <StackNav.Navigator>
      <StackNav.Screen name="Add " component={MultiComplete} />
    </StackNav.Navigator>
  );
};

export default Stack;
