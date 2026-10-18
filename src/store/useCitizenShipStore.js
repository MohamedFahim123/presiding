import { create } from "zustand";
import { mockOptions } from "../data/mockData";

export const useCitizenShipStore = create((set) => ({
    citizenships: [],
    citizenshipsError: null,
    citizenshipsLoading: true,
    getCitizenShips: () => set({ citizenships: mockOptions.citizenships, citizenshipsError: null, citizenshipsLoading: false }),
}));