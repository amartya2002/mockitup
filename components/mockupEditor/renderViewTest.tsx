"use client";
import { Resizable } from "re-resizable";

import {
  useImageStore,
  useColorStore,
  mockupStore,
  useImageExportStore,
  useExportOptionsStore,
} from "@/app/store/mockupEditStore";
import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { Button } from "../ui/button";
import { ResetIcon } from "@radix-ui/react-icons";
import ExportOptions from "./exportOptions";

export default function RenderViewTest() {
  const divRef = useRef(null);

  // Current Download Functionality Starts
  // const { setTargetDivRef } = useImageExportStore();

  // useEffect(() => {
  //   setTargetDivRef(divRef.current);
  // }, [setTargetDivRef]);
  // Current Download Functionality Ends

  const { setDivRef } = useExportOptionsStore();

  useEffect(() => {
    if (divRef.current !== null) {
      setDivRef(divRef);
    }
  }, [divRef, setDivRef]);

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
  // const [width, setWidth] = useState("auto");
  // const [height, setHeight] = useState("auto");
  const [width, setWidth] = useState<any>("any");
  const [height, setHeight] = useState<any>("auto");
  const [showWidth, setShowWidth] = useState(false);

  return (
    <>
      <main className="min-h-screen flex justify-center items-center  ">
       
        <Resizable
          enable={{ left: true, right: true }}
          maxWidth={650}
          minWidth={outerPadding * 2}
          size={{ width, height }}
          onResize={(e, dir, ref) => setWidth(ref.offsetWidth)}
          onResizeStart={() => setShowWidth(true)}
          onResizeStop={() => setShowWidth(false)}
        >
          <div className="rounded-2xl shadow-lg p-2 " 
          style={{
            background: selectedColor
          }}>
            <div
              className="overflow-hidden mb-2 transition-all ease-out flex justify-center items-center "
              style={{
                background: selectedColor,
                padding: `${outerPadding}px`,
              }}
              ref={divRef}
            >
              <div
                className="transition-all ease-out"
                style={{
                  background: "gray",
                  padding: `${innerBorder}px`,
                  borderRadius: `${innerCornerRadius}px`,
                  boxShadow: `${shadowx}px ${shadowy}px ${shadowz}px ${shadowk}px #000`,
                }}
              >
                <img
                  src={image || ""}
                  className="transition-all ease-out"
                  style={{
                    borderRadius: `${innerCornerRadius}px`,
                  }}
                />
                {/* <div className="bg-red-400 w-72 h-72">

              </div> */}
              </div>
            </div>
          </div>

          <Button className="mt-6 justify-center w-full" size="sm" onClick={() => setWidth("auto")} variant="ghost">
            <ResetIcon className="mr-2" />
            Reset width
          </Button>
        </Resizable>
   
    
      </main>
    </>
  );
}
