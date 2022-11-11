import { useState, useEffect } from 'react';

const useFetchSectionData = (sectionType) => {
    const [data, setData] = useState([]);
    const API_KEY = import.meta.env.VITE_NEWS_API_KEY;

    useEffect(() => {
        fetch(`https://content.guardianapis.com/${sectionType}?api-key=${API_KEY}&show-fields=thumbnail`)
            .then((response) => response.json())
            .then((data) => {
                if (data?.response?.results.length) {
                    setData(data.response.results);
                }
            })
            .catch((err) => {
                console.log(err.message);
            });
    }, [sectionType]);

    return data;
};

export default useFetchSectionData;
