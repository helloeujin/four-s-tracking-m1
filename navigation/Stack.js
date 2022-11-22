import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
// import { createDrawerNavigator } from "@react-navigation/drawer";
import Detail from "../screens/Profile";
import { useColorScheme } from "react-native";
import Profile from "../screens/Profile";

// const Nav = createDrawerNavigator();
const Nav = createNativeStackNavigator();

const Stack = () => {
  return (
    <Nav.Navigator
      screenOptions={
        {
          // headerBackTitleVisible: false,
          // headerStyle: {
          //   backgroundColor: isDark ? BLACK_COLOR : "white",
          // },
          // headerTitleStyle: {
          //   color: isDark ? "white" : BLACK_COLOR,
          // },
        }
      }
    >
      <Nav.Screen name="Profile" component={Profile} />
    </Nav.Navigator>
  );
};

export default Stack;
