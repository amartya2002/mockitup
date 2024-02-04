import React from "react";
import EditingControls from "./editingControls";

export default function Bottombar() {
  return (
    <div className=" h-32 w-full bg-white bottom-10 fixed  border-t  overflow-auto  ">
      <EditingControls />
    </div>
  );
}
