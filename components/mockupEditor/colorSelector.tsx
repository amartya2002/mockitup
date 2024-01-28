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

const colorOptions = [
  {
    value: "color1",
    label: "Sepia",
    gradient: "red",
  },
  {
    value: "color2",
    label: "Astor",
    gradient:
      "linear-gradient(to right, rgba(255, 193, 7, 1), rgba(255, 87, 34, 1))",
  },
  {
    value: "color3",
    label: "Valia",
    gradient:
      "linear-gradient(to right, rgba(139, 195, 74, 1), rgba(76, 175, 80, 1))",
  },
  {
    value: "color4",
    label: "Hyper",
    gradient:
      "linear-gradient(to right, rgba(255, 87, 34, 1), rgba(255, 193, 7, 1))",
  },
  {
    value: "color5",
    label: "Greysock",
    gradient:
      "linear-gradient(to right, rgba(255, 152, 0, 1), rgba(255, 87, 34, 1))",
  },
  {
    value: "color6",
    label: "Watershed Watershed",
    gradient:
      "linear-gradient(to right, rgba(233, 30, 99, 1), rgba(156, 39, 176, 1))",
  },
];

export default function ColorSelector() {
  const { selectedColor, setSelectedColor } = useColorStore();

  return (
    <Select value={selectedColor} onValueChange={setSelectedColor}>
      <SelectTrigger className="rounded-lg max-w-32  ">
        <SelectValue placeholder="Select a color"/>
      </SelectTrigger>
      <SelectContent className="rounded-xl shadow-none dark:bg-black ">
        <SelectGroup>
          <SelectLabel>Gradients</SelectLabel>

          {colorOptions.map((option) => (
            <SelectItem
              key={option.label}
              value={option.gradient}
              className="h-12 rounded-xl hover:scale-95 duration-200"
            >
              <div className="flex items-center gap-2">
                <div
                  className="rounded-full h-6 w-6"
                  style={{ background: option.gradient }}
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
