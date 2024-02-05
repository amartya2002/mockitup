"use client";
import MockupEditor from "@/components/mockupEditor/mockupEditor";
import { useMediaQuery } from "react-responsive";

export default function Home() {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1000px)" });

  return (
    <div>
      {isTabletOrMobile ? (
        <div className="flex justify-center items-center h-screen">
         <div className=" p-6 ">
      <h1 className="text-3xl font-semibold mb-2">Mobile View is <span className="italic text-red-500">almost ready</span>.</h1>
      <p className=" text-zinc-500 font-sans dark:text-zinc-400">
        We're working on a fantastic mobile experience for you. For now, please enjoy our website on your desktop browser.
      </p>
    </div>
        </div>
      ) : (
        <MockupEditor />
      )}
    </div>
  );
}
