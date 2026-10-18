import { create } from "zustand";
import { mockOptions } from "../data/mockData";

export const useIndustriesStore = create((set) => ({
    industries: [],
    industriesError: null,
    industriesLoading: true,
    getIndustries: () => set({ industries: mockOptions.industries, industriesError: null, industriesLoading: false }),
}));