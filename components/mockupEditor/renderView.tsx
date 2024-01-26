import {
  useImageStore,
  useColorStore,
  mockupStore
} from "@/app/store/mockupEditStore";
import React from "react";

export default function RenderView() {


  const { image } = useImageStore();
  const { selectedColor } = useColorStore()
  const outerPadding = mockupStore((state) => state.outerPadding);
  const innerBorder = mockupStore((state) => state.innerBorder);
  const outerCornerRadius = mockupStore((state) => state.outerCornerRadius);
  const innerCornerRadius = mockupStore((state) => state.innerCornerRadius);

  const shadowx = mockupStore((state) => state.shadowx);
  const shadowy = mockupStore((state) => state.shadowy);
  const shadowz = mockupStore((state) => state.shadowz);
  const shadowk = mockupStore((state) => state.shadowk);


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
            boxShadow: `${shadowx}px ${shadowy}px ${shadowz}px ${shadowk}px #000`,


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
