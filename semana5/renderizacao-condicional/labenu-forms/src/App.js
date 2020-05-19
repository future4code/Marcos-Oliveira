import React from 'react';
import styled from 'styled-components';
import Etapa1 from './componentes/Etapa1';
import Etapa2 from './componentes/Etapa2';
import Etapa3 from './componentes/Etapa3';
import Final from './componentes/Final';

const AppDados = styled.div `
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
const Botao = styled.button `
  margin-top: 16px;
`

class App extends React.Component {

  state = {
    etapa: 1,
  }

  renderizaEtapa = () => {
    switch(this.state.etapa) {
      case 1:
        return <Etapa1 />;
      case 2: 
        return <Etapa2 />;
      case 3:
        return <Etapa3 />;
      case 4:
        return <Final />;
    }
  }

  irParaProximaEtapa = () => {
    this.setState({etapa: this.state.etapa + 1});
  }

  render() {

    if (this.state.etapa < 4) {
      return (
        <AppDados>
          
          {this.renderizaEtapa()}
          <Botao onClick={this.irParaProximaEtapa}>Próxima etapa</Botao>
        
        </AppDados>
      );
    } else {
      return (
        <AppDados>
          
          {this.renderizaEtapa()}
          
        </AppDados>
      );
    }
  }
}

export default App;
