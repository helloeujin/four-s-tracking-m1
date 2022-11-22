import React from "react";
import { SafeAreaView, Text, View } from "react-native";
import styled from "styled-components/native";

const DatesView = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
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
  font-size: 11.2px;
  align-items: center;
`;
const DateTxt = styled.Text`
  padding: 13.5px;
`;

const EachWeek = ({ data }) => {
  //   console.log(data);
  return (
    <DatesView>
      {data.map((item, i) => {
        return (
          <OneDay style={{ backgroundColor: item.today ? "#f7f7f7" : "#fff" }}>
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

export default EachWeek;
