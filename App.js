import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import Root from "./navigation/Root";
import "react-native-gesture-handler";

export default function App() {
  return (
    <NavigationContainer>
      <Root />
    </NavigationContainer>
  );
}
