import './App.css';
import Primeiro from './components/Primeiro';
import Segundo from './components/Segundo';
import Teste, {Component1, Component2} from './components/multi';
import Will from './components/will';
import Estilos from './components/estilos/Estilos';
import MinMax from './components/MinMax';
import TesteBotao from './components/testebotao/botao';
import Titulo from './components/Titulo';
import Botao from './components/Botao';

function App() {
  return (
    <div>
      <Primeiro/>
      <Segundo/>
      <Teste/>
      <Component1/>
      <Component2/>
      <Will/>
      <Estilos/>
      <MinMax min="5" max="10"/>
      <MinMax min={5} max={50}/> 
      <TesteBotao label="Comprar" backColor="red"/>
      <TesteBotao label="Adicionar" backColor="green"/>
      <TesteBotao label="Finalizar" backColor="blue"/>
      <Titulo principal="Olá" secundario="Tudo bem"/>
      <Botao/>

    </div>
    
  )
}
export default App;
