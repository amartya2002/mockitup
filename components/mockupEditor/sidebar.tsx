import React from "react";
import EditingControls from "./editingControls";

export default function Sidebar() {
  return (
    <aside className="bg-zin-50 w-[15rem] md:w-[19rem] h-screen border-l-2 overflow-auto  ">
      <EditingControls />
    </aside>
  );
}
