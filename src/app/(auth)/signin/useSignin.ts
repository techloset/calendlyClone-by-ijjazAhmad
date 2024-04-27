"use client";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { userSigninSchema } from "@/constants/ValidationSchema/FormSchema";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { signIn } from "next-auth/react";
interface FormData {
  email: string;
  password: string;
}
export const useSignin = () => {
  const [loading, setisLoading] = useState(false);
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(userSigninSchema),
  });

  const onSubmit = async (value: FormData) => {
    setisLoading(true);
    const signinData = await signIn("credentials", {
      email: value.email,
      password: value.password,
      redirect: false,
    });
    if (signinData?.error) {
      toast.error(`${signinData.error}`);
      setisLoading(false);
    } else {
      toast.success("User login successfuly");
      setisLoading(false);
      router.push("/");
    }
  };

  return {
    loading,
    register,
    handleSubmit,
    errors,
    onSubmit,
  };
};
