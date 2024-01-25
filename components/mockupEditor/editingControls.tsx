"use client";
import { Label } from "../ui/label";
import { Slider } from "../ui/slider";
import { Input } from "@/components/ui/input";
import ColorSelector from "./colorSelector";
import { mockupStore } from "@/app/store/mockupEditStore";
import { ComboboxDemo } from "./paddingColorOptions";

export default function EditingControls() {
  const outerCornerRadius = mockupStore((state) => state.outerCornerRadius);
  const outerPadding = mockupStore((state) => state.outerPadding);
  const innerBorder = mockupStore((state) => state.innerBorder);
  const innerCornerRadius = mockupStore((state) => state.innerCornerRadius);

  return (
    <>
      <div className="pt-8 px-6 space-y-8">
        <div>
          <Label className="text-gray-600 block mb-3">Padding Color</Label>
          <ColorSelector />
        </div>

        {/* Outer Padding */}
        <div>
          <Label className="text-gray-600 block mb-6">Padding</Label>
          <Slider
            max={100}
            step={1}
            value={[outerPadding]}
            onValueChange={([outerPadding]) =>
              mockupStore.setState({ outerPadding })
            }
            className="w-full"
          />
        </div>

        {/* Outer Corner Radius  */}
        <div>
          <Label className="text-gray-600 block mb-6">
            Outer Corner Radius
          </Label>
          <Slider
            max={100}
            step={1}
            value={[outerCornerRadius]}
            onValueChange={([outerCornerRadius]) =>
              mockupStore.setState({ outerCornerRadius })
            }
            className="w-full"
          />
        </div>

        {/* Inner Border */}
        <div>
          <Label className="text-gray-600 block mb-6">Image Border</Label>
          <Slider
            max={100}
            step={1}
            value={[innerBorder]}
            onValueChange={([innerBorder]) =>
              mockupStore.setState({ innerBorder })
            }
            className="w-full"
          />
        </div>

        {/* Inner Corner Radius */}
        <div>
          <Label className="text-gray-600 block mb-6">
            Image Corner Radius
          </Label>
          <Slider
            max={100}
            step={1}
            value={[innerCornerRadius]}
            onValueChange={([innerCornerRadius]) =>
              mockupStore.setState({ innerCornerRadius })
            }
            className="w-full"
          />
        </div>
      </div>
    </>
  );
}
