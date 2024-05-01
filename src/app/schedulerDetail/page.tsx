"use client";
import Image from "next/image";
import React from "react";
import {
  arrowLeft,
  calender,
  calendly,
  clock,
  userIcon,
  world,
} from "../../../public/images";
import Link from "next/link";
import MeetingConfirm from "../../(components)/meetingConfirm/MeetingConfirm";
import PrimaryBtn from "@/(components)/button/PrimaryBtn";
import { useSchedulerDetail } from "./useSchedulerDetail";
import TextWithIcon from "@/(components)/text/TextWithIcon";
import Heading from "@/(components)/text/Heading";
import Input from "@/(components)/formInputs/Input";
import TextareaInput from "@/(components)/formInputs/TextareaInput";
export default function SchedulerDetail() {
  const {
    confirm,
    loading,
    state,
    selectedTime,
    selectedDate,
    fullname,
    id,
    handelChange,
    handleSubmit,
  } = useSchedulerDetail();

  return (
    <div className="flex flex-wrap justify-center items-center flex-col">
      {!confirm ? (
        <div className="relative flex   border border-borderClr-1 shadow-2 rounded-md w-[95%] h-[90vh] sm:max-w-[1060px] sm:h-[700px] mt-[66px] mb-[30px]">
          <Image
            src={calendly}
            alt="..."
            className="w-[105px] h-[105px] absolute top-0 right-0"
          />
          <div className="w-[35%] border-r border-borderClr-1 p-8">
            <Link href={`schedulemeeting/${id}`}>
              {" "}
              <Image
                src={arrowLeft}
                alt="..."
                className="w-9 h-9 mr-1 border border-borderClr-1 rounded-full mb-4"
              />
            </Link>
            <TextWithIcon src={userIcon} text={fullname} />
            <Heading text="30 Minute Meeting" size="text-2xl" />

            <TextWithIcon src={clock} text={"30 min"} />
            <TextWithIcon
              src={calender}
              text={`, ${selectedTime} ${selectedDate}`}
            />
            <TextWithIcon src={world} text={"Pakistan, Maldives Time"} />
          </div>
          <div className="w-[65%] pt-7 pl-8">
            <Heading text="Enter Details" size="text-[17px]" />
            <form className="px-[6px] py-[33px]  w-[95%] sm:w-[440px] ">
              <div className="mb-[12px]">
                <Input
                  label="Name*"
                  name="schedulerName"
                  onChange={(e) => handelChange(e)}
                  placeholder=""
                  type="text"
                  value={state.schedulerName}
                />
              </div>
              <div className="mb-[12px]">
                <Input
                  label="Email*"
                  name="schedulerEmail"
                  onChange={(e) => handelChange(e)}
                  placeholder=""
                  type="email"
                  value={state.schedulerEmail}
                />
              </div>
              <div className="mb-[14px]">
                <TextareaInput
                  label="Plz share anythings that will help prepare for your meeting"
                  name="description"
                  onChange={(e) => handelChange(e)}
                  placeholder=""
                  value={state.description}
                />
              </div>
              <p className="font-normal  text-[14px] mb-[14px]">
                By proceeding. you confirm that you have read and agree to{" "}
                <span className="text-primary">
                  Calendly Terms of Use and Privacy Notice.
                </span>{" "}
              </p>
              <PrimaryBtn
                loading={loading}
                onClick={handleSubmit}
                label="Set Now"
              />
            </form>
          </div>
        </div>
      ) : (
        <MeetingConfirm
          selectedTime={selectedTime}
          selectedDate={selectedDate}
          fullname={fullname}
        />
      )}
    </div>
  );
}
