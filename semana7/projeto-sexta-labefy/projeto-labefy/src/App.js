import React from 'react';
import Axios from 'axios';
import styled from 'styled-components';

class App extends React.Component {

  state = {
    playlists: [],
    name: ""
  }

  onChangePlaylist = (event) => {
    this.setState({novaPlaylist: event.target.value})
  }

  criarPlaylist = () => {
    const body = {
      name: this.state.novaPlaylist
    }
    Axios.post("https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists",body,
      {
        headers: {
          Authorization: "marcos-oliveira-mello"
        }
      }
    ).then(() => {
      this.setState({novaPlaylist: ""})
    }).catch((error) => {
      alert(error)
    })
  }

  async mostraUsuario() {
    try {
      const response = await Axios.get("https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists",
      {
        headers: {
          Authorization: "marcos-oliveira-mello"
        }
      }) 
  
      this.setState({playlists: response.data.results.list})
    } catch(erro) {
      alert(erro.response);
    }
  };

  render() {

    
  
    return (
      <div className="App">
        <h1>Labefy</h1>
        <span>Nova Playlist: </span>
        <input
          value={this.state.novaPlaylist}
          onChange={this.onChangePlaylist}
        />
        <button onClick={this.criarPlaylist}>Criar Playlist</button>
        {this.state.playlists.map(playlist => {
          return <li>{playlist.name}</li>
        })}
      </div>
    );
  }
}

export default App;
