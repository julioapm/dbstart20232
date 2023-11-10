import { useLoaderData } from 'react-router-dom';

interface PaginaPrincipalDados {
    data:string;
}

export function PaginaPrincipal() {
    const dados = useLoaderData() as PaginaPrincipalDados;
    return (
        <>
            <p>Página Principal</p>
            <p>{dados.data}</p>
        </>
    );
}

function dormir(n:number) {
    return new Promise(r => setTimeout(r,n));
}

export async function paginaPrincipalLoader():Promise<PaginaPrincipalDados> {
    await dormir(1500);
    return {
        data: new Date().toISOString()
    };
}