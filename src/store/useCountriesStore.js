import { create } from "zustand";
import { mockOptions } from "../data/mockData";

export const useCountriesStore = create((set) => ({
    countries: [],
    countriesError: null,
    countriesLoading: true,
    getCountries: () => set({ countries: mockOptions.countries, countriesError: null, countriesLoading: false }),
}));