import { useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { arrowDown } from "../../../public/images";
import LogoutBtn from "../button/LogoutBtn";
import SidebarBtn from "../button/SidebarBtn";
const DropdownUserData = [
  {
    href: "/Profile",
    label: "Profile",
  },
  {
    href: "/scheduledevents",
    label: "Events",
  },
];
const DropdownUser = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const trigger = useRef<any>(null);
  const dropdown = useRef<any>(null);
  return (
    <div className="relative">
      <Link
        ref={trigger}
        onClick={() => setDropdownOpen(!dropdownOpen)}
        className="flex items-center gap-1"
        href="#"
      >
        <span className="h-33 w-33 rounded-full">
          <Image
            width={33}
            height={33}
            src={"/images/user/user.jpg"}
            alt="User"
            className="rounded-full"
          />
        </span>

        <Image width={16} height={16} src={arrowDown} alt="User" />
      </Link>
      <div
        ref={dropdown}
        onFocus={() => setDropdownOpen(true)}
        onBlur={() => setDropdownOpen(false)}
        className={`absolute right-0 mt-4 flex w-62.5 flex-col  rounded-sm border border-stroke bg-white-default shadow-default ${
          dropdownOpen === true ? "block" : "hidden"
        }`}
      >
        <ul className="flex flex-col  border-b border-stroke px-8 py-7.5 ">
          {DropdownUserData.map(({ href, label }) => (
            <li key={href}>
              <SidebarBtn href={href} label={label} src="" />
            </li>
          ))}
        </ul>
        <LogoutBtn />
      </div>
    </div>
  );
};

export default DropdownUser;
