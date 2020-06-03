import React from 'react';
import axios from "axios";
import styled from "styled-components";

const Cadastro = styled.div `
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 300px;
  height: 200px;
  margin: auto;
  border: 1px solid black;
`

class CadastroDeUsuarios extends React.Component {

  state = {
    name: "",
    email: ""
  };

  onChangeInputNome = event => {
    this.setState({inputNome: event.target.value});
  };

  onChangeInputEmail = event => {
    this.setState({inputEmail: event.target.value});
  };

  criaUsuario = () => {
    const body = {
      name: this.state.inputNome,
      email: this.state.inputEmail
    }
    axios.post("https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users",body,
      {
        headers: {
          Authorization: "marcos-oliveira-mello"
        }
      }
    ).then(() => {
      alert(`Usuário ${this.state.inputNome} criado com sucesso!`);
      this.setState({inputNome: "", inputEmail: ""});
    }).catch(() => {
      alert("Erro ao criar usuário");
    })
  }

  render() {

    return(
      <Cadastro>
        <label>Nome: <input type="text" value={this.state.inputNome} onChange={this.onChangeInputNome} /></label>
        <label>E-mail: <input type="email" value={this.state.inputEmail} onChange={this.onChangeInputEmail} /></label>
        <button onClick={this.criaUsuario}>Salvar</button>
      </Cadastro>
    )
  }
}


export default CadastroDeUsuarios;