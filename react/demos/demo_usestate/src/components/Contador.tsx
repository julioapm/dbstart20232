import { useState } from 'react';

export function Contador() {
    const [contagem, setContagem] = useState(0);

    const handleClick = () => {
        //setContagem(contagem + 1);
        setContagem(contagemAnterior => contagemAnterior + 1);
    };

    return (
        <>
            <button onClick={handleClick}>Clique aqui</button>
            <span>clicou {contagem} vezes</span>
        </>
    );
}