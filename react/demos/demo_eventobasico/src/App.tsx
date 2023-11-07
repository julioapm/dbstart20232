import './App.css';
import React from 'react';
import { MeuBotao } from './components/MeuBotao';
import { MeuBotao2 } from './components/MeuBotao2';

function App() {
    const handleClick = (event:React.MouseEvent) => {
        alert(`Clicou ${event.currentTarget.id}`);
    };

    return (
        <div id='divApp' onClick={handleClick}>
            <MeuBotao />
            <MeuBotao2 />
        </div>
    );
}

export default App;
