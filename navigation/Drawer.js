import React from "react";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";
import Profile from "../screens/Profile";

const DrawerNav = createDrawerNavigator();

const CustomDrawerContent = (props) => {
  const { state, ...rest } = props;
  const newState = { ...state };
  newState.routes = newState.routes.filter((item) => item.name !== "Stack");

  // console.log(newState.ourtes);

  return (
    <DrawerContentScrollView {...props}>
      {/* <DrawerItemList {...props} /> */}
      <DrawerItemList state={newState} {...rest} />
    </DrawerContentScrollView>
  );
};

const Drawer = () => {
  return (
    <DrawerNav.Navigator
      initialRouteName="Profile"
      useLegacyImplementation={true}
      drawerContent={(props) => <CustomDrawerContent {...props} />}
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
