import React from "react";
import EditingControls from "./editingControls";

export default function Sidebar() {
  return (
    <aside className="dark:bg-black  w-[15rem] md:w-[19rem] h-[90%]   overflow-y-scroll rounded-2xl  mr-3 no-scrollbar mt-8   ">
     

      <EditingControls />
      
    </aside>
  );
}
