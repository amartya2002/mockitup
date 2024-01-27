"use client";
import { useImageStore } from "@/app/store/mockupEditStore";
import Dropzone from "./dropzone";
import RenderView from "./renderView";
export default function CenterViewTest() {
  const { isUploaded } = useImageStore();

  return (
    <div className="w-full bg-zin-200 py-4 px-8 mb-12 ">
      {!isUploaded ? <Dropzone /> : <RenderView />}
    </div>
  );
}
