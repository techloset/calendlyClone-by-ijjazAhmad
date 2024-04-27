"use client";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { userSchema } from "@/constants/ValidationSchema/FormSchema";
import Link from "next/link";
import { URL } from "@/constants/SiteUrl";
import axios, { AxiosError } from "axios";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { useState } from "react";
import PrimaryBtn from "../button/PrimaryBtn";
import InputZ from "../formInputs/InputZ";

export interface FormData {
  email: string;
  fullname: string;
  username: string;
  password: string;
}
export const useSignupForm = () => {
  const [loading, setisLoading] = useState(false);
  const router = useRouter();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(userSchema),
  });

  const onSubmit = async (value: FormData) => {
    try {
      setisLoading(true);
      const response = await axios.post(`${URL}/api/user`, {
        email: value.email,
        fullname: value.fullname,
        username: value.username,
        password: value.password,
      });
      toast.success(`${response.data.message}`);
      reset();
      setisLoading(false);
      router.push("/signin");
    } catch (error: AxiosError | any) {
      console.log(error);
      toast.error(`${error?.response?.data.message}`);
      setisLoading(false);
    }
  };
  return {
    loading,
    errors,
    onSubmit,
    register,
    reset,
    handleSubmit,
  };
};
