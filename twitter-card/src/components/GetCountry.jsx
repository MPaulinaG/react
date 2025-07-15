import React, { useState } from 'react';
import { getCountry } from '../service/InfoApi';

function GetCountry() {

    const [country, setCountry] = useState('');
    const [infoCountry, setInfoCountry] = useState();

    const handleGetCountry = async () => {
        const response = await getCountry(country);
        setInfoCountry(response);
    };

    return (
        <div>
            <input type="text" onChange={(e) => setCountry(e.target.value)} />
            <button onClick={handleGetCountry}>Obtener País</button>
        </div>
    );
}

export default GetCountry;
