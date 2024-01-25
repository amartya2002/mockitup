import React from "react";
import { Label } from "../ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import EditingControls from "./editingControls";

export default function Sidebar() {
  return (
    <aside className="bg-zin-50 w-[15rem] md:w-[19rem] h-screen border-l-2 overflow-auto  ">
<EditingControls/>
    </aside>
  );
}
