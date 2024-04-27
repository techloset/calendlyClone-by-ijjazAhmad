"use client";
import { useState } from "react";
const initialState = {
  email: "",
  fullName: "",
  description: "",
};

export const useSchedulerDetail = () => {
  const [confirm, setisConfirm] = useState(false);
  const [loading, setisLoading] = useState(false);
  const [state, setstate] = useState(initialState);
  const handelChange = (e: any) => {
    setstate((s) => ({ ...s, [e.target.name]: e.target.value }));
  };
  const handleSubmit = () => {
    setisLoading(true);
    setstate(initialState);
    setisConfirm(true);
    setisLoading(false);
  };
  return {
    confirm,
    loading,
    state,
    handelChange,
    handleSubmit,
  };
};
