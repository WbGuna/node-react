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
import Contador from './components/Contador';
import Propriedades from './components/propriedades/Propriedades';
import Pessoa from './components/pessoa/Pessoa';
import Produto from './components/produto/Produto';
import Carro from './components/carro/Carro';
import Pai from './components/direta/Pai'
import Pai1 from './components/indireta/Pai'
import Carro2 from './components/carro2/Carro'
import Familia from './components/children/Familia'
import Membro from './components/children/Membro'
import ParImpar from './components/condicional/ParImpar'
import UsuarioLogado from './components/condicional/UsuarioLogado'
import ListaProdutos from './components/lista/ListaProdutos'
import DigiteSeuNome from './components/DigiteSeuNome'
import CadastroNome from './components/classe/CadastroNome'


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
      <Contador inicial={0} passo={10} limite={100}/>
      <Contador inicial={0} passo={25} limite={100}/>
      <Propriedades nome="Sharles"/>
      <Pessoa nome="Roberval" idade="35" sexo="M" estado_civil="Casado"/>
      <ul>
        <Produto nome="Furikake" marca="Yoki" valor="56,00" azul/>
        <Produto nome="Chá-Verde" marca="Yoki" valor="22,00" preto/>
        <Produto nome="Chá-Verde" marca="Yoki" valor="22,00" verde/>
      </ul>
      <Carro modelo="Fusca" marca="VW" cor="Branco" ano="1986" portas="3" 
        combustivel="Gasolina" aro="14" cambio="4 Marchas" potencia="70cv" preco="12.000,00" verde/>

      <Carro modelo="Corsa" marca="Chevrolet" cor="Prata" ano="2008" portas="5" 
        combustivel="Alcool" aro="13" cambio="5 Marchas" potencia="95cv" preco="17.500,00" cinza/>

      <Carro modelo="Onix" marca="Chevrolet" cor="Preto" ano="2018" portas="5" 
        combustivel="Flex" aro="14" cambio="6 Marchas" potencia="118cv" preco="43.000,00" roza/>

      <Carro modelo="Uno" marca="Fiat" cor="Vermelho" ano="2005" portas="4" 
        combustivel="Gasolina" aro="13" cambio="5 Marchas" potencia="85cv" preco="29.000,00" azul/>

      <Carro modelo="Brasilia" marca="VW" cor="Azul" ano="1986" portas="3" 
        combustivel="Gasolina" aro="14" cambio="4 Marchas" potencia="70cv" preco="12.000,00"/>
      <Pai/>
      <Pai1/>
   
      <div>
        <ul className='item3'>
            <Carro2 modelo="Brasilia" marca="VW" cor="Azul" ano="1986" portas="3" 
            combustivel="Gasolina" aro="14" cambio="4 Marchas" potencia="70cv" preco="12.000,00"/>

            <Carro2 modelo="Brasilia" marca="VW" cor="Azul" ano="1986" portas="3" 
            combustivel="Gasolina" aro="14" cambio="4 Marchas" potencia="70cv" preco="12.000,00" roza3/>
        </ul>
      </div>
      <hr/>
      <Familia>
        <Membro nome="Bildor" sobrenome="Guna"/>
        <Membro nome="Iros" sobrenome="Guna"/>
        <Membro nome="Batros" sobrenome="Guna"/>
      </Familia>
      <hr/>
      <ParImpar num={2}/>
      <ParImpar num={3}/>
      <hr/>
      {/* A linha acima é passando um objeto com atributos via props ver no IF e UsuarioLogado */}
      <UsuarioLogado usuario={{nome: 'Roberval', email: 'roberio@roberval.com'}}/> 
      <UsuarioLogado usuario={{nome: 'Roberval'}}/>
      <UsuarioLogado usuario={{email: 'roberio@roberval.com'}}/>
      <UsuarioLogado usuario={null}/>
      <UsuarioLogado usuario={{}}/>
      <UsuarioLogado usuario={{nome: 'Primo', email: 'primo@primo.com'}}/>
      <hr/>

      <ListaProdutos/>
      <hr/>
      <DigiteSeuNome/>
      <hr/>
      <CadastroNome nome="Roberval"/>
    </div>
    
  )
}
export default App;
