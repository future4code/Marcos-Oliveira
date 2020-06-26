import React, {useEffect} from 'react';
import {useHistory} from 'react-router-dom';
import styled from 'styled-components';

const AdminContainer = styled.div `
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

  button {
    width: 280px;
    height: 180px;
    border-radius: 20px;
    outline: none;
    font-family: sans-serif;
    font-size: 28px;
    font-weight: bold;
  }
`

const AdminPage = () => {
  const history = useHistory()

  useEffect(() => {
    const token = localStorage.getItem("token")

    if (token !== null) {
      history.push("/admin")
    }
  }, [history])

  const handleLogout = () => {
    localStorage.clear()
    history.push("/")
  }

  const goToCreateTripPage = () => {
    history.push("/trips/create")
  }

  const goToListTripsPage = () => {
    history.push("/trips/list")
  }

  console.log(localStorage.token)

  return (
    <AdminContainer>
      <Header>
        <span>admin </span>
        <button onClick={handleLogout}>Logout</button>
      </Header>
      <App>
        <button onClick={goToListTripsPage}>Listar Viagens</button>
        <button onClick={goToCreateTripPage}>Cadastrar Viagem</button>
        <button>Lista de Candidatos</button>
      </App>
    </AdminContainer>
  );
}

export default AdminPage;