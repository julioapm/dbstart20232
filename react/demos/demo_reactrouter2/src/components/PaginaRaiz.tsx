import { Link, Outlet, useNavigation } from "react-router-dom";

export function PaginaRaiz() {
  const navegacao = useNavigation();
  return (
    <>
      <header>
        <h1>Usuários</h1>
        <nav>
          <Link to="/">Principal</Link> | {' '}
          <Link to="/usuarios">Usuários</Link> | {" "}
          <Link to="/sobre">Sobre</Link>
        </nav>
      </header>
      <div>
        {navegacao.state !== 'idle' && <p>...</p>}
      </div>
      <main>
        <Outlet />
      </main>
      <footer>
        <p>Desenvolvido por EU</p>
      </footer>
    </>
  );
}
