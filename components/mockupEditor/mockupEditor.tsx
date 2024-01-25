import Sidebar from "./sidebar";
import CenterViewTest from "./centerViewTest";
import EditorNavbar from "./editorNavbar";
import Bottombar from "./bottombar";

export default function MockupEditor() {
  return (
    <>
      <EditorNavbar />
      <div className="flex ">
        <CenterViewTest/>
        {/* <Sidebar /> */}
      </div>
      <Bottombar />
    </>
  );
}
