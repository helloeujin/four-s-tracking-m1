import React from "react";
import { View, Text } from "react-native";
import styled from "styled-components/native";

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const Share = () => {
  return (
    <Container>
      <Text>Share</Text>
    </Container>
  );
};

export default Share;
