import { create } from "zustand";
import { mockOptions } from "../data/mockData";

export const usePrimaryExpStore = create((set) => ({
    primaryExp: [],
    primaryExpError: null,
    primaryExpLoading: true,
    getPrimaryExp: () => set({ primaryExp: mockOptions.primaryExpertises, primaryExpError: null, primaryExpLoading: false }),
}));