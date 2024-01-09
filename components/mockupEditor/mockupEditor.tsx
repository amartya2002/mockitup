import React from "react";
import Sidebar from "./sidebar";
import CenterView from "./centerView";
import EditorNavbar from "./editorNavbar";

export default function MockupEditor() {
  return (
    <>
    <EditorNavbar/>
      <div className="flex ">
<CenterView/>
<Sidebar/>
      </div>
    </>
  );
}
