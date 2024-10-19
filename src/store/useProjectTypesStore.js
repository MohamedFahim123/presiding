import axios from "axios";
import { create } from "zustand";
import { baseUrl } from "../functions/baseUrl";

export const useProjectTypesStore = create((set) => ({
    projectTypes: [],
    projectTypesError: null,
    projectTypesLoading: true,
    getProjectTypes: async () => {
        await axios.get(`${baseUrl}/project-types?t=${new Date().getTime()}`)
            .then(res => set(() => (
                {
                    projectTypes: res?.data?.data?.projectTypes,
                    projectTypesError: null,
                    projectTypesLoading: false,
                }
            )))
            .catch(err => set(() => (
                {
                    projectTypes: [],
                    projectTypesError: err?.response?.data?.message,
                    projectTypesLoading: false,
                }
            )));
    },
}));