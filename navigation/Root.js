import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Stack from "./Stack";
import Drawer from "./Drawer";

const Nav = createNativeStackNavigator();

const Root = () => (
  <Nav.Navigator
    initialRouteName="Drawer"
    useLegacyImplementation={true}
    screenOptions={{
      headerShown: false,
      presentation: "modal",
    }}
  >
    <Nav.Screen
      name="Stack"
      component={Stack}
      // options={{
      //   drawerItemStyle: { display: "none" },
      // }}
    />
    <Nav.Screen name="Drawer" component={Drawer} />
  </Nav.Navigator>
);

export default Root;
