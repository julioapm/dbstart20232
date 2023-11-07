import React from "react";

export function MeuBotao2() {
    const handleClick = (event:React.MouseEvent) => {
        event.stopPropagation();
        alert(`Clicou ${event.currentTarget.id}`);
    };

    return (
        <button id='botao2' onClick={handleClick}>Clique Aqui</button>
    );
}