import Sidebar from "./sidebar";
import CenterView from "./centerView";
import CenterViewTest from "./centerViewTest";
import EditorNavbar from "./editorNavbar";
import Bottombar from "./bottombar";

export default function MockupEditor() {
  return (
    <>
      <EditorNavbar />
      <div className="flex ">
        {/* <CenterView /> */}
        <CenterViewTest/>
        <Sidebar />
      </div>
      <Bottombar />
    </>
  );
}
