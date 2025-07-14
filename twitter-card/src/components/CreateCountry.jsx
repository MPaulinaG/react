import React, { useState } from 'react';
import { postCountry, getCountry, putCountry, deleteCountry } from '../service/InfoApi';

function CreateCountry() {

    const [country, setCountry] = useState();
    const [infoCountry, setInfoCountry] = useState();
    const [message, setMessage] = useState('');

    const handleCreateCountry = async () => {
        const response = await postCountry(country);
        setInfoCountry(response);
    };

    const handleGetCountry = async () => {
        const response = await getCountry(country);
        setInfoCountry(response);
    };

    const handleUpdateCountry = async () => {
        const updatedData = { name: country };
        const response = await putCountry(country, updatedData);
        setInfoCountry(response);
    };

    const handleDeleteCountry = async () => {
        try {
            const response = await deleteCountry(country);
            setMessage('País eliminado correctamente');
            setInfoCountry(null);
        } catch (error) {
            setMessage('Error eliminando el país');
        }
    };

    console.log(country);

    return (
        <div>
            <input type="text" onChange={(e) => [e, setCountry(e.target.value)]} />
            <button onClick={handleCreateCountry}>Crear País</button>
            <button onClick={handleGetCountry}>Obtener País</button>
            <button onClick={handleUpdateCountry}>Actualizar País</button>
            <button onClick={handleDeleteCountry}>Eliminar País</button>
        </div>
    );
}

export default CreateCountry;
