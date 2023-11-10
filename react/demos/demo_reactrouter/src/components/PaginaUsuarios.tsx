import { Link, Outlet } from 'react-router-dom';

export function PaginaUsuarios() {
    return (
        <>
            <h2>Usuários</h2>
            <ul>
                <li><Link to='u1'>John Doe</Link></li>
                <li><Link to='u2'>Fulano de Tal</Link></li>
            </ul>
            <Outlet />
        </>
    );
}
