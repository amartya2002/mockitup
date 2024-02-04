"use client";
import {
  useImageStore,
  useColorStore,
  mockupStore,
  useImageExportStore,
} from "@/app/store/mockupEditStore";
import { useEffect, useRef } from "react";

export default function RenderView() {
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

  ///// Previous Download Functionality//////
  // const ref = useRef<HTMLDivElement>(null);

  // const onButtonClick = useCallback(() => {

  //   if (ref.current === null) {
  //     return
  //   }
  //   toPng(ref.current, { cacheBust: true, })
  //     .then((dataUrl) => {
  //       const link = document.createElement('a')
  //       link.download = 'mockitup.png'
  //       link.href = dataUrl
  //       link.click()
  //     })
  //     .catch((err) => {
  //       console.log(err)
  //     })
  // }, [ref])

  return (
    // <div className=" flex justify-center items-center max-w-2xl  mx-auto h-full px-4 ">
    //   <div className="overflow-scrol" style={{
    //     //  width: `${zoom}px`
    //    }}>
    //     <div
    //       ref={divRef}
    //       style={{
    //         padding: `${outerPadding}px`,
    //         borderRadius: `${outerCornerRadius}px`,
    //         background: selectedColor,
    //       }}
    //     >
    //       <div
    //         className="bg-zinc-500/70 backdrop-blur-lg"
    //         style={{
    //           borderRadius: `${innerCornerRadius}px`,
    //           padding: `${innerBorder}px`,
    //           boxShadow: `${shadowx}px ${shadowy}px ${shadowz}px ${shadowk}px #000`,
    //         }}
    //       >
    //         <div className="overflow-sroll" >
    //           <img
    //             className=""
    //             src={image || ""}
    //             alt="Uploaded"
    //             style={{
    //               borderRadius: `${innerCornerRadius}px`,
    //             }}
    //           />
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>

    <div className=" flex justify-center items-center max-w-2xl  mx-auto h-full px-4 ">
      <div className="overflow-scrol " style={{
        //  width: `${zoom}px`
       }}>
        <div
          ref={divRef}
          className=""
          style={{
            padding: `${outerPadding}px`,
        

            borderRadius: `${outerCornerRadius}px`,
            background: selectedColor,
          }}
        >
          <div
            className="bg-zinc-500/70 backdrop-blur-lg "
            style={{
              borderRadius: `${innerCornerRadius}px`,
              padding: `${innerBorder}px`,
              boxShadow: `${shadowx}px ${shadowy}px ${shadowz}px ${shadowk}px #000`,

            }}
          >
            <div className="overflow-sroll " >
              <img
                className=" "
                src={image || ""}
                alt="Uploaded"
                style={{
                  borderRadius: `${innerCornerRadius}px`,
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


