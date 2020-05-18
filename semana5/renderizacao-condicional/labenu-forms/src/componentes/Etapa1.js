import React from 'react';
import styled from 'styled-components';


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
        <div>
            <p>1. Qual seu nome?</p>
            <input />
            <p>2. Qual sua idade?</p>
            <input />
            <p>3. Qual seu email?</p>
            <input />
            <p>4. Qual sua escolaridade?</p>
            <select>
                <option>Ensino médio incompleto</option>
                <option>Ensino médio completo</option>
                <option>Ensino superior incompleto</option>
                <option>Ensino superior completo</option>
            </select>
        </div>
        <button>Próxima Etapa</button>

      </DadosGerais>
    );
  }
}

export default Etapa1;