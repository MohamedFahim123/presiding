import { create } from "zustand";
import { mockOptions } from "../data/mockData";

export const useSkillsStore = create((set) => ({
    skills: [],
    skillsError: null,
    skillsLoading: true,
    getSkills: () => set({ skills: mockOptions.skills, skillsError: null, skillsLoading: false }),
}));