import './App.css';
import { AloMundo } from './components/AloMundo';
import { AloMundoColorido }  from './components/AloMundoColorido';

function App() {
  return (
    <div>
      <AloMundo />
      <AloMundoColorido nome='John Doe' />
      <AloMundoColorido nome='Mary Doe' cor='blue' />
    </div>
  );
}

export default App;
