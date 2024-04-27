import Image from "next/image";
import React, { useEffect, useState } from "react";
import { arrowLeft, calendly, clock, world } from "../../../public/images";
import Link from "next/link";
import Calendar, { TileClassNameFunc, TileDisabledFunc } from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { useParams } from "next/navigation";
type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];
type useScheduleMeetingProps = {
  days: String[];
};
export const useScheduleMeeting = ({ days }: useScheduleMeetingProps) => {
  const [selectedTime, setSelectedTime] = useState<string>("");
  const [value, onChange] = useState<Value>(new Date());
  const allowedDays = days;
  const handleButtonClick = (time: string) => {
    setSelectedTime(time);
  };
  const tileDisabled: TileDisabledFunc = ({ date, view }) => {
    if (view === "month") {
      if (date < new Date(new Date().setHours(0, 0, 0, 0))) {
        return true;
      }
    } else {
      if (date < new Date()) {
        return true;
      }
    }
    const dayName: string = date.toLocaleDateString("en-US", {
      weekday: "long",
    });
    return !allowedDays.includes(dayName);
  };
  const padZero = (num: number) => {
    return num < 10 ? `0${num}` : num;
  };
  const generateSlices = (startHour: number, endHour: number) => {
    console.log("🚀 ~ generateSlices ~ endHour:", endHour);
    console.log("🚀 ~ generateSlices ~ startHour:", startHour >= endHour);
    const slices = [];

    console.log("🚀 ~ generateSlices ~ padZero:", padZero(startHour));
    for (let hour = startHour; hour >= endHour; hour++) {
      console.log("🚀 ~ generateSlices ~ hour:", hour);
      slices.push(`${padZero(hour)}:00`);
      if (hour !== endHour) {
        console.log("🚀 ~ generateSlices ~ padZero:", padZero);
        slices.push(`${padZero(hour)}:30`);
      }
    }
    console.log("🚀 ~ generateSlices ~ slices:", slices);
  };
  // useEffect(()=>{
  //   const slices = generateSlices(startHour, endHour)
  //   console.log("🚀 ~ useEffect ~ slices:", slices)
  // },[startHour,endHour])

  return {
    selectedTime,
    setSelectedTime,
    value,
    onChange,
    allowedDays,
    handleButtonClick,
    tileDisabled,
    generateSlices,
  };
};
