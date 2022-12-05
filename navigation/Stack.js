import React from "react";
// import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createStackNavigator } from "@react-navigation/stack";
import Profile from "../screens/Profile";

// const StackNav = createNativeStackNavigator();
const StackNav = createStackNavigator();

const Stack = () => {
  return (
    <StackNav.Navigator>
      <StackNav.Group>
        <StackNav.Screen
          name="Profile"
          component={Profile}
          // options={{
          //   presentation: "transparentModal",
          // }}
        />
      </StackNav.Group>
    </StackNav.Navigator>
  );
};

export default Stack;
