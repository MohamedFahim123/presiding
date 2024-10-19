import axios from "axios";
import { create } from "zustand";
import { baseUrl } from "../functions/baseUrl";

export const useIndustriesStore = create((set) => ({
    industries: [],
    industriesError: null,
    industriesLoading: true,
    getIndustries: async () => {
        await axios.get(`${baseUrl}/industries?t=${new Date().getTime()}`)
            .then(res => set(() => (
                {
                    industries: res?.data?.data?.industries,
                    industriesError: null,
                    industriesLoading: false,
                }
            )))
            .catch(err => set(() => (
                {
                    industries: [],
                    industriesError: err?.response?.data?.message,
                    industriesLoading: false,
                }
            )));
    },
}));