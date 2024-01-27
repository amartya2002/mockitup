import React from "react";
import EditingControls from "./editingControls";

export default function Sidebar() {
  return (
    <aside className="dark:bg-black/10  w-[15rem] md:w-[19rem] h-screen overflow-auto border-l dark:border-zinc-900 border-zinc-100  ">
      <EditingControls />
    </aside>
  );
}
