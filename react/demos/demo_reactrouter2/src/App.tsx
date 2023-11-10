import { createBrowserRouter, RouterProvider, createRoutesFromElements, Route } from 'react-router-dom';
import './App.css';
import { PaginaCarregando } from './components/PaginaCarregando';
import { PaginaPrincipal, paginaPrincipalLoader } from './components/PaginaPrincipal';
import { PaginaRaiz } from './components/PaginaRaiz';

const router = createBrowserRouter(createRoutesFromElements(
  <Route path='/' element={<PaginaRaiz />}>
    <Route index loader={paginaPrincipalLoader} element={<PaginaPrincipal />}></Route>
  </Route>
));

function App() {
  return (
    <RouterProvider router={router} fallbackElement={<PaginaCarregando />} />
  );
}

export default App;
