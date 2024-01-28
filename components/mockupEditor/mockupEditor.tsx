import Sidebar from "./sidebar";
import CenterViewTest from "./centerViewTest";
import EditorNavbar from "./editorNavbar";
import Bottombar from "./bottombar";

export default function MockupEditor() {
  return (
    <>
      <EditorNavbar />
      <div className="flex  mb-12 h-[90vh]">
        <CenterViewTest />
        <div className="hidden md:block">
          <Sidebar />
        </div>
      </div>
      {/* <div className="md:hidden">
        <Bottombar />
      </div> */}
    </>
  );
}
