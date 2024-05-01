"use client";
import Image from "next/image";
import { logo } from "../../../../public/images";
import PrimaryBtn from "@/(components)/button/PrimaryBtn";
import Input from "@/(components)/formInputs/Input";
import { useForgotPassword } from "./useForgotPassword";
export default function ForgotPassword() {
  const { email, setEmail, loading, handleSubmit } = useForgotPassword();
  return (
    <div className="flex justify-center items-center flex-col w-full">
      <Image src={logo} alt="Logo" className="w-[182px] h-[48px] mt-[51px]" />
      <form className="px-[33px] mb-[33px] py-[33px] border border-borderClr-1 shadow-2 rounded-md w-[95%] sm:w-[440px] ">
        <div className="mb-[12px]">
          <Input
            label="Enter Email to ForgotPassword*"
            name="email"
            onChange={(e) => setEmail(e.target.value)}
            placeholder=""
            type="email"
            value={email}
          />
        </div>
        <div className="w-full h-[6px] bg-white-line my-3"></div>
        <div className="text-center">
          <PrimaryBtn loading={loading} onClick={handleSubmit} label="Send" />
        </div>
      </form>
    </div>
  );
}
