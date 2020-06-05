import React from 'react';
import styled from 'styled-components';
import PerguntaAberta from './PerguntaAberta';

const InfoEnsSup = styled.div `
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

class Etapa2 extends React.Component {

  render() {

    return (
      <InfoEnsSup>
        
        <h2>ETAPA 2 - INFORMAÇÕES DO ENSINO SUPERIOR</h2>
        <PerguntaAberta pergunta={"5. Qual curso?"} />
        <input />
        <PerguntaAberta pergunta={"6. Qual a unidade de ensino?"} />
        <input />

      </InfoEnsSup>
    );
  }
}

export default Etapa2;