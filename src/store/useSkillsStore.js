import axios from "axios";
import { create } from "zustand";
import { baseUrl } from "../functions/baseUrl";

export const useSkillsStore = create((set) => ({
    skills: [],
    skillsError: null,
    skillsLoading: true,
    getSkills: async () => {
        await axios.get(`${baseUrl}/skills?t=${new Date().getTime()}`)
            .then(res => set(() => (
                {
                    skills: res?.data?.data?.skills,
                    skillsError: null,
                    skillsLoading: false,
                }
            )))
            .catch(err => set(() => (
                {
                    skills: [],
                    skillsError: err?.response?.data?.message,
                    skillsLoading: false,
                }
            )));
    },
}));