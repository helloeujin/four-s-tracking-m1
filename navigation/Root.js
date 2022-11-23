import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
// import { createDrawerNavigator } from "@react-navigation/drawer";
import Tabs from "./Tabs";
import Stack from "./Stack";
import Profile from "../screens/Profile";

const Nav = createNativeStackNavigator();
// const Nav = createDrawerNavigator();

const Root = () => (
  <Nav.Navigator
    screenOptions={{
      // presentation: "modal",
      headerShown: false,
    }}
  >
    <Nav.Screen name="Tabs" component={Tabs} />
    {/* <Nav.Screen name="Profile" component={Profile} /> */}
  </Nav.Navigator>
);

export default Root;
