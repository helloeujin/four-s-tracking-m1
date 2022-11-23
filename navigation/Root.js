import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Tabs from "./Tabs";
import Stack from "./Stack";
import Drawer from "./Drawer";
import Home from "../screens/Home";

// const Nav = createNativeStackNavigator();
const Nav = createDrawerNavigator();

const Root = () => (
  <Nav.Navigator
    // initialRouteName="Profile"
    useLegacyImplementation={true}
    screenOptions={{
      headerShown: false,
    }}
  >
    <Nav.Screen name="Home" component={Tabs} />
    <Nav.Screen name="Stack" component={Stack} />
  </Nav.Navigator>
);

export default Root;

// screenOptions={{
//   // presentation: "modal",
//   headerShown: false,
// }}
