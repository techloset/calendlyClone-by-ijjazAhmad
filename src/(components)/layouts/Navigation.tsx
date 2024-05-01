"use client";
import React, { useState} from "react";
import Sidebar from "@/(components)/sidebar/Sidebar";
import Header from "@/(components)/header/Header";

export default function Navigation({main}: any): React.JSX.Element {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      <div className="relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden">
        <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        {main}
      </div>
    </div>
  );
}
