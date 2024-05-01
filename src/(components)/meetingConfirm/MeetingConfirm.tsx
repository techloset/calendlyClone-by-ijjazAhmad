import React from "react";
import { calender, calendly, userIcon, world } from "../../../public/images";
import Image from "next/image";
import Link from "next/link";
import Heading from "../text/Heading";
import TextWithIcon from "../text/TextWithIcon";
type MeetingConfirmProps = {
  selectedTime: string | null;
  selectedDate: string | null;
  fullname: string | null;
};
export default function meetingConfirm({
  selectedTime,
  selectedDate,
  fullname,
}: MeetingConfirmProps) {
  return (
    <div className="relative flex justify-center border border-borderClr-1 shadow-2 rounded-md h-[80vh] md:h-[700px] w-[90vw] md:w-[1060px]   p-4 md:p-0 mt-[66px] mb-[30px]">
      <Image
        src={calendly}
        alt="Logo"
        className=" h-[105px] absolute top-0 right-0"
      />
      <div className="flex flex-col items-center mt-14">
        <p className="text-black font-bold text-[18px]">Your are scheduled</p>
        <p className="text-black font-medium text-[14px] my-5">
          A calender invitation has been send to your email address
        </p>
        <Link
          href={"#"}
          className="text-black bg-white border rounded-[40px] px-[17px] py-[11px]"
        >
          Open Invitation
        </Link>
        <div className="border border-borderClr-1  rounded-md mt-5 py-5 ps-5 pr-16">
          <Heading text="30 Minuts Meeting" size="text-[16px]"/>
          <TextWithIcon src={userIcon} text={fullname} />
          <TextWithIcon
            src={calender}
            text={`${selectedTime} ${selectedDate}`}
          />
          <TextWithIcon src={world} text="Pakistan Maldives Time" />
        </div>
      </div>
    </div>
  );
}
