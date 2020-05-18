import React from 'react';
import styled from 'styled-components';

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
        <div>
            <p>5. Qual curso?</p>
            <input />
            <p>6. Qual a unidade de ensino?</p>
            <input />
        </div>
        <button>Próxima etapa</button>

      </InfoEnsSup>
    );
  }
}

export default Etapa2;