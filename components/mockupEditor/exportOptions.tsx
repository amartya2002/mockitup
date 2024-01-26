import {
    DownloadIcon,
    ImageIcon,
    Link2Icon,
    Share2Icon,
  } from "@radix-ui/react-icons"
  import { Button } from "../ui/button"
  import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuSeparator,
    DropdownMenuShortcut,
    DropdownMenuTrigger,
  } from "../ui/dropdown-menu"
  import { toBlob, toPng, toSvg } from "html-to-image"
  import { toast } from "sonner";

import { mockupStore } from "@/app/store/mockupEditStore"
  import { useHotkeys } from "react-hotkeys-hook"
  
  export default function ExportOptions({ targetRef:any }) {
    const title = mockupStore((state) => state.title)
  

  

  
    const saveImage = async (name: string, format: string) => {
      const loading = toast.loading(`Exporting ${format} image...`)
  
      try {
        let imgUrl, filename
        switch (format) {
          case "PNG":
            imgUrl = await toPng(targetRef.current, { pixelRatio: 2 })
            filename = `${name}.png`
            break
          case "SVG":
            imgUrl = await toSvg(targetRef.current, { pixelRatio: 2 })
            filename = `${name}.svg`
            break
  
          default:
            return
        }
  
        const a = document.createElement("a")
        a.href = imgUrl
        a.download = filename
        a.click()
  
    
        toast.success("Exported successfully!")
      } catch (error) {
     
        toast.error("Something went wrong!")
      }
    }
  
   
    useHotkeys("ctrl+s", () => saveImage(title, "PNG"))
    useHotkeys("shift+ctrl+s", () => saveImage(title, "SVG"))
  
    return (
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button>
            <Share2Icon className="mr-2" />
            Export
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="dark">
          <DropdownMenuItem className="gap-2" >
            <ImageIcon />
            Copy Image
            <DropdownMenuShortcut>⌘C</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem className="gap-2" >
            <Link2Icon />
            Copy Link
            <DropdownMenuShortcut>⇧⌘C</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem
            className="gap-2"
            onClick={() => saveImage(title, "PNG")}
          >
            <DownloadIcon />
            Save as PNG
            <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem
            className="gap-2"
            onClick={() => saveImage(title, "SVG")}
          >
            <DownloadIcon />
            Save as SVG
            <DropdownMenuShortcut>⇧⌘S</DropdownMenuShortcut>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    )
  }