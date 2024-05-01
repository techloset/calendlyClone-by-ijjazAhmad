import { TextWithIconProps } from "@/constants/types/allTypes";
import Image from "next/image";
import React from "react";

export default function TextWithIcon({ text, src }: TextWithIconProps) {
  return (
    <p className="text-lightBlack font-bold text-[14px] mb-2 flex items-center ">
      <Image src={src} alt="Logo" className="w-5 h-5 mr-1" /> {text}
    </p>
  );
}
