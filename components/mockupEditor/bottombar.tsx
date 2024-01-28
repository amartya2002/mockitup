import React from "react";
import EditingControls from "./editingControls";

export default function Bottombar() {
  return (
    <div className=" h-72 w-full  bottom-10 fixed  border-t  overflow-auto  ">
      <EditingControls />
    </div>
  );
}
