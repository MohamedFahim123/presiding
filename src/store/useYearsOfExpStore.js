import axios from "axios";
import { create } from "zustand";
import { baseUrl } from "../functions/baseUrl";

export const useYearsOfExpStore = create((set) => ({
    yearsOfExp: [],
    yearsOfExpError: null,
    yearsOfExpLoading: true,
    getYearsOfExp: async () => {
        await axios.get(`${baseUrl}/years-of-experience?t=${new Date().getTime()}`)
            .then(res => set(() => (
                {
                    yearsOfExp: res?.data?.data?.years,
                    yearsOfExpError: null,
                    yearsOfExpLoading: false,
                }
            )))
            .catch(err => set(() => (
                {
                    yearsOfExp: [],
                    yearsOfExpError: err?.response?.data?.message,
                    yearsOfExpLoading: false,
                }
            )));
    },
}));