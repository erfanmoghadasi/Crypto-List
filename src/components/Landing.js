import React, { useEffect } from 'react';

//Context
import { getCoin } from '../services/api';

const Landing = () => {
    useEffect(() => {
        const fetchAPI = async () => {
            const data = await getCoin();
            return data
        }
        fetchAPI()
    }, [])
    return (
        <div>
            
        </div>
    );
};

export default Landing;