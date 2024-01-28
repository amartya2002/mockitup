import { create } from "zustand";
import { persist } from "zustand/middleware";
import domToImage from "dom-to-image";
// const mockupStore = create(
//   persist(
//     () => ({
//       title: "Mockitup",
//       outerPadding:"", // Background Padding / Background
//       outerCornerRadius: 10,
//       innerBorder: 0, // Image Border / Border
//       innerCornerRadius: 0,
//       shadowx: 50,
//       shadowy: 50,
//       shadowz: 10,
//       shadowk: -20,
//     }),
//     {
//       name: "User Preference",
//     }
//   )
// );

type MockupStore = {
  title: string,
  outerPadding: number, // Background Padding / Background
  outerCornerRadius: number,
  innerBorder: number, // Image Border / Border
  innerCornerRadius: number,
  shadowx: number,
  shadowy: number,
  shadowz: number,
  shadowk: number,
  zoom: number
};

const mockupStore = create<MockupStore>((set) => ({
  title: "Mockitup",
  outerPadding: 24, // Background Padding / Background
  outerCornerRadius: 10,
  innerBorder: 0, // Image Border / Border
  innerCornerRadius: 0,
  shadowx: -2,
  shadowy: 23,
  shadowz: 26,
  shadowk: -30,
  zoom: 50
}))


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

interface ImageExportStoreState {
  targetDivRef: any;
  setTargetDivRef: any;
  exportImage: any;
}

// const useImageExportStore = create<ImageExportStoreState>((set) => ({
//   targetDivRef: null,
//   setTargetDivRef: (ref: any) => set({ targetDivRef: ref }),
//   exportImage: () => {
//     const { targetDivRef } = useImageExportStore.getState();
//     if (!targetDivRef) {
//       console.error("Target div reference is not set");
//       return;
//     }

//     const exportContainer = targetDivRef.cloneNode(true);

//     exportContainer.style.width = "1920px";
//     exportContainer.style.height = "1080px";
    

//     document.body.appendChild(exportContainer);

//     const exportOptions = {
//       bgcolor: '#ffffff',
//       width : 1920,
//       height : 1080,

      
//     };

//     domToImage
//       .toPng(exportContainer, exportOptions)
//       .then((dataUrl) => {
//         const link = document.createElement("a");
//         link.download = "mockitup.png";
//         link.href = dataUrl;
//         link.click();

        
//         document.body.removeChild(exportContainer);
//       })
//       .catch((error) => {
//         console.error("Error exporting image:", error);
       
//         document.body.removeChild(exportContainer);
//       });
//   },
// }));







const useImageExportStore = create<ImageExportStoreState>((set) => ({
  targetDivRef: null,
  setTargetDivRef: (ref: any) => set({ targetDivRef: ref }),
  exportImage: () => {
    const { targetDivRef } = useImageExportStore.getState();
    if (!targetDivRef) {
      console.error("Target div reference is not set");
      return;
    }

      // Clone the target div to create a hidden container for export
      const exportContainer = targetDivRef.cloneNode(true);
      // Apply fixed dimensions to the export container
      exportContainer.style.width = "1920px";
      exportContainer.style.height = "1440px";
      // Set background color or other export-specific styles if needed
  
      document.body.appendChild(exportContainer);

    const exportOptions = {
      bgcolor: '#ffffff',
      // 2743 1543 - 1920 1080
    };

    domToImage
      .toPng(exportContainer)
      .then((dataUrl) => {
        const link = document.createElement("a");
        link.download = "mockitup.png";
        link.href = dataUrl;
        link.click();
        document.body.removeChild(exportContainer);
      })
      .catch((error) => {
        console.error("Error exporting image:", error);
        document.body.removeChild(exportContainer);
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
