"use client";
import React, { useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { arrowClose, logo } from "../../../public/images";
interface SidebarProps {
  sidebarOpen: boolean;
  setSidebarOpen: (arg: boolean) => void;
  SidebarList: any;
}
export default function Togler({
  sidebarOpen,
  setSidebarOpen,
  SidebarList,
}: SidebarProps) {
  const trigger = useRef<any>(null);
  const sidebar = useRef<any>(null);
  useEffect(() => {
    const clickHandler = ({ target }: MouseEvent) => {
      if (!sidebar.current || !trigger.current) return;
      if (
        !sidebarOpen ||
        sidebar.current.contains(target) ||
        trigger.current.contains(target)
      )
        return;
      setSidebarOpen(false);
    };
    document.addEventListener("click", clickHandler);
    return () => document.removeEventListener("click", clickHandler);
  });
  return (
    <aside
      ref={sidebar}
      className={`absolute left-0 top-0 z-9999 flex h-screen w-[260px]  flex-col  bg-white-default duration-300 ease-linear lg:static lg:translate-x-0 ${
        sidebarOpen ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      <div className="flex items-center justify-between  bg-white-default">
        <Link href="/" className="py-[20px] ps-[20px] pe-[71px]">
          <Image width={132} height={32} src={logo} alt="Logo" priority />
        </Link>
        <button
          ref={trigger}
          onClick={() => setSidebarOpen(!sidebarOpen)}
          aria-controls="sidebar"
          aria-expanded={sidebarOpen}
          className="block pe-7"
        >
          <Image width={16} height={16} src={arrowClose} alt="close" priority />
        </button>
      </div>

      <div className="no-scrollbar flex flex-col overflow-y-auto duration-300 ease-linear bg-white">
        <SidebarList />
      </div>
    </aside>
  );
}
