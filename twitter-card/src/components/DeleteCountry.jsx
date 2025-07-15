import React, { useState } from 'react';
import { deleteCountry } from '../service/InfoApi';

function DeleteCountry() {
    const [countryId, setCountryId] = useState('');

    const handleDeleteCountry = async () => {
        await deleteCountry(countryId);
    };

    return (
        <div>
            <input type="text" onChange={(e) => setCountryId(e.target.value)} />
            <button onClick={handleDeleteCountry}>Eliminar País</button>
        </div>
    );
}

export default DeleteCountry;
