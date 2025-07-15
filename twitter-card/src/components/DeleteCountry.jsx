import React, { useState } from 'react';
import { deleteCountry } from '../service/InfoApi';

function DeleteCountry() {

    const [country, setCountry] = useState('');
    const [message, setMessage] = useState('');
    const [infoCountry, setInfoCountry] = useState();

    const handleDeleteCountry = async () => {
        try {
            const response = await deleteCountry(country);
            setMessage('País eliminado correctamente');
            setInfoCountry(null);
        } catch (error) {
            setMessage('Error eliminando el país');
        }
    };

    return (
        <div>
            <input type="text" onChange={(e) => setCountry(e.target.value)} />
            <button onClick={handleDeleteCountry}>Eliminar País</button>
        </div>
    );
}

export default DeleteCountry;
