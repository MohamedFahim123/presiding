import axios from "axios";
import { create } from "zustand";
import { baseUrl } from "../functions/baseUrl";

export const useAvailabilitiesStore = create((set) => ({
    availabilities: [],
    availabilitiesError: null,
    availabilitiesLoading: true,
    getAvailabilities: async () => {
        await axios.get(`${baseUrl}/availabilities?t=${new Date().getTime()}`)
            .then(res => set(() => (
                {
                    availabilities: res?.data?.data?.availabilities,
                    availabilitiesError: null,
                    availabilitiesLoading: false,
                }
            )))
            .catch(err => set(() => (
                {
                    availabilities: [],
                    availabilitiesError: err?.response?.data?.message,
                    availabilitiesLoading: false,
                }
            )));
    },
}));