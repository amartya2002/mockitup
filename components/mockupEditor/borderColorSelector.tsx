import React from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useColorStore } from "@/app/store/mockupEditStore";
import colorOptions from "@/lib/colors.json"



export default function BorderColorSelector() {
  const { borderColor, setBorderColor } = useColorStore();

  return (
    <Select value={borderColor} onValueChange={setBorderColor}>
      <SelectTrigger className="rounded-lg max-w-48  ">
        <SelectValue placeholder="Select a color"/>
      </SelectTrigger>
      <SelectContent className="rounded-xl shadow-none dark:bg-black ">
        <SelectGroup>
          <SelectLabel>Gradients</SelectLabel>


          <SelectLabel>Solid</SelectLabel>
          {colorOptions["border-solid"].map((option, index) => (
            <SelectItem
              key={index}
              value={option.color}
              defaultChecked
              className="h-12 rounded-xl hover:scale-95 duration-200"
            >
              <div className="flex items-center gap-2">
                <div
                  className="rounded-full h-6 w-6"
                  style={{ background: option.color }}
                ></div>
                {option.label}
              </div>
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
