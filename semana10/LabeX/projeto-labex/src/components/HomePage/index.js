import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import Axios from 'axios';

const HomeContainer = styled.div `
  display: flex;
  background-color: #A020F0;
  flex-direction: column;
  align-content: flex-start;
  height: 48vw;
`

const Header = styled.div `
  display: flex;
  justify-content: flex-end;
  padding: 20px;

  span {
    padding-right: 10px;
    color: white;
    font-weight: bold;
  }
`

const App = styled.div `
  display: flex;
  justify-content: space-around;
  margin: auto 0;

  span {
    font-size: 30px;
    color: white;
    font-weight: bold;
  }

  button {
    border-radius: 10px;
    padding: 20px;
    font-weight: bold;
    font-size: 25px;
    outline: none;
  }
`

const HomePage = () => {
  const history = useHistory()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const goToFormPage = () => {
    history.push("/application-form/:tripId")
  }

  useEffect(() => {
    const token = localStorage.getItem("token")

    if (token !== null) {
      history.push("/admin")
    }
  }, [history])

  const handleLogin = async () => {
    const body = {
      email: email,
      password: password
    }

    try {
      const response = await Axios.post("https://us-central1-labenu-apis.cloudfunctions.net/labeX/marcos-oliveira-mello/login", body)
    
      localStorage.setItem("token", response.data.token)
      history.replace("/admin")
    } catch (e) {
      alert("Login falhou :(")
    }
  }

  return (
    <HomeContainer>
      <Header>
        <span>Login (apenas admin)</span>
        <input 
          type="text"
          value={email}
          placeholder="Email"
          onChange={e => setEmail(e.target.value)}
        />
        <input 
          type="password"
          value={password}
          placeholder="Senha"
          onChange={e => setPassword(e.target.value)}
        />
        <button onClick={handleLogin}>Entrar</button>
      </Header>
      <App>
        <span>Bem vindo(a) à LabeX</span>
        <button onClick={goToFormPage}>Candidatar-se a uma viagem</button>
      </App>
    </HomeContainer>
  );
}

export default HomePage;