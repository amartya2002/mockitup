import { create } from 'zustand';

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

export  {usePaddingStore, useImgRoundedStore, usePaddingRoundedStore};
