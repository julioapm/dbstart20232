import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { PaginaNaoEncontrada } from './components/PaginaNaoEncontrada.tsx';
import { PaginaPrincipal } from './components/PaginaPrincipal.tsx';
import { PaginaSobre } from './components/PaginaSobre.tsx';
import { PaginaUsuarios } from './components/PaginaUsuarios.tsx';
import { PaginaDetalhesUsuario } from './components/PaginaDetalhesUsuario.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />}>
          <Route index element={<PaginaPrincipal />}></Route>
          <Route path='sobre' element={<PaginaSobre />}></Route>
          <Route path='usuarios' element={<PaginaUsuarios />}>
            <Route path=':usuarioId' element={<PaginaDetalhesUsuario />}></Route>
          </Route>
        </Route>
        <Route path='*' element={<PaginaNaoEncontrada />}></Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
