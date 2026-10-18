import { create } from "zustand";
import { mockOptions } from "../data/mockData";

export const useYearsOfExpStore = create((set) => ({
    yearsOfExp: [],
    yearsOfExpError: null,
    yearsOfExpLoading: true,
    getYearsOfExp: () => set({ yearsOfExp: mockOptions.years, yearsOfExpError: null, yearsOfExpLoading: false }),
}));