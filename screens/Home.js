import React, { useEffect, useRef, useState } from "react";
import { View, Text, FlatList, Dimensions } from "react-native";
import styled from "styled-components/native";
import Swiper from "react-native-swiper";
import Eachweek from "../components/Eachweek";
import Tickles from "../components/Tickles";

const testData = require("../data/test.json");

const marginH = 8;
const numWeeks = 4;
const numWeeksArray = [...Array(numWeeks).keys()];

const Container = styled.View`
  flex: 1;
  background-color: white;
`;

const WeekContainer = styled.View`
  flex: 1.8;
  margin-top: 30px;
`;

const TicklesContainer = styled.View`
  flex: 9;
  margin-left: ${marginH}px;
  margin-right: ${marginH}px;
  margin-top: 15px;
`;

const TicklesHed = styled.Text`
  font-size: 15px;
  margin-left: 33px;
  margin-bottom: 12px;
`;

const { height: SCREEN_HEIGHT } = Dimensions.get("window");

const getDates = () => {
  const weekDay = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
  let weekdays = [];
  const today = new Date();
  const todayDay = today.getDay();

  const weekArray = [...Array(7 * numWeeks).keys()].map(
    (_, i) => i - 7 * (numWeeks - 1)
  );

  weekArray.map((d, i) => {
    const newDay = new Date();
    newDay.setDate(newDay.getDate() + d - todayDay);

    const obj = {
      day: weekDay[((d % 7) + 7) % 7],
      dateFull: newDay.toLocaleDateString("en-US"),
      date: newDay.getDate(),
      today: d === todayDay ? true : false,
      index: d,
    };
    weekdays.push(obj);
    // weeks.current[i] = obj;
  });
  return weekdays;
};

const getIndex = (index, oldIndex) => {
  if (index > 1 && oldIndex === 0) {
    return -1;
  } else if (index === 0 && oldIndex > 1) {
    return 1;
  } else {
    return index > oldIndex ? 1 : -1;
  }
};

/////////// HOME ///////////
const Home = () => {
  const weekData = getDates();
  // const [oldIndex, setOldIndex] = useState(numWeeks - 1);
  const oldIndex = useRef(numWeeks - 1);
  const ticklesRef = useRef(null);

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
            const relativeIndex = getIndex(index, oldIndex.current);
            ticklesRef.current.scrollBy(relativeIndex, true);
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
        <TicklesHed>Probiotics</TicklesHed>
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
          scrollEnabled={false}
          ref={ticklesRef}
        >
          {numWeeksArray.map((_, i) => {
            return (
              <Tickles
                dates={weekData.slice(7 * i, 7 * (i + 1))}
                data={testData}
                key={"tickle" + i}
              />
            );
          })}
        </Swiper>
      </TicklesContainer>
    </Container>
  );
};

export default Home;
