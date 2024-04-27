"use client";
import React, { useState } from "react";
import { useParams, useRouter } from "next/navigation";
import axios, { AxiosError } from "axios";
import toast from "react-hot-toast";
import { URL } from "@/constants/SiteUrl";
import MeetingPromptCard from "@/(components)/meetingPromptCard/MeetingPromptCard";
import ScheduleMeeting from "@/(components)/scheduleMeeting/ScheduleMeeting";
type availabilityProps = {
  id: String;
  startHour: number;
  endHour: number;
  days: String[];
  userName: String;
  createdAt: String;
  updateAt: String;
};
const initialState: availabilityProps = {
  id: "",
  startHour: 0,
  endHour: 0,
  days: [],
  userName: "",
  createdAt: "",
  updateAt: "",
};
export default function page() {
  const [loading, setisLoading] = useState(false);
  const [paramUserAvailability, setParamUserAvailability] =
    useState(initialState);
  const name = useParams();
  const username: any = name.name;
  const Router = useRouter();
  const onSubmit = async () => {
    try {
      const response = await axios.get(`${URL}/api/availability`);
      const data = response.data.data;
      const userAvailabarr = await data.filter(
        (value: any) => value.userName == username
      );
      const userAvailabObj = userAvailabarr[0];
      setParamUserAvailability(userAvailabObj);
      setisLoading(true);
    } catch (error: AxiosError | any) {
      console.log(error);
      toast.error(`${error?.response?.data.message}`);
      setisLoading(false);
    }
  };

  return (
    <div className="flex flex-wrap justify-center items-center flex-col w-full">
      {!loading ? (
        <MeetingPromptCard name={name.name} onClick={onSubmit} />
      ) : (
        <ScheduleMeeting
          days={paramUserAvailability.days}
          endHour={paramUserAvailability.endHour}
          startHour={paramUserAvailability.startHour}
          username={`${name.userName}`}
        />
      )}
    </div>
  );
}
