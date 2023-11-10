import './App.css';
import { Outlet, Link } from 'react-router-dom';

function App() {

  return (
    <>
      <header>
        <h1>Minha SPA</h1>
        <nav>
          <Link to={'/'}>Principal</Link> | {' '}
          <Link to={'/usuarios'}>Usuários</Link> | {' '}
          <Link to={'/sobre'}>Sobre</Link>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
      <footer>
        <p>Desenvolvido por EU</p>
      </footer>
    </>
  );
}

export default App;
