import React from "react";
import { View, Text, FlatList } from "react-native";
import styled from "styled-components/native";

const marginH = 8;

const getDates = () => {
  const week = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
  let weekdays = [];
  const curr = new Date();
  const currDay = curr.getDay();
  const firstDay = curr.getDate() - curr.getDay();

  week.map((day, i) => {
    const obj = {
      day: day,
      date: new Date(curr.setDate(firstDay + i)).getDate(),
      today: i === currDay ? true : false,
    };
    weekdays.push(obj);
  });

  return weekdays;
};

const Home = () => {
  const weekDays = getDates();

  return (
    <Container>
      {/* DATES */}
      <DatesContainer
        horizontal
        data={weekDays}
        keyExtractor={(item) => item.date + ""}
        contentContainerStyle={{
          flex: 1,
          justifyContent: "space-between",
          marginHorizontal: marginH,
          marginVertical: 10,
        }}
        renderItem={({ item }) => (
          <OneDay style={{ backgroundColor: item.today ? "#f7f7f7" : "#fff" }}>
            <DayTxt style={{ fontWeight: item.today ? "700" : "400" }}>
              {item.day}
            </DayTxt>
            <DateTxt style={{ fontWeight: item.today ? "700" : "400" }}>
              {item.date}
            </DateTxt>
          </OneDay>
        )}
      />

      {/* TICKLES */}
      <TicklesContainer>
        <View>
          <TicklesHed>Probiotics</TicklesHed>
          <Tickles
            horizontal
            data={weekDays}
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

/////////////////////////////////////////////////////////////////
const Container = styled.View`
  flex: 1;
  background-color: white;
`;
const DatesContainer = styled.FlatList`
  flex: 1.2;
  border-bottom-color: #f3f3f3;
  border-bottom-width: 1px;
  margin-top: 12px;
`;

const OneDay = styled.View`
  background-color: #f7f7f7;
  border: 1px solid white;
  align-items: center;
  justify-content: center;
  padding-top: 10px;
  border-radius: 8px;
`;
const DayTxt = styled.Text`
  font-size: 11px;
  align-items: center;
`;
const DateTxt = styled.Text`
  padding: 13px;
`;

const TicklesContainer = styled.View`
  flex: 7;
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
