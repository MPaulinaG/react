import React, { useState } from 'react';
import { postCountry } from '../service/InfoApi';

function CreateCountry() {

    const [country, setCountry] = useState();
    const [infoCountry, setInfoCountry] = useState();

    const handleCreateCountry = async () => {
        const response = await postCountry({nombre: country});
        setInfoCountry(response);
    };

    console.log(country)

    return (
        <div>
            <input type="text" onChange={(e) => setCountry(e.target.value)} />
            <button onClick={handleCreateCountry}>Crear País</button>
        </div>
    );
}

export default CreateCountry;
