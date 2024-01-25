import {
  useImageStore,
  useColorStore,
  mockupStore
} from "@/app/store/mockupEditStore";
import React from "react";

export default function renderView() {


  const { image } = useImageStore();
  const { selectedColor } = useColorStore()
  const outerPadding = mockupStore((state) => state.outerPadding);
  const innerBorder = mockupStore((state) => state.innerBorder);
  const outerCornerRadius = mockupStore((state) => state.outerCornerRadius);
  const innerCornerRadius = mockupStore((state) => state.innerCornerRadius);
  const backgroundColor = 'linear-gradient(to right, rgba(0, 224, 255, 1), rgba(0, 133, 255, 1))';

  return (
    <div className=" flex justify-center items-center max-w-xl  mx-auto h-full  ">
      <div
        style={{
          padding: `${outerPadding}px`,
          borderRadius: `${outerCornerRadius}px`,
          background: selectedColor
        }}
      >
        <div className="bg-zinc-500/70 backdrop-blur-lg"
          style={{
            borderRadius: `${innerCornerRadius}px`,
            // padding: `${innerBorderSize}px`,
            padding: `${innerBorder}px`,


          }}
        >
          <img
            src={image || ""}
            alt="Uploaded"
            style={{
              borderRadius: `${innerCornerRadius}px`,
            }}
          />
        </div>
      </div>
    </div>
  );
}
