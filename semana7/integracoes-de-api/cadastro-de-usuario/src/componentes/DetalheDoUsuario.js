import React from 'react';
import axios from 'axios';
import styled from "styled-components";

const DetalheUsuario = styled.div `
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: auto;
`

class DetalheDoUsuario extends React.Component {
  state = {
      usuarios: [],
  }

  mostraDetalhe = id => {
      axios.get(`https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`,
        {
          headers: {
            Authorization: "marcos-oliveira-mello"
          }
        }
      ).then(resposta => {
          this.setState({usuarios: resposta.data})
      }).catch (erro => {
          alert("Erro ao buscar usuário")
      })
  }

  render() {
  
    return (
      <DetalheUsuario>
        <h2>Detalhe do Usuário</h2>
        
      </DetalheUsuario>
    )
  }
}
export default DetalheDoUsuario;