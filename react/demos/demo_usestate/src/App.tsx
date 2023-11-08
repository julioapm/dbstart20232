import './App.css';
import { Contador } from './components/Contador';
import { NomeInput } from './components/NomeImput';

function App() {
  return (
    <div>
      <Contador />
      <br/>
      <Contador />
      <br/>
      <NomeInput />
    </div>
  );
}

export default App;
