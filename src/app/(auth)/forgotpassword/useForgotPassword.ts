"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useDispatch } from "react-redux";
import toast from "react-hot-toast";

export const useForgotPassword = () => {
  const [email, setEmail] = useState<string>("");

  const [loading, setisLoading] = useState(false);
  const router = useRouter();
  const dispatch = useDispatch();
  const handleSubmit = async () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email) {
      return toast.error("Please enter an email");
    }
    if (!emailRegex.test(email)) {
      return toast.error("Please enter a valid email");
    }
    try {
      setisLoading(true);
      //   await dispatch(forgotPassword(value) )
      setEmail("");
      setisLoading(false);
    } catch (error) {
      toast.error("error");
    }
  };
  return {
    email,
    setEmail,
    loading,
    handleSubmit,
  };
};
