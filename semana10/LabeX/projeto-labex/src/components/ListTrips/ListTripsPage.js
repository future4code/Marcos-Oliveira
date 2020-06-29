import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import Axios from 'axios';

const ListTripsContainer = styled.div `
  display: flex;
  background-color: #A020F0;
  flex-direction: column;
  align-content: flex-start;
  height: 52vw;
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

const List = styled.div `
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 10px;

  label {
    color: white;
  }
`

const ListTripsPage = () => {
  const [listTrips, setListTrips] = useState([])
  const history = useHistory()

  useEffect(() => {
    Axios
      .get("https://us-central1-labenu-apis.cloudfunctions.net/labeX/marcos-oliveira-mello/trips")
      .then(response => {

        setListTrips(response.data.trips)
      })
      .catch(() => {
        alert("Erro ao listar as viagens");
      });
  }, [])

  const handleLogout = () => {
    localStorage.clear()
    history.push("/")
  }

  return (
    <ListTripsContainer>
      <Header>
        <span>admin </span>
        <button onClick={handleLogout}>Logout</button>
      </Header>
      
      {listTrips.map(trip => {
          return (
            <List key={trip.id}>
              <label>Nome: <span>{trip.name}</span></label>
              <label>Planeta: <span>{trip.planet}</span></label>
              <label>Descrição: <span>{trip.description}</span></label>
              <label>Data: <span>{trip.date}</span></label>
              <label>Duração(em dias): <span>{trip.durationInDays}</span></label>
            </List>
          )
        })}      
      
    </ListTripsContainer>
  );
}

export default ListTripsPage;
