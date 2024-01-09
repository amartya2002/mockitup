import React from "react";
import EditingControls from "./editingControls";

export default function Bottombar() {
  return (
    <div className="bg-zin-50 w-full md:hidden  bottom-0 my-6 sticky ">
      <div className="bg-zinc-100 h-[5rem] w-[80%] mx-auto rounded-xl ">
        Editing Controls
      </div>
      {/* <EditingControls/> */}
    </div>
  );
}
