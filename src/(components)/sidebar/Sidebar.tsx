import React from "react";
import Togler from "./Togler";
import SidebarList from "./SidebarList";

interface SidebarProps {
  sidebarOpen: boolean;
  setSidebarOpen: (arg: boolean) => void;
}

const Sidebar = ({ sidebarOpen, setSidebarOpen }: SidebarProps) => {
  return (
    <Togler
      SidebarList={SidebarList}
      setSidebarOpen={setSidebarOpen}
      sidebarOpen={sidebarOpen}
    />
  );
};

export default Sidebar;
