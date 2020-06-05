import React from 'react';
import './App.css';
import Post from './components/Post/Post';
import styled from 'styled-components';

const CaixaDeTexto = styled.input `
  display: flex;
  justify-content: center;
  padding: 4px;
  width: 290px;
  margin-top: 6px;
`

const BotaoPost = styled.button `
  padding: 5px;
  margin: 6px 6px;
`

class App extends React.Component {

  state = {
    posts: [
      {
        nomeUsuario:"Paulinha",
        fotoUsuario: "https://picsum.photos/50/50",
        fotoPost: "https://picsum.photos/200/150"
      },
      {
        nomeUsuario:"Marcos",
        fotoUsuario: "https://picsum.photos/50/51",
        fotoPost: "https://picsum.photos/200/151"
      },
      {
        nomeUsuario:"Amanda",
        fotoUsuario: "https://picsum.photos/50/52",
        fotoPost: "https://picsum.photos/200/152"
      },
    ],

    inputNomeUsuario: "",
    inputFotoUsuario: "",
    inputFotoPost: "",
  }

  adicionaPost = () => {
    const novoPost = {
      nomeUsuario: this.state.inputNomeUsuario,
      fotoUsuario: this.state.inputFotoUsuario,
      fotoPost: this.state.inputFotoPost
    }
    const novaPost = [...this.state.posts, novoPost]
    this.setState({posts: novaPost})
  }

  onChangeInputNomeUsuario = (event) => {
    this.setState({ inputNomeUsuario: event.target.value })
  }

  onChangeInputFotoUsuario = (event) => {
    this.setState({ inputFotoUsuario: event.target.value })
  }

  onChangeInputFotoPost = (event) => {
    this.setState({ inputFotoPost: event.target.value })
  }

  render() {

    const listaDePosts = this.state.posts.map((post) => {
      
      return (
        <Post
          nomeUsuario={post.nomeUsuario}
          fotoUsuario={post.fotoUsuario}
          fotoPost={post.fotoPost}
        />
      )
    })
  

    return (
      <div className={'app-container'}>
        <div>
          <CaixaDeTexto
            value={this.state.inputNomeUsuario}
            onChange={this.onChangeInputNomeUsuario}
            placeholder={"Nome do Usuário"}
          />

          <CaixaDeTexto
            value={this.state.inputFotoUsuario}
            onChange={this.onChangeInputFotoUsuario}
            placeholder={"URL da Foto do Usuário"}
          />

          <CaixaDeTexto
            value={this.state.inputFotoPost}
            onChange={this.onChangeInputFotoPost}
            placeholder={"URL da Foto do Post"}
          />
        </div>

        <BotaoPost onClick={this.adicionaPost}>Adicionar Post</BotaoPost>

        {listaDePosts}

      </div>
    );
  }
}

export default App;
