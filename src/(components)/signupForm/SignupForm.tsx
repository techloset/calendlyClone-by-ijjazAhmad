"use client";
import Link from "next/link";
import PrimaryBtn from "../button/PrimaryBtn";
import { useSignupForm } from "./useSignupForm";
import { signupFormData } from "@/constants/formData/formData";

export default function SignupForm() {
  const { loading, onSubmit, errors, register, handleSubmit } = useSignupForm();
  return (
    <form className="px-[33px] mb-[33px] py-[33px] border border-borderClr-1 shadow-2 rounded-md w-[95%] sm:w-[440px] ">
      <div className="mb-[12px]">
        {signupFormData.map((val, i) => {
          return (
            <div key={i} className="mb-[12px]">
              <label
                htmlFor={val.name}
                className="text-black font-bold text-sm"
              >
                {val.label}
              </label>
              <input
                className="px-[15px] py-[14px] mt-[8px] w-full border border-borderClr-2 rounded-lg text-black font-normal text-[16px]"
                style={{ outline: "none" }}
                {...register(
                  val.name as "email" | "fullname" | "username" | "password"
                )}
                placeholder={val.placeholder}
                type={val.type}
              />
              {errors[
                val.name as "email" | "fullname" | "username" | "password"
              ] && (
                <p className="text-danger text-[10px] font-bold">
                  {
                    errors[
                      val.name as "email" | "fullname" | "username" | "password"
                    ]?.message
                  }
                </p>
              )}
            </div>
          );
        })}
      </div>
      <div className="w-full h-[6px] bg-white-line mb-3"></div>

      <p className="font-normal text-danger  text-[12px]">
        Use a few words, avoid common phrases. No need for symbols, digits, or
        uppercase letters
      </p>

      <p className="mt-[27px] mb-[12px] font-normal text-[12px] text-center">
        By creating a Calendly account, you agree to
        <span className="text-primary">Calendlys Terms</span> and
        <span className="text-primary ">Privacy Policy</span>
      </p>
      <div className="text-center">
        <PrimaryBtn
          loading={loading}
          onClick={handleSubmit(onSubmit)}
          label="Sign Up"
        />
      </div>
      <Link href={"/signin"}>
        <p className="mt-[27px]  font-normal text-[12px] text-center">
          If already have an account<span className="text-primary">SignIn</span>
        </p>
      </Link>
    </form>
  );
}
