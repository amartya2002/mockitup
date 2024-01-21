import {
  useImageStore,
  useImgRoundedStore,
  usePaddingRoundedStore,
  usePaddingStore,
  useBorderStore,
  useColorStore
} from "@/app/store/mockupEditStore";
import React from "react";

export default function renderView() {
  const { paddingSize } = usePaddingStore();
  const { imgRounded } = useImgRoundedStore();
  const { paddingRounded } = usePaddingRoundedStore();
  const{innerBorderSize} = useBorderStore();
  const { image } = useImageStore();
  const{selectedColor} = useColorStore()
  const backgroundColor = 'linear-gradient(to right, rgba(0, 224, 255, 1), rgba(0, 133, 255, 1))';

  return (
    <div className=" flex justify-center items-center max-w-xl  mx-auto h-full  ">
      <div
        style={{
          padding: `${paddingSize}px`,
          borderRadius: `${paddingRounded}px`,
          background: selectedColor
        }}
      >
        <div className="bg-zinc-500/70 backdrop-blur-lg"
          style={{
            borderRadius: `${imgRounded}px`,
          // padding: `${innerBorderSize}px`,
          padding: `${innerBorderSize}px`,
         

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
    </div>
  );
}
