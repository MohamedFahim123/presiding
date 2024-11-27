import axios from "axios";
import { create } from "zustand";
import { baseUrl } from "../functions/baseUrl";

export const useJobTypesStore = create((set) => ({
    jobTypes: [],
    jobTypesError: null,
    jobTypesLoading: true,
    getJobTypes: async () => {
        await axios.get(`${baseUrl}/employment-types?t=${new Date().getTime()}`)
            .then(res => set(() => (
                {
                    jobTypes: res?.data?.data?.projectTypes,
                    jobTypesError: null,
                    jobTypesLoading: false,
                }
            )))
            .catch(err => set(() => (
                {
                    jobTypes: [],
                    jobTypesError: err?.response?.data?.message,
                    jobTypesLoading: false,
                }
            )));
    },
}));