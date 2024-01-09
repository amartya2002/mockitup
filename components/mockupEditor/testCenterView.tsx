"use client";
import React, { useState } from "react";
import { useDropzone } from "react-dropzone";
import { Button } from "../ui/button";
import usePaddingStore from "@/app/store/mockStore";

const ImageEditor = () => {
  const { paddingSize } = usePaddingStore();

  const [image, setImage] = useState<string | null>(null);
  const { getRootProps, getInputProps } = useDropzone({
    onDrop: (acceptedFiles) => {
      const file = acceptedFiles[0];
      const reader = new FileReader();

      reader.onload = (e) => {
        setImage(e.target.result);
      };

      reader.readAsDataURL(file);
    },
  });

  const resetImage = () => {
    setImage(null);
  };

  return (
    <div className="w-full bg-zin-200 py-4 px-8 mb-12">
      {!image ? (
        // Dropzone
        <div
          {...getRootProps()}
          className="w-72 mx-auto mt-6 justify-center items-center flex h-full"
        >
          <div className="flex flex-col items-center justify-center w-full h-32 rounded-xl cursor-pointer bg-zinc-50 hover:bg-zinc-100 border-b">
            <div className="flex flex-col items-center justify-center pt-5 pb-6">
              <svg
                className="w-10 h-10 mb-3 text-blue-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                ></path>
              </svg>
              <p className="mb-2 text-sm text-zinc-500 dark:text-zinc-400">
                <span className="font-semibold text-blue-500">
                  Click to upload
                </span>{" "}
                or drag and drop
              </p>
              <p className="text-xs text-zinc-500 dark:text-zinc-400">
                SVG, PNG, JPG or GIF (MAX. 800x400px)
              </p>
            </div>
            <input {...getInputProps()} type="file" className="hidden" />
          </div>
        </div>
      ) : (
        //  Image display
        <div className=" flex justify-center items-center max-w-xl  mx-auto h-full  ">
          <div
            className=" rounded-xl bg-stone-200 "
            style={{
              padding: `${paddingSize}px`,
            }}
          >
            <img src={image} alt="Uploaded" />
          </div>

          {/* Reset button */}
        </div>
      )}
      {image && <Button onClick={resetImage}>New Upload</Button>}
    </div>
  );
};

export default ImageEditor;
