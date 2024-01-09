import Sidebar from "./sidebar";
import CenterView from "./centerView";
import EditorNavbar from "./editorNavbar";
import Bottombar from "./bottombar";

export default function MockupEditor() {
  return (
    <>
      <EditorNavbar />
      <div className="flex ">
        <CenterView />
        <Sidebar />
      </div>
      <Bottombar />
    </>
  );
}
