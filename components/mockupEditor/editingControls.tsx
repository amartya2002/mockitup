"use client";
import { Label } from "../ui/label";
import { Slider } from "../ui/slider";
import { Input } from "@/components/ui/input";
import ColorSelector from "./colorSelector";
import { mockupStore } from "@/app/store/mockupEditStore";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { ComboboxDemo } from "./paddingColorOptions";

export default function EditingControls() {
  const outerCornerRadius = mockupStore((state) => state.outerCornerRadius);
  const outerPadding = mockupStore((state) => state.outerPadding);
  const innerBorder = mockupStore((state) => state.innerBorder);
  const innerCornerRadius = mockupStore((state) => state.innerCornerRadius);
  const shadowx = mockupStore((state) => state.shadowx);
  const shadowy = mockupStore((state) => state.shadowy);
  const shadowz = mockupStore((state) => state.shadowz);
  const shadowk = mockupStore((state) => state.shadowk);



  return (
    <>
      <div className="py-8 px-6 space-y-8">
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

        {/* Shadow */}


        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger>Shadow Options</AccordionTrigger>
            <AccordionContent>
              <div className="space-y-6">
              <div>
                <Label className="text-gray-600 block mb-6">
                  Shadowx
                </Label>
                <Slider
                  max={100}
                  step={1}
                  value={[shadowx]}
                  onValueChange={([shadowx]) =>
                    mockupStore.setState({ shadowx })
                  }
                  className="w-full"
                />
              </div>
              <div>
                <Label className="text-gray-600 block mb-6">
                  Shadowy
                </Label>
                <Slider
                  max={100}
                  step={1}
                  value={[shadowy]}
                  onValueChange={([shadowy]) =>
                    mockupStore.setState({ shadowy })
                  }
                  className="w-full"
                />
              </div>
              <div>
                <Label className="text-gray-600 block mb-6">
                  Shadowz
                </Label>
                <Slider
                  max={100}
                  step={1}
                  value={[shadowz]}
                  onValueChange={([shadowz]) =>
                    mockupStore.setState({ shadowz })
                  }
                  className="w-full"
                />
              </div>
              <div>
                <Label className="text-gray-600 block mb-6">
                  ShadowK
                </Label>
                <Slider
                  max={100}
                  min={-100}
                  step={1}
                  value={[shadowk]}
                  onValueChange={([shadowk]) =>
                    mockupStore.setState({ shadowk })
                  }
                  className="w-full"
                />
              </div>
              </div>
             
            </AccordionContent>
          </AccordionItem>
        </Accordion>






      </div>
    </>
  );
}
