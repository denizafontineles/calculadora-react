import React from 'react';
import './App.css';

class Contador extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      contador: 0,
      estado: true
    };
  }

  
  
  adicionarUm = () => {
    this.setState((prevState) => {
      return {
        contador: prevState.contador + 1
      }
    })
  }
  
  diminuiUm = () => {
    this.setState((prevState) => {
      return{
        contador: prevState.contador -1
      }
    })
  }
  
  reseta = () => {
    this.setState(() => {
      return{
        contador: 0
      }
    })
  }
  
  
  fechar = () => {
    this.setState((pegaValor) =>{
      console.log(pegaValor)
      return{
        estado: !pegaValor.estado
      }
    })
  }

  render() {
    return (    
      <div>
      <p>{this.state.contador}</p>

    <button className="btn" onClick={this.fechar}>{this.state.estado === true ? "Fechar Calculadora" : "Abrir Calculadora"}</button>
        {this.state.estado === true ? (
        <div>
          <button className="btnMaisUm" onClick={this.adicionarUm}>+</button>
          <button className="btnMenosUm" onClick={this.diminuiUm}>-</button>
          <button className="btnResetar" onClick={this.reseta}>Resetar</button>
        </div>
        ) : ''}
      </div>
    );
  }
}


function App(props) {
  return (
    <div className="App">
      <h2>Calculadora</h2>
      <Contador />
    </div>
  );
}
export default App;
