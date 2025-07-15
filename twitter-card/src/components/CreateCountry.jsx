import React, { useState } from 'react';
import { postCountry } from '../service/InfoApi';

function CreateCountry() {

    const [country, setCountry] = useState('');
    const [infoCountry, setInfoCountry] = useState();
    const [message, setMessage] = useState('');

    const handleCreateCountry = async () => {
        const response = await postCountry({ name: country });
        setInfoCountry(response);
    };

    return (
        <div>
            <input type="text" onChange={(e) => setCountry(e.target.value)} />
            <button onClick={handleCreateCountry}>Crear País</button>
        </div>
    );
}

export default CreateCountry;
