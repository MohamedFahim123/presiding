import axios from "axios";

export const getDataFromApi = async (url,setData,setLoading,setError) => {
    try {
        setLoading(true);
        const response = await axios.get(`${url}?t=${new Date().getTime()}`, {
            headers: {
                "Content-Type": 'application/json',
                Accept: 'application/json',
            }
        });
        setData(response?.data?.data);
    } catch (error) {
        setError(error?.response?.data?.message);
    };
    setLoading(false);
};