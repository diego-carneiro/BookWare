// :::::::::: Tools ::::::::::
import React from "react";
import styled from "styled-components";

// :::::::::: Components ::::::::::
import ScheduleInterval from "./ScheduleInterval";

export default function ScheduleWeekGrid() {
  const sunIntervals = [
    {
      commitmentStart: "06:00",
      commitmentEnd: "06:05",
      serviceName: "",
    },
  ];
  const monIntervals = [
    {
      commitmentStart: "06:00",
      commitmentEnd: "06:05",
      serviceName: "",
    },
    {
      commitmentStart: "06:15",
      commitmentEnd: "06:30",
      serviceName: "",
    },
  ];
  const tueIntervals = [
    {
      commitmentStart: "06:00",
      commitmentEnd: "07:42",
      serviceName: "",
    },
    {
      commitmentStart: "08:00",
      commitmentEnd: "09:00",
      serviceName: "",
    },
  ];
  const wedIntervals = [
    {
      commitmentStart: "06:00",
      commitmentEnd: "09:00",
      serviceName: "",
    },
  ];
  const thrIntervals = [
    {
      commitmentStart: "06:00",
      commitmentEnd: "07:00",
      serviceName: "",
    },
    {
      commitmentStart: "08:00",
      commitmentEnd: "09:00",
      serviceName: "",
    },
  ];
  const friIntervals = [
    {
      commitmentStart: "06:00",
      commitmentEnd: "07:00",
      serviceName: "",
    },
    {
      commitmentStart: "08:00",
      commitmentEnd: "09:00",
      serviceName: "",
    },
  ];
  const satIntervals = [
    {
      commitmentStart: "06:00",
      commitmentEnd: "07:00",
      serviceName: "",
    },
    {
      commitmentStart: "08:00",
      commitmentEnd: "09:00",
      serviceName: "",
    },
  ];
  const allMinutes = [
    "06:00",
    "06:15",
    "06:30",
    "06:45",
    "07:00",
    "07:15",
    "07:30",
    "07:45",
    "08:00",
    "08:15",
    "08:30",
    "08:45",
    "09:00",
    "09:15",
    "09:30",
    "09:45",
    "10:00",
    "10:15",
    "10:30",
    "10:45",
    "11:00",
    "11:15",
    "11:30",
    "11:45",
    "12:00",
    "12:15",
    "12:30",
    "12:45",
    "13:00",
    "13:15",
    "13:30",
    "13:45",
    "14:00",
    "14:15",
    "14:30",
    "14:45",
    "15:00",
    "15:15",
    "15:30",
    "15:45",
    "16:00",
    "16:15",
    "16:30",
    "16:45",
    "17:00",
    "17:15",
    "17:30",
    "17:45",
    "18:00",
    "18:15",
    "18:30",
    "18:45",
    "19:00",
    "19:15",
    "19:30",
    "19:45",
    "20:00",
    "20:15",
    "20:30",
    "20:45",
    "21:00",
    "21:15",
    "21:30",
    "21:45",
    "22:00",
    "22:15",
    "22:30",
    "22:45",
    "23:00",
    "23:15",
    "23:30",
    "23:45",
    "00:00",
  ];

  function getHourAsIndex(hourStr) {
    const splited = hourStr.split(":");
    // the value is 6 bc starts at 6 am & 15 bc our intervals are 15"
    return (
      12 * (parseInt(splited[0]) - 6) + Math.floor(parseInt(splited[1]) / 5)
    ); // / 15;
  }

  function getCorrectIntervals(daySchedule) {
    let pos = 0;
    return Array.from({ length: 72 }, (_, index) => (
      <ScheduleInterval
        info={
          getHourAsIndex(daySchedule[pos].commitmentStart) === index
            ? daySchedule[pos == daySchedule.length - 1 ? pos : pos++]
            : null
        }
        index={index}
      />
    ));
  }

  return (
    <Container>
      <MinutesColumn>
        {allMinutes.map((info, index) => (
          <MinutesBox info={info}>
            <p>{info}</p>
          </MinutesBox>
        ))}
      </MinutesColumn>
      <ScheduleGrid>
        <DayColumn>
          <h1>Domingo</h1>
          {getCorrectIntervals(sunIntervals)}
        </DayColumn>
        <DayColumn>
          <h1>Segunda-feira</h1>{getCorrectIntervals(monIntervals)}
        </DayColumn>
        <DayColumn>
          <h1>Terça-feira</h1>
          {getCorrectIntervals(tueIntervals)}
        </DayColumn>
        <DayColumn>
          <h1>Quarta-feira</h1>
          {getCorrectIntervals(wedIntervals)}
        </DayColumn>
        <DayColumn>
          <h1>Quinta-feira</h1>
          {getCorrectIntervals(thrIntervals)}
        </DayColumn>
        <DayColumn>
          <h1>Sexta-feira</h1>
          {getCorrectIntervals(friIntervals)}
        </DayColumn>
        <DayColumn>
          <h1>Sábado</h1>{getCorrectIntervals(satIntervals)}
        </DayColumn>
      </ScheduleGrid>
    </Container>
  );
}
// ::::::::::Styled-Components::::::::::
const Container = styled.div`
  width: 1800px;
  margin: 50px 0px 0px 0px;
  background-color: #fff;

  display: flex;
  flex-direction: row;
`;
const DayColumn = styled.div`
  width: 260px;
  display: flex;
  flex-direction: column;
  align-items: center;
  
  h1{
    font-size: 18px;
    font-weight: 500;
    margin: 0px 0px 10px 0px;
  }
`;
const MinutesColumn = styled.div`
  width: 50px;
  margin: 18px 0px 0px 15px;
`;
const MinutesBox = styled.div`
  width: 50px;
  height: 35px;
  margin: 0px 0px 2px 0px;

  display: flex;
  justify-content: center;
  align-items: center;
`;
const ScheduleGrid = styled.div`
  display: flex;
  flex-grow: 1;
  justify-content: space-between;
`;
