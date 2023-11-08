import { useState, useEffect } from 'react';

export function Relogio() {
    const [horario, setHorario] = useState(new Date());

    useEffect(() => {
        function tick() {
            setHorario(new Date());
        }
        const temporizador = setInterval(()=>tick(), 1000);
        return () => clearInterval(temporizador);
    }, []);

    return (
        <>
            <h1>Relógio:</h1>
            <h2>{horario.toLocaleTimeString()}</h2>
        </>
    );
}