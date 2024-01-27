import { create } from "zustand";
import { persist } from "zustand/middleware";
import domToImage from 'dom-to-image';
import { MutableRefObject } from 'react';
const mockupStore = create(
  persist(
    () => ({
      title: "Mockitup",
      outerPadding: 24, // Background Padding / Background
      outerCornerRadius: 0,
      innerBorder: 0, // Image Border / Border
      innerCornerRadius: 0,
      shadowx: 0,
      shadowy: 0,
      shadowz: 0,
      shadowk: -20,
    }),
    {
      name: "User Preference",
    }
  )
);

type ColorStoreState = {
  selectedColor: string;
  setSelectedColor: (color: string) => void;
};

const useColorStore = create<ColorStoreState>((set) => ({
  selectedColor:
    "linear-gradient(to right, rgba(0, 224, 255, 1), rgba(0, 133, 255, 1))",
  setSelectedColor: (color) => set({ selectedColor: color }),
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

const useImageExportStore = create((set) => ({
  targetDivRef: null,
  setTargetDivRef: (ref) => set({ targetDivRef: ref }),
  exportImage: () => {
    const { targetDivRef } = useImageExportStore.getState();
    if (!targetDivRef) {
      console.error('Target div reference is not set');
      return;
    }

    domToImage.toPng(targetDivRef)
      .then((dataUrl) => {
        const link = document.createElement('a');
        link.download = 'mockitup.png';
        link.href = dataUrl;
        link.click();
      })
      .catch((error) => {
        console.error('Error exporting image:', error);
      });
  },
}));


export { useImageStore, useColorStore, mockupStore, useImageExportStore };




// const useToggleStore = create((set) => ({
//   isToggled: false,
//   toggleState: () =>
//     set((state: { isToggled: any }) => ({ isToggled: !state.isToggled })),
// }));

// type PaddingStore = {
//   paddingSize: number;
//   setPaddingSize: (newSize: number) => void;
// };

// const usePaddingStore = create<PaddingStore>((set) => ({
//   paddingSize: 0,
//   setPaddingSize: (newSize) => set({ paddingSize: newSize }),
// }));

// ---------------------------------
// type BorderStore = {
//   innerBorderSize: number;
//   setInnerBorderSize: (newSize: number) => void;
// };

// const useBorderStore = create<BorderStore>((set) => ({
//   innerBorderSize: 0,
//   setInnerBorderSize: (newSize) => set({ innerBorderSize: newSize }),
// }));
// ---------------------------------
// ---------------------------------



// ---------------------------------
// ---------------------------------

// type ImgRoundedStore = {
//   imgRounded: number;
//   setImgRounded: (newSize: number) => void;
// };

// const useImgRoundedStore = create<ImgRoundedStore>((set) => ({
//   imgRounded: 0,
//   setImgRounded: (newSize) => set({ imgRounded: newSize }),
// }));

// type PaddingRoundedStore = {
//   paddingRounded: number;
//   setPaddingRounded: (newSize: number) => void;
// };

// const usePaddingRoundedStore = create<PaddingRoundedStore>((set) => ({
//   paddingRounded: 0,
//   setPaddingRounded: (newSize) => set({ paddingRounded: newSize }),
// }));


