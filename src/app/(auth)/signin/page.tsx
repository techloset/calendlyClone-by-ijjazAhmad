"use client";
import Link from "next/link";
import Image from "next/image";
import { logo } from "../../../../public/images";
import PrimaryBtn from "@/(components)/button/PrimaryBtn";
import { useSignin } from "./useSignin";
import { signinFormData } from "@/constants/formData/formData";
export default function Signin() {
  const { loading, register, handleSubmit, errors, onSubmit } = useSignin();

  return (
    <div className="flex justify-center items-center flex-col w-full">
      <Image src={logo} alt="Logo" className="w-[182px] h-[48px] mt-[51px]" />
      <p className="my-[9px] font-bold text-[20px] text-center">
        Sign In with Calendly for <br /> free
      </p>
      <form className="px-[33px] mb-[33px] py-[33px] border border-borderClr-1 shadow-2 rounded-md w-[95%] sm:w-[440px] ">
        {signinFormData.map((val, i) => {
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
                {...register(val.name as "email" | "password")}
                placeholder={val.placeholder}
                type={val.type}
              />
              {errors[val.name as "email" | "password"] && (
                <p className="text-danger text-[10px] font-bold">
                  {errors[val.name as "email" | "password"]?.message}
                </p>
              )}
            </div>
          );
        })}
        <Link
          href={"/forgotpassword"}
          className="mt-[14px] flex flex-row-reverse  mb-[12px]  font-bold text-[12px]  text-primary"
        >
          Forgot Password
        </Link>
        <div className="w-full h-[6px] bg-white-line my-3"></div>
        <div className="text-center">
          <PrimaryBtn
            loading={loading}
            onClick={handleSubmit(onSubmit)}
            label="Sign In"
          />
        </div>

        <Link href={"/signup"}>
          <p className="mt-[27px]  font-normal text-[12px] text-center">
            If don't have an account<span className="text-primary">SignUp</span>
          </p>
        </Link>
      </form>
    </div>
  );
}
