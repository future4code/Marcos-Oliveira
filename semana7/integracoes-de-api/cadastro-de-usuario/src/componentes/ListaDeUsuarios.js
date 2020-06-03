import React from 'react';
import axios from 'axios';
import styled from "styled-components";

const ListaUsuarios = styled.div `
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: auto;
`

const ContainerUsuario = styled.div `
  display: flex;
  justify-content: space-between;
  width: 210px;
  border-bottom: 1px solid black;
  padding: 5px;
`

class ListaDeUsuario extends React.Component {

  state = {
    usuarios: []
  };

  componentDidMount = () => {
    this.mostraUsuario();
  }

  async mostraUsuario() {
    try {
      const resposta = await axios.get("https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users",
      {
        headers: {
          Authorization: "marcos-oliveira-mello"
        }
      }) 
  
      this.setState({usuarios: resposta.data})
    } catch(erro) {
      alert(erro.resposta);
    }
  };

  confirmaExclusao = idUsuario => {
    const exclusao = window.confirm("Deseja excluir o usuário?");
    if (exclusao) {
        this.deletaUsuario(idUsuario);
    }
  }

  deletaUsuario = idUsuario => {
    axios.delete(`https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${idUsuario}`,
      {
        headers: {
          Authorization: "marcos-oliveira-mello"
        }
      }
    ).then(resposta => {
      alert("Usuário Removido");
      this.mostraUsuario();
    }).catch(erro => {
      alert("Erro ao apagar usuário");
    })
  }
  
  render() {
    return (    
      <ListaUsuarios>
        <h2>Lista de Usuários</h2>
        {this.state.usuarios.length === 0 && <div><h4>Carregando...</h4></div>}
        {this.state.usuarios.map(usuario => {
            return (
                <ContainerUsuario>
                  <span key={usuario.id}>{usuario.name}</span>
                  <button onClick={() => this.confirmaExclusao(usuario.id)}>X</button>
                </ContainerUsuario>
            )
        })}
      </ListaUsuarios>
    )
  }  
}


export default ListaDeUsuario;