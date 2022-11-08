import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import styled from "styled-components/native";
import { NavigationContainer } from "@react-navigation/native";
import Root from "./navigation/Root";

export default function App() {
  return (
    <NavigationContainer>
      <Root />
    </NavigationContainer>
  );
}
