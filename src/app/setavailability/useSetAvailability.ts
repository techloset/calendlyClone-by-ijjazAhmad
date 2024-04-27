"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import axios from "axios";
import { URL } from "@/constants/SiteUrl";
import { getSession } from "next-auth/react";
export const daysName: string[] = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
type hoursType = {
  startHour: string;
  endHour: string;
};

const initialState: hoursType = {
  startHour: "",
  endHour: "",
};
export const useSetAvailability = () => {
  const [state, setstate] = useState(initialState);
  const [days, setDays] = useState<string[]>([]);
  const [loading, setisLoading] = useState(false);
  const [userName, setUserName] = useState<string | undefined>("");
  const router = useRouter();

  useEffect(() => {
    getueser();
  }, []);
  const getueser = async () => {
    const session = await getSession();
    const username = session?.user?.username;
    setUserName(username);
  };
  const handelChange = (e: any) => {
    setstate((s) => ({ ...s, [e.target.name]: e.target.value }));
  };
  const handleDays = (e: React.ChangeEvent<HTMLInputElement>) => {
    const day = e.target.name;
    if (e.target.checked) {
      setDays([...days, day]);
    } else {
      setDays(days.filter((item) => item !== day));
    }
  };
  const handelSubmit = async () => {
    const { startHour, endHour } = state;
    if (startHour == endHour) {
      return toast.error("Ending hour same as starting hour");
    }
    if (!days) {
      return toast.error("Plz select day");
    }

    setisLoading(true);
    await axios
      .post(`${URL}/api/availability`, {
        startHour: startHour,
        endHour: endHour,
        days: days,
        userName: userName,
      })
      .then(function (response) {
        toast.success(`${response.data.message}`);
        setisLoading(false);
        router.push("/");
      })
      .catch(function (error) {
        console.log(error.response.data.message);
        toast.error(`${error.response.data.message}`);
        setisLoading(false);
      });
  };

  return {
    state,
    setstate,
    days,
    setDays,
    loading,
    setisLoading,
    userName,
    setUserName,
    handelChange,
    handleDays,
    handelSubmit,
  };
};
