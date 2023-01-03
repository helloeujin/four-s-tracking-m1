import React, { useEffect, useRef, useState } from "react";
import Swiper from "react-native-swiper";
import styled from "styled-components/native";
import Tickles from "./Tickles";
import { Entypo } from "@expo/vector-icons";

const Container = styled.View`
  margin-left: 8px;
  margin-right: 8px;
  margin-top: 10px;
  height: 120px;
`;
const HedContainer = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: space-between;
  margin-left: 28px;
  margin-right: 8px;
  margin-bottom: 2.5px;
`;
const TicklesHed = styled.Text`
  font-size: 15.5px;
  font-weight: 500;
  color: #222;
`;
const TicklesDesc = styled.Text`
  font-size: 13px;
  margin-bottom: 2px;
  font-weight: normal;
  color: #aaa;
  margin-left: 28px;
`;

//////////////////
const Ticklesbox = ({
  weekData,
  ticklesData,
  numWeeksArray,
  swiper,
  swiperIndex,
  updateProjectData,
  oldIndex,
  navigation,
  projectData,
}) => {
  const ticklesRef = useRef(null);

  const goToEditMulti = (e) => {
    // passing params to stack screen
    navigation.navigate("Stack", {
      screen: "MultiComplete",
      params: {
        projectData,
        label: "Update",
        taskName: ticklesData.name,
        desc: ticklesData.desc,
      },
    });
  };

  // Set up swiper with useRef
  useEffect(() => {
    if (ticklesRef.current) {
      swiper.current[swiperIndex] = ticklesRef.current;
    }
  }, [ticklesRef]);

  //////////////////
  return (
    <Container>
      <HedContainer onPress={goToEditMulti}>
        {ticklesData.name ? (
          <TicklesHed>{ticklesData.name}</TicklesHed>
        ) : (
          <TicklesHed>...</TicklesHed>
        )}
      </HedContainer>

      {ticklesData.desc ? <TicklesDesc>{ticklesData.desc}</TicklesDesc> : null}

      <Swiper
        // index={numWeeks - 1}
        index={oldIndex}
        horizontal
        containerStyle={{
          width: "100%",
          height: "100%",
          marginTop: 10,
        }}
        showsButtons={false}
        showsPagination={false}
        slidesPerView={1}
        scrollEnabled={false}
        ref={ticklesRef}
        loop={false}
        autoplay={false}
      >
        {numWeeksArray.map((_, i) => {
          return (
            <Tickles
              dates={weekData.slice(7 * i, 7 * (i + 1))}
              data={ticklesData}
              key={"tickle" + i}
              updateProjectData={updateProjectData}
            />
          );
        })}
      </Swiper>
    </Container>
  );
};

export default Ticklesbox;
