import React from 'react';
import styled from 'styled-components';

const AppFinal = styled.div `
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

class Final extends React.Component {

  render() {

    return (
      <AppFinal>
        <h2>O FORMULÁRIO ACABOU</h2>
        <p>Muito obrigado por participar! Entraremos em contato!</p>
      </AppFinal>
    );
  }
}

export default Final;