import { useReducer } from 'react';

interface ContadorEstado {
    contagem:number
}

type AcaoTipo = 
    | {tipo:'incremento'; valor:number}
    | {tipo:'decremento'};

function reducer(estado:ContadorEstado, acao:AcaoTipo):ContadorEstado {
    switch (acao.tipo) {
        case 'incremento':
            return {contagem: estado.contagem + acao.valor};
        case 'decremento':
            return {contagem: estado.contagem - 1};
        default:
            throw new Error('Tipo de ação inválida.');
    }
}

export function Contador() {
    const estadoInicial:ContadorEstado = {contagem:73};
    const [estado, dispatch] = useReducer(reducer, estadoInicial);

    const handleClickMais = () => {
        dispatch({tipo:'incremento', valor:2});
    };
    
    const handleClickMenos = () => {
        dispatch({tipo:'decremento'});
    };

    return (
        <>
            <button onClick={handleClickMais}>+</button>
            <button onClick={handleClickMenos}>-</button>
            <span>contagem = {estado.contagem}</span>
        </>
    );
}