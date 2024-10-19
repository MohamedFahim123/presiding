import axios from "axios";
import { create } from "zustand";
import { baseUrl } from "../functions/baseUrl";

export const useLangStore = create((set) => ({
    langs: [],
    langsError: null,
    langsLoading: true,
    getLangs: async () => {
        await axios.get(`${baseUrl}/languages?t=${new Date().getTime()}`)
            .then(res => set(() => (
                {
                    langs: res?.data?.data?.languages,
                    langsError: null,
                    langsLoading: false,
                }
            )))
            .catch(err => set(() => (
                {
                    langs: [],
                    langsError: err?.response?.data?.message,
                    langsLoading: false,
                }
            )));
    },
}));