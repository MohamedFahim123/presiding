import { useEffect, useState } from "react";
import { getDataFromApi } from "../functions/getDataFromApi";


export const useFetch = (url) => {
    const [currData, setCurrData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        getDataFromApi(url, setCurrData, setLoading, setError);
    }, [url]);

    return [currData, loading, error, setCurrData, setLoading, setError];
};