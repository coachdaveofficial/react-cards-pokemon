import axios from 'axios'
import { useState } from 'react'
import uuid from 'uuid'
function useAxios(baseUrl) {
    const [data, setData] = useState([]);

    const addData = async (restOfUrl='') => {
        const response = await axios.get(`${baseUrl}${restOfUrl}`);
        const newData = response.data;
        setData((data) => [...data, {...newData, id: uuid()}])
    }
    
    return [data, addData]
};

export default useAxios;