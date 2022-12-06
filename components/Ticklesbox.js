import React, { useEffect, useRef, useState } from "react";
import Swiper from "react-native-swiper";
import styled from "styled-components/native";
import Tickles from "./Tickles";

const Container = styled.View`
  margin-left: 8px;
  margin-right: 8px;
  margin-top: 15px;
  height: 100px;
`;

const TicklesHed = styled.Text`
  font-size: 15px;
  margin-left: 33px;
  margin-bottom: 12px;
`;

//////////////////
const Ticklesbox = ({
  weekData,
  ticklesData,
  numWeeks,
  numWeeksArray,
  swiper,
  swiperIndex,
  updateProjectData,
  oldIndex,
}) => {
  const ticklesRef = useRef(null);

  // Set up swiper with useRef
  useEffect(() => {
    if (ticklesRef.current) {
      swiper.current[swiperIndex] = ticklesRef.current;
    }
  }, [ticklesRef]);

  //////////////////
  return (
    <Container>
      <TicklesHed>{ticklesData.name}</TicklesHed>
      <Swiper
        // index={numWeeks - 1}
        index={oldIndex}
        horizontal
        containerStyle={{
          width: "100%",
          height: "100%",
          marginBottom: 30,
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
