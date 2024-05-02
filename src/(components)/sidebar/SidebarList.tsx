import React from "react";
import Link from "next/link";
import Image from "next/image";
import SidebarBtn from "../button/SidebarBtn";
import {
  adminCenter,
  analytics,
  clock,
  events,
  plus,
} from "../../../public/images";
const sidebarData = [
  {
    href: "/scheduledevents",
    label: "Scheduled Events",
    src: events,
  },
  {
    href: "/analytic",
    label: "Analytics",
    src: analytics,
  },
  {
    href: "/setavailability",
    label: "Set Availability",
    src: clock,
  },
  {
    href: "#",
    label: "Admin Center",
    src: adminCenter,
  },
];


export default function SidebarList() {
  return (
    <nav className=" px-2">
      <div>
        <Link
          href={"#"}
          className="flex items-center justify-center bg-primary text-white-default w-full rounded-[40px] px-[11px] py-[17px] my-[10px] text-center"
        >
          <Image width={16} height={16} src={plus} alt="+" priority />
          Create
        </Link>
        <div className="relative h-[78vh] flex flex-col justify-between">
          <ul>
            {sidebarData.map((val, i) => (
              <li key={i}>
                <SidebarBtn href={val.href} label={val.label} src={val.src} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}
