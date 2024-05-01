"use client";
import React from "react";
import toast from "react-hot-toast";
type CopyLinkProps = {
  link: string;
};
export default function CopyLink({ link }: CopyLinkProps) {
  const copyLink = () => {
    const url =
      "https://chat.openai.com/c/8fa22a00-0e3c-4091-a4e8-f76226854f3b";

    navigator.clipboard
      .writeText(url)
      .then(() => {
        toast.success("Link copied to clipboard!");
      })
      .catch((err) => {
        toast.error("Error copying link: ", err);
      });
  };
  return (
    <button
      className=" rounded-lg px-4 py-2 font-bold text-sm text-black duration-300 ease-in-out bg-gray hover:bg-primary hover:text-white-default focus:bg-gray focus:text-primary"
      onClick={copyLink}
    >
      Copy Link
    </button>
  );
}
