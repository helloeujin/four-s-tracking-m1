import React from "react";
import { View, Text } from "react-native";
import styled from "styled-components/native";

const Container = styled.View`
  flex: 1;
`;

const HedContainer = styled.View`
  height: 150px;
`;

const ProjectHed = styled.Text`
  top: 100px;
  text-align: center;
  font-size: 18px;
  font-weight: bold;
`;

const DateContainer = styled.View`
  height: 110px;
  border: 1px solid #ddd;
  background-color: #ddd;
`;

const Home = () => {
  return (
    <Container>
      <HedContainer>
        <ProjectHed>My Routine</ProjectHed>
      </HedContainer>

      <DateContainer></DateContainer>
    </Container>
  );
};

export default Home;
