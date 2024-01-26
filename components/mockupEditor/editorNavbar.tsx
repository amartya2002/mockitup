"use client";
import React, { useRef } from "react";
import Link from "next/link";
import ResetModal from "./resetModal";

export default function EditorNavbar() {


  return (
    <header>
      <div className="px-8 py-1.5 max-w-7xl mx-auto flex justify-between border items-center">
        <div>
          <Link href="/" className="font-medium text-xl font-sans">
            Mockup <span className="text-zinc-400">Editor</span>
          </Link>
        </div>
        <div>
          <ResetModal />


        </div>
      </div>
    </header>
  );
}
