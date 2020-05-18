import React from 'react';
import styled from 'styled-components';

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
        <div>
            <p>7. Por que você não terminou um curso de graduação</p>
            <input />
            <p>8. Você fez algum curso complementar?</p>
            <select>
                <option>Nenhum</option>
                <option>Curso técnico</option>
                <option>Curso de inglês</option>
            </select>
        </div>
        <button>Próxima etapa</button>   
        
      </InfoGerEns>
    );
  }
}

export default Etapa3;