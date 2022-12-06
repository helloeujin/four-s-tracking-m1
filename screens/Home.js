import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components/native";
import Swiper from "react-native-swiper";
import Eachweek from "../components/Eachweek";
import Ticklesbox from "../components/Ticklesbox";
import { getDates, getSlideIndex } from "../functions/datafn";

const testData = require("../data/test.json");
const testData2 = require("../data/test2.json");

const numWeeks = 4;
const numWeeksArray = [...Array(numWeeks).keys()];
// const numDataArray = [...Array(8).keys()];

const Container = styled.View`
  flex: 1;
  background-color: white;
`;
const WeekContainer = styled.View`
  flex: 1.8;
  margin-top: 30px;
`;
const TicklesContainer = styled.ScrollView`
  flex: 9;
`;

// const { height: SCREEN_HEIGHT } = Dimensions.get("window");

/////////// HOME ///////////
const Home = () => {
  const weekData = getDates(numWeeks);
  const oldIndex = useRef(numWeeks - 1);
  // const tickleSwiper = useRef(null);
  const tickleSwipersRef = useRef([]);

  return (
    <Container>
      {/* DATES */}
      <WeekContainer>
        <Swiper
          index={numWeeks - 1}
          horizontal
          containerStyle={{
            width: "100%",
            height: "100%",
            marginBottom: 30,
          }}
          showsButtons={false}
          showsPagination={false}
          slidesPerView={1}
          onIndexChanged={(index) => {
            const relativeIndex = getSlideIndex(index, oldIndex.current);
            testData2.map((_, i) => {
              // tickleSwiper.current.scrollBy(relativeIndex, true);
              tickleSwipersRef.current[i].scrollBy(relativeIndex, true);
            });

            oldIndex.current = index;
          }}
        >
          {numWeeksArray.map((_, i) => {
            return (
              <Eachweek
                key={"week" + i}
                dates={weekData.slice(7 * i, 7 * (i + 1))}
              />
            );
          })}
        </Swiper>
      </WeekContainer>

      {/* TICKLES */}
      <TicklesContainer>
        {testData2.map((d, i) => {
          return (
            <Ticklesbox
              weekData={weekData}
              ticklesData={d}
              numWeeks={numWeeks}
              numWeeksArray={numWeeksArray}
              // swiper={tickleSwiper} // WORKING
              swiper={tickleSwipersRef}
              swiperIndex={i}
              key={"ticklebox" + i}
            />
          );
        })}
      </TicklesContainer>
    </Container>
  );
};

export default Home;
