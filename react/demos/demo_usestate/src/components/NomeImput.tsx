import React, { useState } from 'react';

export function NomeInput() {
    const [texto, setTexto] = useState('teste');

    const handleChange = (event:React.ChangeEvent<HTMLInputElement>) => {
        setTexto(event.target.value);
    };

    return (
        <>
            <input value={texto} onChange={handleChange}/>
            <p>Seu nome é {texto}</p>
        </>
    );
}