import axios from "axios";

export const postDataToApi = async (url,data,setRes,setToastMessage,setLoading) => {
    try {
        setLoading(true);
        const response = await axios.post(url, data,{
            headers: {
                "Content-Type": 'application/json',
                Accept: 'application/json',
            }
        });
        setRes(response?.data?.data);
        setToastMessage(response?.data?.message);
    } catch (error) {
        setToastMessage(error?.response?.data?.message);
    };
    setLoading(false);
};