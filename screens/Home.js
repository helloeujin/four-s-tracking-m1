import React from "react";
import { View, Text } from "react-native";
import styled from "styled-components/native";

const Container = styled.View`
  flex: 1;
`;

const HedContainer = styled.View`
  flex: 1;
`;

const ProjectHed = styled.Text`
  font-size: 18px;
  font-weight: bold;
  justify-content: center;
  align-items: center;
`;

const DateContainer = styled.View`
  flex: 1;
  border: 1px solid #ddd;
  background-color: #ddd;
`;

const Tickles = styled.View`
  flex: 6;
`;

const Home = () => {
  return (
    <Container>
      {/* <HedContainer>
        <ProjectHed>My Routine</ProjectHed>
      </HedContainer> */}

      <DateContainer></DateContainer>

      <Tickles></Tickles>
    </Container>
  );
};

export default Home;
