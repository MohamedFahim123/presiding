import { create } from "zustand";
import { mockOptions } from "../data/mockData";

export const useAvailabilitiesStore = create((set) => ({
    availabilities: [],
    availabilitiesError: null,
    availabilitiesLoading: true,
    getAvailabilities: () => set({ availabilities: mockOptions.availabilities, availabilitiesError: null, availabilitiesLoading: false }),
}));