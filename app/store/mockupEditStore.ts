import { create } from "zustand";

type PaddingStore = {
  paddingSize: number;
  setPaddingSize: (newSize: number) => void;
};

const usePaddingStore = create<PaddingStore>((set) => ({
  paddingSize: 0,
  setPaddingSize: (newSize) => set({ paddingSize: newSize }),
}));

type ImgRoundedStore = {
  imgRounded: number;
  setImgRounded: (newSize: number) => void;
};

const useImgRoundedStore = create<ImgRoundedStore>((set) => ({
  imgRounded: 0,
  setImgRounded: (newSize) => set({ imgRounded: newSize }),
}));

type PaddingRoundedStore = {
  paddingRounded: number;
  setPaddingRounded: (newSize: number) => void;
};

const usePaddingRoundedStore = create<PaddingRoundedStore>((set) => ({
  paddingRounded: 0,
  setPaddingRounded: (newSize) => set({ paddingRounded: newSize }),
}));

interface Image {
  image: string | null;
  setImage: (image: string | null) => void;
  isUploaded: boolean;
  setUploaded: (value: boolean) => void;
  resetImage: () => void;
}

const useImageStore = create<Image>((set) => ({
  image: null,
  setImage: (image) => set({ image }),
  isUploaded: false,
  setUploaded: (value) => set({ isUploaded: value }),
  resetImage: () => set({ image: null, isUploaded: false }),
}));

export {
  usePaddingStore,
  useImgRoundedStore,
  usePaddingRoundedStore,
  useImageStore,
};
