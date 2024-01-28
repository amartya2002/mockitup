"use client";
import { useImageStore } from "@/app/store/mockupEditStore";
import Dropzone from "./dropzone";
import RenderViewTest from "./renderViewTest";
export default function CenterViewTest() {
  const { isUploaded } = useImageStore();

  return (
    <div className="w-full ">
      {!isUploaded ? <Dropzone /> : <RenderViewTest />}
    </div>
  );
}
