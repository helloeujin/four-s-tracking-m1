import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";
import Tabs from "./Tabs";
import Stack from "./Stack";
// import Drawer from "./Drawer";
import Home from "../screens/Home";

// const Nav = createNativeStackNavigator();
const Nav = createDrawerNavigator();

const CustomDrawerContent = (props) => {
  const { state, ...rest } = props;
  const newState = { ...state };
  newState.routes = newState.routes.filter((item) => item.name !== "Stack");

  // FILTER OUT STACK NAV ON DRAWER ITEM
  return (
    <DrawerContentScrollView {...props}>
      {/* <DrawerItemList {...props} /> */}
      <DrawerItemList state={newState} {...rest} />
    </DrawerContentScrollView>
  );
};

const Root = () => (
  <Nav.Navigator
    // initialRouteName="Profile"
    useLegacyImplementation={true}
    drawerContent={(props) => <CustomDrawerContent {...props} />}
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
