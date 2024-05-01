import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  adminCenter,
  analytics,
  clock,
  events,
  plus,
} from "../../../public/images";
import SidebarBtn from "../button/SidebarBtn";

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
            <li>
              <SidebarBtn href={"/scheduledevents"} label={"Scheduled Events"} src={events} />
            </li>
            <li>
              <SidebarBtn
                href={"/analytic"}
                label={"Analytics"}
                src={analytics}
              />
            </li>
          </ul>
          <ul>
            <li>
              <SidebarBtn
                href={"/setavailability"}
                label={"Set Availability"}
                src={clock}
              />
            </li>
            <li>
              <SidebarBtn
                href={"/setavailability"}
                label={"Admin Center"}
                src={adminCenter}
              />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
