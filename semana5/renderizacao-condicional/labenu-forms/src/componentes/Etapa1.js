import React from 'react';
import styled from 'styled-components';
import PerguntaAberta from './PerguntaAberta';
import PerguntaFechada from './PerguntaFechada';

const DadosGerais = styled.div `
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

class Etapa1 extends React.Component {

  render() {

    return (
      <DadosGerais>

        <h2>ETAPA 1 - DADOS GERAIS</h2>
        <PerguntaAberta pergunta={"1. Qual seu nome?"} />
        <input />
        <PerguntaAberta pergunta={"2. Qual sua idade?"} />
        <input />
        <PerguntaAberta pergunta={"3. Qual seu email?"} />
        <input />
        <PerguntaAberta pergunta={"4. Qual a sua escolaridade?"} />
        <PerguntaFechada 
            opcoes={[
                "Ensino médio incompleto",
                "Ensino médio completo",
                "Ensino superior incompleto",
                "Ensino superior completo"
            ]}
        />

      </DadosGerais>
    );
  }
}

export default Etapa1;