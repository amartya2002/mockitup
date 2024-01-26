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
    label: "Color 1",
    gradient: "red",
  },
  {
    value: "color2",
    label: "Color 2",
    gradient:
      "linear-gradient(to right, rgba(255, 193, 7, 1), rgba(255, 87, 34, 1))",
  },
  {
    value: "color3",
    label: "Color 3",
    gradient:
      "linear-gradient(to right, rgba(139, 195, 74, 1), rgba(76, 175, 80, 1))",
  },
  {
    value: "color4",
    label: "Color 4",
    gradient:
      "linear-gradient(to right, rgba(255, 87, 34, 1), rgba(255, 193, 7, 1))",
  },
  {
    value: "color5",
    label: "Color 5",
    gradient:
      "linear-gradient(to right, rgba(255, 152, 0, 1), rgba(255, 87, 34, 1))",
  },
  {
    value: "color6",
    label: "Color 6",
    gradient:
      "linear-gradient(to right, rgba(233, 30, 99, 1), rgba(156, 39, 176, 1))",
  },
];

export default function ColorSelector() {
  const { selectedColor, setSelectedColor } = useColorStore();

  return (
    <Select value={selectedColor} onValueChange={setSelectedColor}>
      <SelectTrigger
        className="w[50px]"
        style={{
          background: selectedColor,
        }}
      >
        <SelectValue placeholder="Select a color"></SelectValue>
      </SelectTrigger>
      <SelectContent className="w6">
        <SelectGroup className="">
          <SelectLabel>Gradients</SelectLabel>

          {colorOptions.map((option) => (
            <SelectItem
              key={option.label}
              value={option.gradient}
              style={{ background: option.gradient }}
              className="h-6 mb-1.5 rounded hover:scale-95 duration-150"
            />
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
