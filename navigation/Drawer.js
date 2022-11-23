import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Profile from "../screens/Profile";

const DrawerNav = createDrawerNavigator();

const Drawer = () => {
  return (
    <DrawerNav.Navigator
      initialRouteName="Profile"
      useLegacyImplementation={true}
    >
      <DrawerNav.Screen
        name="Profile"
        component={Profile}
        options={{ drawerLabel: "Profile" }}
      />
    </DrawerNav.Navigator>
  );
};

export default Drawer;
