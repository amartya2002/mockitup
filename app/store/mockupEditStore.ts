import { create } from "zustand";
import {persist} from "zustand/middleware"

const mockupStore = create(
  persist(()=>({
    outerPadding: 24, // Background Padding / Background
    outerCornerRadius: 0,
    innerBorder: 0,       // Image Border / Border
    innerCornerRadius:0,
    shadowx: 0,
    shadowy: 0,
    shadowz: 0,
    shadowk: -20,


  }),{
    name: "User Preference"
  })
)




type PaddingStore = {
  paddingSize: number;
  setPaddingSize: (newSize: number) => void;
};

const usePaddingStore = create<PaddingStore>((set) => ({
  paddingSize: 0,
  setPaddingSize: (newSize) => set({ paddingSize: newSize }),
}));

// ---------------------------------
type BorderStore = {
  innerBorderSize: number;
  setInnerBorderSize: (newSize: number) => void;
};

const useBorderStore = create<BorderStore>((set) => ({
  innerBorderSize: 0,
  setInnerBorderSize: (newSize) => set({ innerBorderSize: newSize }),
}));
// ---------------------------------
// ---------------------------------

type ColorStoreState = {
  selectedColor: string;
  setSelectedColor: (color: string) => void;
}

const useColorStore = create<ColorStoreState>((set) => ({
  selectedColor: "linear-gradient(to right, rgba(0, 224, 255, 1), rgba(0, 133, 255, 1))",
  setSelectedColor: (color) => set({ selectedColor: color }),
}));

// ---------------------------------
// ---------------------------------


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
  useImgRoundedStore,
  usePaddingRoundedStore,
  useImageStore,
  useColorStore, mockupStore
};
