import React from 'react';
import styled from 'styled-components';
import PerguntaAberta from './PerguntaAberta';
import PerguntaFechada from './PerguntaFechada';

const InfoGerEns = styled.div `
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

class Etapa3 extends React.Component {

  render() {

    return (
      <InfoGerEns>

        <h2>ETAPA 3 - INFORMAÇÕES GERAIS DE ENSINO</h2>
        <PerguntaAberta pergunta={"7. Por que você não terminou um curso de graduação?"} />
        <input />
        <PerguntaAberta pergunta={"8. Você fez algum curso complementar?"} />
        <PerguntaFechada 
            opcoes={[
                "Nenhum",
                "Curso técnico",
                "Curso de inglês"
            ]}
        />
      </InfoGerEns>
    );
  }
}

export default Etapa3;