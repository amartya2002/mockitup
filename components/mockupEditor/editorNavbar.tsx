"use client";
import React from "react";
import Link from "next/link";
import ResetModal from "./resetModal";
import { Button } from "../ui/button";
import { useImageExportStore } from "@/app/store/mockupEditStore";
import { DownloadIcon } from "@radix-ui/react-icons";
import { ModeToggle } from "../ui/theme-toggle";

export default function EditorNavbar() {
  const { exportImage } = useImageExportStore();

  return (
    <header className="fixe w-full ">
      <div className="px-3 sm:px-8 py-2 max-w-7xl mx-auto flex justify-between items-center ">
        <div>
          <Link href="/" className="font-medium text-xl font-sans">
            Mockup <span className="text-zinc-400">Editor</span>
          </Link>
        </div>
        <div className="gap-2 items-center flex">
          <ResetModal />
          <Button
            className="border-2 border-zinc-200 px-4 rounded-lg shadow-none"
            size="sm"
            onClick={exportImage}
            variant="default"
          >
            Export&nbsp;
            <DownloadIcon height={14} />
          </Button>
          <ModeToggle />
        </div>
      </div>
    </header>
  );
}
