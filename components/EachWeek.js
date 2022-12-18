import React from "react";
import { SafeAreaView, Text, View } from "react-native";
import styled from "styled-components/native";

const DatesView = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
  margin: 0px 8px;
`;
const OneDay = styled.View`
  background-color: #f7f7f7;
  border: 1px solid #fff;
  align-items: center;
  justify-content: center;
  padding-top: 12px;
  border-radius: 8px;
  height: 100%;
  align-items: center;
`;
const DayTxt = styled.Text`
  font-size: 10.3px;
  align-items: center;
  color: #111;
`;
const DateTxt = styled.Text`
  padding: 13px;
  font-size: 15px;
  color: #111;
`;

const Eachweek = ({ dates }) => {
  return (
    <DatesView>
      {dates.map((item, i) => {
        return (
          <OneDay
            key={"oneday" + i}
            style={{ backgroundColor: item.today ? "#f4f4f4" : "#fff" }}
          >
            <DayTxt style={{ fontWeight: item.today ? "700" : "400" }}>
              {item.day}
            </DayTxt>
            <DateTxt style={{ fontWeight: item.today ? "700" : "400" }}>
              {item.date}
            </DateTxt>
          </OneDay>
        );
      })}
    </DatesView>
  );
};

export default Eachweek;
