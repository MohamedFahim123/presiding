import { create } from "zustand";
import { mockOptions } from "../data/mockData";

export const useProjectTypesStore = create((set) => ({
    projectTypes: [],
    projectTypesError: null,
    projectTypesLoading: true,
    getProjectTypes: () => set({ projectTypes: mockOptions.projectTypes, projectTypesError: null, projectTypesLoading: false }),
}));