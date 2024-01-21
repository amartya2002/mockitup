import {
  useImageStore,
  useImgRoundedStore,
  usePaddingRoundedStore,
  usePaddingStore,
} from "@/app/store/mockupEditStore";
import React from "react";

export default function renderView() {
  const { paddingSize } = usePaddingStore();
  const { imgRounded } = useImgRoundedStore();
  const { paddingRounded } = usePaddingRoundedStore();
  const { image } = useImageStore();

  return (
    <div className=" flex justify-center items-center max-w-xl  mx-auto h-full  ">
      <div
        className=" rounded-xl bg-stone-200 "
        style={{
          padding: `${paddingSize}px`,
          borderRadius: `${paddingRounded}px`,
        }}
      >
        <img
          src={image || ""}
          alt="Uploaded"
          style={{
            borderRadius: `${imgRounded}px`,
          }}
        />
      </div>
    </div>
  );
}
