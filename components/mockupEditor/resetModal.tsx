"use client";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "../ui/button";
import { useImageStore } from "@/app/store/mockupEditStore";
import { DialogClose } from "@radix-ui/react-dialog";
import { toast } from "sonner";

export default function ResetModal() {
  const { isUploaded } = useImageStore();
  const { resetImage } = useImageStore();

  const handleButtonClick = () => {
    // Call resetImage function from the store
    resetImage();
    toast.success("Deleted Successfully.");
  };
  return (
    <Dialog>
      <DialogTrigger disabled={!isUploaded} asChild>
        <Button className=" rounded-lg  hover:text-blue-400 border border-zinc-200 dark:border-zinc-600 dark:hover:bg-zinc-800 shadow-none" disabled={!isUploaded} variant="outline" size="sm">
          Pick New
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Are you absolutely sure?</DialogTitle>
          <DialogDescription>
            This action cannot be undone. This will delete your uploaded file.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <DialogClose>
            {" "}
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
  );
}
