"use client";
import Image from "next/image";
import React from "react";
import { calendly, clock, userIcon, world } from "../../../public/images";
import Link from "next/link";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { useScheduleMeeting } from "./useScheduleMeeting";
import TimeSlotBtn from "../button/TimeSlotBtn";
import TextWithIcon from "../text/TextWithIcon";
import Heading from "../text/Heading";
type ValuePiece = Date | null;
type ScheduleMeetingProps = {
  days: String[];
  startHour: number;
  endHour: number;
  fullname: string;
  hostEmail: string;
  path: string;
};

export default function ScheduleMeeting({
  days,
  startHour,
  endHour,
  fullname,
  path,
  hostEmail,
}: ScheduleMeetingProps) {
  const {
    value,
    timeSlices,
    selectedTime,
    formatDate,
    onChange,
    handleButtonClick,
    tileDisabled,
  } = useScheduleMeeting({ days, startHour, endHour });

  const paramData = {
    selectedTime: selectedTime,
    selectedDate: formatDate(value),
    fullname: fullname,
    id: path,
    hostEmail: hostEmail,
  };

  return (
    <div className="flex flex-wrap justify-center items-center flex-col w-full">
      <div className="relative flex flex-wrap  border border-borderClr-1 shadow-2 rounded-md w-[95%] h-[90vh] sm:max-w-[1060px] sm:h-[700px] mt-[66px] mb-[30px]">
        <Image
          src={calendly}
          alt="Logo"
          className="w-[105px] h-[105px] absolute top-0 right-0"
        />
        <div className="w-[35%] border-r border-borderClr-1 p-8">
          <TextWithIcon src={userIcon} text={fullname} />
          <Heading text="30 Minute Meeting" size="text-2xl" />
          <p className="text-lightBlack font-normal text-[14px] mb-2 flex items-center">
            <Image src={clock} alt=".." className="w-3 h-3 mr-1" />
            30 min
          </p>
        </div>
        <div className="w-[65%] pt-7 pl-3">
          <Heading text="Select Data & Time" size="text-[14px]" />
          <div className="flex flex-wrap">
            <div className="raletive mx-6">
              <Calendar
                onChange={onChange}
                value={value}
                className="border-0 mb-3"
                tileDisabled={tileDisabled}
              />
              <Heading text="Time Zone" size="text-[16px]" />
              <p className="text-black font-normal text-[12px] mb-2 flex items-center ml-5">
                <Image src={world} alt="..." className="w-4 h-4 mr-1" />{" "}
                Pakistan, Maldives Time
              </p>
              <Link
                href={{ pathname: "/schedulerdetail", query: paramData as any }}
                className="absolute bottom-4 left-[37%]  text-white-default bg-primary rounded-[40px] px-[17px] py-[11px]"
              >
                Next
              </Link>
            </div>
            <div>
              <p className="text-black font-normal text-[14px] mb-2 mt-3">
                Wednesday, March 27
              </p>
              <div className="overflow-y-auto h-[572px] w-[250px] ">
                {timeSlices.map((timeSlice, i) => (
                  <TimeSlotBtn
                    key={i}
                    label={timeSlice}
                    onClick={() => handleButtonClick(timeSlice)}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
