import Image from "next/image";
import Link from "next/link";
import React from "react";
type SidebarBtnProps = {
  href: string;
  src: string;
  label: string;
};
export default function SidebarBtn({ href, src, label }: SidebarBtnProps) {
  return (
    <>
      <Link
        href={href}
        className="group relative flex items-center gap-5 rounded-lg px-4 py-2 font-bold text-sm text-black duration-300 ease-in-out hover:bg-gray hover:text-primary focus:bg-gray focus:text-primary"
      >
        <Image width={16} height={16} src={src} alt="+" priority />
        {label}
      </Link>
    </>
  );
}
