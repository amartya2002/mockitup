import React from "react";
import { Button } from "../ui/button";


export default function EditorNavbar() {
  return (
    <header>
      <div className="px-8 py-1.5 max-w-7xl mx-auto flex justify-between border items-center">
        <div>
          <p className="font-medium text-xl font-sans">Mockup <span className="text-zinc-400">Editor</span></p>


        </div>
        <div>
            <Button>New Upload</Button>
            

        </div>
      </div>
    </header>
  );
}
