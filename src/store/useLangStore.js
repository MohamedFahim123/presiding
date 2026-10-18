import { create } from "zustand";
import { mockOptions } from "../data/mockData";

export const useLangStore = create((set) => ({
    langs: [],
    langsError: null,
    langsLoading: true,
    getLangs: () => set({ langs: mockOptions.languages, langsError: null, langsLoading: false }),
}));