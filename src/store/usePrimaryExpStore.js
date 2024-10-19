import axios from "axios";
import { create } from "zustand";
import { baseUrl } from "../functions/baseUrl";

export const usePrimaryExpStore = create((set) => ({
    primaryExp: [],
    primaryExpError: null,
    primaryExpLoading: true,
    getPrimaryExp: async () => {
        await axios.get(`${baseUrl}/primary-expertise?t=${new Date().getTime()}`)
            .then(res => set(() => (
                {
                    primaryExp: res?.data?.data?.primaryExpertises,
                    primaryExpError: null,
                    primaryExpLoading: false,
                }
            )))
            .catch(err => set(() => (
                {
                    primaryExp: [],
                    primaryExpError: err?.response?.data?.message,
                    primaryExpLoading: false,
                }
            )));
    },
}));