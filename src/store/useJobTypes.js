import { create } from "zustand";
import { mockOptions } from "../data/mockData";

export const useJobTypesStore = create((set) => ({
    jobTypes: [],
    jobTypesError: null,
    jobTypesLoading: true,
    getJobTypes: () => set({ jobTypes: mockOptions.jobTypes, jobTypesError: null, jobTypesLoading: false }),
}));