import { HeadingProps } from "@/constants/types/allTypes";
import React from "react";

export default function Heading({ text, size }: HeadingProps) {
  return (
    <h1 className={`text-black font-extrabold  mb-2 flex items-center ${size}`}>
      {text}
    </h1>
  );
}
