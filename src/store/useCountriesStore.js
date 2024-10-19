import axios from "axios";
import { create } from "zustand";
import { baseUrl } from "../functions/baseUrl";

export const useCountriesStore = create((set) => ({
    countries: [],
    countriesError: null,
    countriesLoading: true,
    getCountries: async () => {
        await axios.get(`${baseUrl}/countries?t=${new Date().getTime()}`)
            .then(res => set(() => ({ countries: res?.data?.data?.countries, countriesError: null, countriesLoading: false })))
            .catch(err => set(() => ({ countries: [], countriesError: err?.response?.data?.message, countriesLoading: false })));
    },
}));