import { DownloadIcon, ImageIcon, Share2Icon } from "@radix-ui/react-icons";
import { Button } from "../ui/button";
import { toast } from "sonner";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { toBlob, toPng, toSvg } from "html-to-image";
import { useHotkeys } from "react-hotkeys-hook";
import { useExportOptionsStore } from "@/app/store/mockupEditStore";

export default function ExportOptions() {
  const { divRef } = useExportOptionsStore();

  //   const copyImage = async () => {
  //     try {
  //       const imgBlob = await toBlob(divRef.current, {
  //         pixelRatio: 2,
  //       });
  //       const img = new ClipboardItem({ "image/png": imgBlob });
  //       navigator.clipboard.write([img]);

  //       toast.success("Image copied to clipboard!");
  //     } catch (error) {
  //       toast.error("Something went wrong!");
  //     }
  //   };

  const copyImage = async () => {
    try {
      const imgBlob = await toBlob(divRef.current, {
        pixelRatio: 6,
      });
      if (imgBlob) {
        const img = new ClipboardItem({ "image/png": imgBlob });
        navigator.clipboard.write([img]);
        toast.success("Image copied to clipboard!");
      } else {
        toast.error("Failed to copy image to clipboard.");
      }
    } catch (error) {
      toast.error("Something went wrong.");
    }
  };

  const saveImage = async (name: string, format: string) => {
    try {
      let imgUrl, filename;
      switch (format) {
        case "PNG":
          imgUrl = await toPng(divRef.current, { pixelRatio: 4 });
          filename = `${name}.png`;
          break;
        case "SVG":
          imgUrl = await toSvg(divRef.current, { pixelRatio: 2 });
          filename = `${name}.svg`;
          break;

        default:
          return;
      }

      const a = document.createElement("a");
      a.href = imgUrl;
      a.download = filename;
      a.click();

      toast.success("Exported successfully!");
    } catch (error) {
      toast.error("Something went wrong!");
    }
  };

  useHotkeys("ctrl+c", copyImage);
  useHotkeys("shift+a", () => saveImage("Mockitup", "PNG"));
  useHotkeys("shift+s", () => saveImage("Mockitup", "SVG"));

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          className="border-2 border-zinc-200 px-4 rounded-lg shadow-none"
          size="sm"
        >
          <Share2Icon className="mr-2" />
          Export
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="rounded-xl ">
        <DropdownMenuItem className="gap-2" onClick={copyImage}>
          <ImageIcon />
          Copy Image
          <DropdownMenuShortcut>⌘C</DropdownMenuShortcut>
        </DropdownMenuItem>
        <DropdownMenuItem
          className="gap-2"
          onClick={() => saveImage("Mockitup", "PNG")}
        >
          <DownloadIcon />
          Save as PNG
          <DropdownMenuShortcut>⇧A⌘a</DropdownMenuShortcut>
        </DropdownMenuItem>
        <DropdownMenuItem
          className="gap-2"
          onClick={() => saveImage("Mockitup", "SVG")}
        >
          <DownloadIcon />
          Save as SVG
          <DropdownMenuShortcut>⇧⌘s</DropdownMenuShortcut>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
