"use client";
import { cn } from "@/lib/utils"
import { useMediaQuery } from "@/hooks/use-media-query"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "../ui/button";
import { useImageStore } from "@/app/store/mockupEditStore";
import { DialogClose } from "@radix-ui/react-dialog";
import { toast } from "sonner";
import React from "react";

export default function ResetModal() {
  const { isUploaded } = useImageStore();
  const { resetImage } = useImageStore();

  const handleButtonClick = () => {
    // Call resetImage function from the store
    resetImage();
    toast.success("Deleted Successfully.");
  };

  const [open, setOpen] = React.useState(false)
  const isDesktop = useMediaQuery("(min-width: 768px)")
  if (isDesktop) {
    return (
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger disabled={!isUploaded} asChild>
          <Button className=" rounded-lg  hover:text-blue-400 border border-zinc-200 dark:border-zinc-600 dark:hover:bg-zinc-800 shadow-none" disabled={!isUploaded} variant="outline" size="sm">
            Delete Image
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Are you absolutely sure?</DialogTitle>
            <DialogDescription>
              This action will delete your uploaded file and cannot be undone.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <DialogClose>

              <Button
                type="submit"
                variant="destructive"
                onClick={handleButtonClick}
              >
                Reset
              </Button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    )
  }
  return (
    // <Dialog>
    //   <DialogTrigger disabled={!isUploaded} asChild>
    //     <Button className=" rounded-lg  hover:text-blue-400 border border-zinc-200 dark:border-zinc-600 dark:hover:bg-zinc-800 shadow-none" disabled={!isUploaded} variant="outline" size="sm">
    //       Delete Image
    //     </Button>
    //   </DialogTrigger>
    //   <DialogContent className="w-[90%]">
    //     <DialogHeader>
    //       <DialogTitle>Are you absolutely sure?</DialogTitle>
    //       <DialogDescription>
    //         This action will delete your uploaded file and cannot be undone.
    //       </DialogDescription>
    //     </DialogHeader>
    //     <DialogFooter>
    //       <DialogClose>
    //         {" "}
    //         <Button
    //           type="submit"
    //           variant="destructive"
    //           onClick={handleButtonClick}
    //         >
    //           Reset
    //         </Button>
    //       </DialogClose>
    //     </DialogFooter>
    //   </DialogContent>
    // </Dialog>







    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger disabled={!isUploaded} asChild>
      <Button className=" rounded-lg  hover:text-blue-400 border border-zinc-200 dark:border-zinc-600 dark:hover:bg-zinc-800 shadow-none" disabled={!isUploaded} variant="outline" size="sm">
            Delete Image
          </Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader className="text-left">
          <DrawerTitle>Are you absolutely sure?</DrawerTitle>
          <DrawerDescription>
          This action will delete your uploaded file and cannot be undone.
          </DrawerDescription>
        </DrawerHeader>
        <DrawerFooter className="pt-2">
          <DrawerClose asChild>
          <Button
                type="submit"
                variant="destructive"
                onClick={handleButtonClick}
              >
                Reset
              </Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>









  );
}
