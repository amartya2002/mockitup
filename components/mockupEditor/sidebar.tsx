import React from "react";
import { Label } from "../ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import EditingControls from "./editingControls";

export default function idebar() {
  return (
    <aside className="bg-zin-50 w-72 h-screen border-l-2  ">
<EditingControls/>
    </aside>
  );
}
