import { getMockData } from "../data/mockData";

export const postDataToApi = async (url, data, setRes, setToastMessage, setLoading) => {
    try {
        setLoading?.(true);
        setRes(getMockData(url, data));
        setToastMessage?.(null);
    } catch (error) {
        setToastMessage?.(error?.message || 'Unable to load mock data.');
    } finally {
        setLoading?.(false);
    }
};