"use client";
import React from "react";
import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
export default function LogoutBtn() {
  const router = useRouter();
  const logout = async () => {
    await signOut();
    toast.success("Logout successfull");
    router.push("/signin");
  };
  return (
    <button
      className="flex items-center  px-8 py-2 text-sm font-medium duration-300 ease-in-out hover:text-primary lg:text-base"
      onClick={logout}
    >
      Log Out
    </button>
  );
}