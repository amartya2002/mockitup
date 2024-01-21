"use client"
import React from "react";
import { Button } from "../ui/button";
import { useImageStore } from "@/app/store/mockupEditStore";
import Link from "next/link";


export default function EditorNavbar() {
  const { isUploaded } = useImageStore();
  const { resetImage } = useImageStore();

  const handleButtonClick = () => {
    // Call resetImage function from the store
    resetImage();
  };

  return (
    <header>
      <div className="px-8 py-1.5 max-w-7xl mx-auto flex justify-between border items-center">
        <div>
          <Link href="/" className="font-medium text-xl font-sans">Mockup <span className="text-zinc-400">Editor</span></Link>


        </div>
        <div>
            <Button onClick={handleButtonClick} size='sm' disabled={!isUploaded}>New Upload</Button>
            

        </div>
      </div>
    </header>
  );
}
