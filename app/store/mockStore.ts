import { create } from 'zustand';

type PaddingStore = {
  paddingSize: number;
  setPaddingSize: (newSize: number) => void;
};

const usePaddingStore = create<PaddingStore>((set) => ({
  paddingSize: 0,
  setPaddingSize: (newSize) => set({ paddingSize: newSize }),
}));

export default usePaddingStore;
