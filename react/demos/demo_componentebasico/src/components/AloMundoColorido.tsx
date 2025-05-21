interface AloMundoColoridoProps {
    nome:string,
    cor?:string
}

export function AloMundoColorido(props:Readonly<AloMundoColoridoProps>) {
    const corTexto = props.cor ?? 'red';
    return (
        <h1 style={{color:corTexto}}>Alô, {props.nome}!</h1>
    );
}