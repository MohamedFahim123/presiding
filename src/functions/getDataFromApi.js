import { getMockData } from "../data/mockData";

export const getDataFromApi = async (url, setData, setLoading, setError) => {
    try {
        setLoading(true);
        setData(getMockData(url));
        setError?.(null);
    } catch (error) {
        setError?.(error?.message || 'Unable to load mock data.');
    } finally {
        setLoading(false);
    }
};