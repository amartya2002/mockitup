"use client";
import {
  useImageStore,
  useColorStore,
  mockupStore, 
} from "@/app/store/mockupEditStore";
import React, { useCallback, useRef } from "react";
import { toPng } from "html-to-image";



export default function RenderView() {
  const { image } = useImageStore();
  const { selectedColor } = useColorStore();
  const outerPadding = mockupStore((state) => state.outerPadding);
  const innerBorder = mockupStore((state) => state.innerBorder);
  const outerCornerRadius = mockupStore((state) => state.outerCornerRadius);
  const innerCornerRadius = mockupStore((state) => state.innerCornerRadius);
  const shadowx = mockupStore((state) => state.shadowx);
  const shadowy = mockupStore((state) => state.shadowy);
  const shadowz = mockupStore((state) => state.shadowz);
  const shadowk = mockupStore((state) => state.shadowk);

// Download
const ref = useRef<HTMLDivElement>(null)


const onButtonClick = useCallback(() => {

  if (ref.current === null) {
    return
  }
// isToggled=false
  toPng(ref.current, { cacheBust: true, })
    .then((dataUrl) => {
      const link = document.createElement('a')
      link.download = 'mockitup.png'
      link.href = dataUrl
      link.click()
    })
    .catch((err) => {
      console.log(err)
    })
}, [ref])

  return (
    <>
      <button onClick={onButtonClick}>Hello</button>

    <div className=" flex justify-center items-center max-w-xl  mx-auto h-full  ">
      <div ref={ref}
        style={{
          padding: `${outerPadding}px`,
          borderRadius: `${outerCornerRadius}px`,
          background: selectedColor,
        }}
      >
        <div
          className="bg-zinc-500/70 backdrop-blur-lg"
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
    </>
  );
}
