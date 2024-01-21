"use client";
import { Label } from "../ui/label";
import { Slider } from "../ui/slider";
import { Input } from "@/components/ui/input"
import ColorSelector from "./colorSelector";
import {
  usePaddingStore,
  useImgRoundedStore,
  usePaddingRoundedStore,
  useBorderStore
} from "@/app/store/mockupEditStore";
import { ComboboxDemo } from "./paddingColorOptions";

export default function EditingControls() {
  const { paddingSize, setPaddingSize } = usePaddingStore();
  const { imgRounded, setImgRounded } = useImgRoundedStore();
  const { paddingRounded, setPaddingRounded } = usePaddingRoundedStore();
  const { innerBorderSize, setInnerBorderSize } = useBorderStore();
  return (
    <>
      <div className="pt-8 px-6 space-y-8">
        <div>
          <Label className="text-gray-600 block mb-3">Padding Color</Label>
          <ColorSelector/>

        </div>

        <div >
          <Label className="text-gray-600 block mb-6">Padding</Label>
          <Slider
            max={100}
            step={1}
            value={[paddingSize]}
            onValueChange={(newValue) => setPaddingSize(newValue[0])}
            className="w-full"
          />
        </div>

        <div >
          <Label className="text-gray-600 block mb-6">
            Padding Corner Radius
          </Label>
          <Slider
            max={100}
            step={1}
            value={[paddingRounded]}
            onValueChange={(newValue) => setPaddingRounded(newValue[0])}
            className="w-full"
          />
        </div>

        <div >
          <Label className="text-gray-600 block mb-6">
            Image Corner Radius
          </Label>
          <Slider
            max={100}
            step={1}
            value={[imgRounded]}
            onValueChange={(newValue) => setImgRounded(newValue[0])}
            className="w-full"
          />
        </div>

        <div >
          <Label className="text-gray-600 block mb-6">
            Border
          </Label>
          <Slider
            max={100}
            step={1}
            value={[innerBorderSize]}
            onValueChange={(newValue) => setInnerBorderSize(newValue[0])}
            className="w-full"
          />
        </div>
      </div>
    </>
  );
}
