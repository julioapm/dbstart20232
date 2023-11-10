import { useState } from "react";

export function useToggle(valorInicial:boolean): [boolean, ()=>void] {
    const [valor, setValor] = useState(valorInicial);
    const toggle = () => setValor(valorAnterior => !valorAnterior);
    return [valor, toggle];
}
