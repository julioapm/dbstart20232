import { useParams } from 'react-router-dom';

export function PaginaDetalhesUsuario() {
    const params = useParams();
    const usuarioID = params.usuarioId;
    return (
        <>
            <p>Id: {usuarioID}</p>
            <p>Nome: ...</p>
        </>
    );
}