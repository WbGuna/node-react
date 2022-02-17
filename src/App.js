import './App.css';
import Primeiro from './components/Primeiro';
import Segundo from './components/Segundo';
import Teste, {Component1, Component2} from './components/multi';
import Will from './components/will';

function App() {
  return (
    <div>
      <Primeiro/>
      <Segundo/>
      <Teste/>
      <Component1/>
      <Component2/>
      <Will/>
    </div>
    
  )
}
export default App;
