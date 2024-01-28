"use client";
import {
  useImageStore,
  useColorStore,
  mockupStore,
  useImageExportStore,
} from "@/app/store/mockupEditStore";
import { useEffect, useRef } from "react";

export default function RenderViewTest() {
  const divRef = useRef(null);

  // Current Download Functionality Starts
  const { setTargetDivRef } = useImageExportStore();

  useEffect(() => {
    setTargetDivRef(divRef.current);
  }, [setTargetDivRef]);
  // Current Download Functionality Ends

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
  const zoom = mockupStore((state) => state.zoom);

  return (
    // <div
    //   className=" flex justify-center items-center ]  mx-auto h-full px-4  "
    //   style={{
    //     // width: `${zoom}px`,

    //   }}
    // >
    //   <div
    //   ref={divRef}

    //     className=""
    //     style={{
    //       padding: `${outerPadding}px`,
    //       borderRadius: `${outerCornerRadius}px`,
    //     background: selectedColor,

    //     }}
    //   >
    //     <div
    //       className="bg-zinc-500/70 backdrop-blur-lg "
    //       style={{
    //         borderRadius: `${innerCornerRadius}px`,
    //         padding: `${innerBorder}px`,
    //         boxShadow: `${shadowx}px ${shadowy}px ${shadowz}px ${shadowk}px #000`,
    //       }}
    //     >
    //       <div className="">
    //         <img
    //           className=""
    //           src={image || ""}
    //           alt="Uploaded"
    //           style={{
    //             borderRadius: `${innerCornerRadius}px`,
    //           }}
    //         />
    //       </div>
    //     </div>
    //   </div>
    // </div>

    <>
      {/* <div
        ref={divRef}
        className="w-full h-full"
        style={{
          background: selectedColor,
        }}
      >
        <div className="flex justify-center items-center h-full ">
          <div className="w-[90%] h-[90%] items-center justify-center flex ">
            <img
              // src="https://picsum.photos/1200/1200"
              src={image || ""}
              className="max-h-[100%] max-w-[100%] mx-auto"
              style={{
                border: `${innerBorder}px solid gray`,
                borderRadius: `${innerCornerRadius}px`,
                boxShadow: `${shadowx}px ${shadowy}px ${shadowz}px ${shadowk}px #000`,
              }}
            />
          </div>
        </div>
      </div> */}

      <div className="flex justify-center items-center h-full w-full">
        <div
          className="w-[70%] h-[70%] items-center justify-center flex  "
          ref={divRef}
          style={{
            background: selectedColor,
            padding: `${outerPadding}px`,
          }}
        >
          <img
            src={image || ""}
            className="max-h-[100%] max-w-[100%] mx-auto "
            style={{
              border: `${innerBorder}px solid #a9a9a9`,
              borderRadius: `${innerCornerRadius}px`,
              boxShadow: `${shadowx}px ${shadowy}px ${shadowz}px ${shadowk}px #000`,
            }}
          />
        </div>
      </div>
    </>
  );
}
