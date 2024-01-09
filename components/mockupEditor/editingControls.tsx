"use client";
import { Label } from "../ui/label";
import { Slider } from "../ui/slider";
import usePaddingStore from "@/app/store/mockStore";

export default function EditingControls() {
  const { paddingSize, setPaddingSize } = usePaddingStore();
  return (
    <div className="mb-4">
      <Label className="text-gray-600 block mb-2">Padding</Label>
      <Slider
        max={100}
        step={1}
        value={[paddingSize]}
        onValueChange={(newValue) => setPaddingSize(newValue[0])}
        className="w-full"
      />
    </div>
  );
}
