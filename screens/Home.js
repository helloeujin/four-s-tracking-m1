import React, { useEffect, useRef, useState } from "react";
import { View, Text, FlatList, Dimensions } from "react-native";
import styled from "styled-components/native";
import Swiper from "react-native-swiper";
import Eachweek from "../components/Eachweek";

const marginH = 8;
const numWeeks = 4;
const numWeeksArray = [...Array(numWeeks).keys()];

const Container = styled.View`
  flex: 1;
  background-color: white;
`;

const WeekContainer = styled.View`
  flex: 2;
  margin-top: 30px;
`;

const TicklesContainer = styled.View`
  flex: 9;
  margin-left: ${marginH}px;
  margin-right: ${marginH}px;
  margin-top: 25px;
`;

const TicklesHed = styled.Text`
  font-size: 15px;
  margin-left: 33px;
`;

const Tickles = styled.FlatList``;
const Tickle = styled.View`
  width: 43px;
  height: 43px;
  border-radius: 43px;
  background-color: #f7f7f7;
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
      dateFull: newDay,
      date: newDay.getDate(),
      today: d === todayDay ? true : false,
      index: d,
    };
    weekdays.push(obj);
    // weeks.current[i] = obj;
  });
  // console.log(weekdays);
  return weekdays;
};

/////////// HOME ///////////
const Home = () => {
  const weekData = getDates();

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
        >
          {numWeeksArray.map((_, i) => {
            return (
              <Eachweek
                key={"week" + i}
                data={weekData.slice(7 * i, 7 * (i + 1))}
              />
            );
          })}
        </Swiper>
      </WeekContainer>

      {/* TICKLES */}
      <TicklesContainer>
        <View>
          <TicklesHed>Probiotics</TicklesHed>
          <Tickles
            horizontal
            data={weekData.slice(0, 7)}
            keyExtractor={(item) => item.date + ""}
            contentContainerStyle={{
              flex: 1,
              justifyContent: "space-between",
              marginHorizontal: marginH,
              marginVertical: 10,
            }}
            renderItem={({ item }) => <Tickle />}
          />
        </View>
      </TicklesContainer>
    </Container>
  );
};

export default Home;
