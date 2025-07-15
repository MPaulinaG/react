import React, { useState } from 'react';
import { putCountry } from '../service/InfoApi';

function UpdateCountry() {

    const [country, setCountry] = useState('');
    const [infoCountry, setInfoCountry] = useState();

    const handleUpdateCountry = async () => {
        const updatedData = { name: country };
        const response = await putCountry(country, updatedData);
        setInfoCountry(response);
    };

    return (
        <div>
            <input type="text" onChange={(e) => setCountry(e.target.value)} />
            <button onClick={handleUpdateCountry}>Actualizar País</button>
        </div>
    );
}

export default UpdateCountry;
