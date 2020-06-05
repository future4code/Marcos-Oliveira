import React from 'react';
import CadastroDeUsuarios from "./componentes/CadastroDeUsuarios";
import ListaDeUsuarios from "./componentes/ListaDeUsuarios";

class App extends React.Component {

  state = {
    telaCadastro: true
  };

  mudaTela = () => {
    this.setState({telaCadastro: !this.state.telaCadastro});
  };
 
  render() {
    if (this.state.telaCadastro) {
      return (
        <div className="App">
          <button onClick={this.mudaTela}>Ir para Lista Usuários</button>
          <CadastroDeUsuarios />
        </div>
      )
    } else {
      return (
        <div className="App">
          <button onClick={this.mudaTela}>Voltar para Tela Cadastro</button>
          <ListaDeUsuarios />
        </div>
      )
    }
  }
}

export default App;
