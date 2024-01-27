"use client";
import React from "react";
import Link from "next/link";
import ResetModal from "./resetModal";
import { Button } from "../ui/button";
import { useImageExportStore } from "@/app/store/mockupEditStore";

export default function EditorNavbar() {
  const { exportImage } = useImageExportStore();

  return (
    <header>
      <div className="px-8 py-1.5 max-w-7xl mx-auto flex justify-between border items-center">
        <div>
          <Link href="/" className="font-medium text-xl font-sans">
            Mockup <span className="text-zinc-400">Editor</span>
          </Link>
        </div>
        <div className="space-x-2">
          <ResetModal />
          <Button size="sm" onClick={exportImage}>
            Export
          </Button>
        </div>
      </div>
    </header>
  );
}
