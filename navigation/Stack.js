import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import MultiComplete from "../modules/MultiComplete";

const StackNav = createStackNavigator();

const Stack = () => {
  return (
    <StackNav.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <StackNav.Screen name="MultiComplete" component={MultiComplete} />
    </StackNav.Navigator>
  );
};

export default Stack;
