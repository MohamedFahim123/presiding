import axios from "axios";
import { create } from "zustand";
import { baseUrl } from "../functions/baseUrl";

export const useCitizenShipStore = create((set) => ({
    citizenships: [],
    citizenshipsError: null,
    citizenshipsLoading: true,
    getCitizenShips: async () => {
        await axios.get(`${baseUrl}/citizenships?t=${new Date().getTime()}`)
            .then(res => set(() => ({ citizenships: res?.data?.data?.citizenships, citizenshipsError: null, citizenshipsLoading: false })))
            .catch(err => set(() => ({ citizenships: [], citizenshipsError: err?.response?.data?.message, citizenshipsLoading: false })));
    },
}));