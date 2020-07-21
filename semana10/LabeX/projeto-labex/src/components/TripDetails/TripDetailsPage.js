import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import Axios from 'axios';

const TripDetailsContainer = styled.div `
  display: flex;
  background-color: #A020F0;
  flex-direction: column;
  align-content: flex-start;
  height: 48vw;

  p {
    color: white;
    margin: 0;
  }
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

const TripDetailsPage = () => {
  const [tripDetails, setTripDetails] = useState([])
  const [candidate, setCandidate] = useState([])
  const [approvedCandidate, setApprovedCandidate] = useState([])
  const [listTrips, setListTrips] = useState([])
  const [tripId, setTripId] = useState("")
  const [candidateId, setCandidateId] = useState("")
  const [decideCandidate, setDecideCandidate] = useState("")
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

  const listCandidates = () => {
    
    const token = localStorage.getItem("token")
    
    const axiosConfig = {
      headers: {
        auth: token
      }
    }
      Axios.get(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/marcos-oliveira-mello/trip/${tripId}`, axiosConfig)
      .then(response => {

      setCandidate(response.data.trip.candidates)
      setApprovedCandidate(response.data.trip.approved)
    })
      .catch (e => {
      alert("Erro ao mostrar candidatos :(")
    })
  }

  const ApproveCandidate = () => {
    
    const token = localStorage.getItem("token")
    
    const axiosConfig = {
      headers: {
        auth: token
      }
    }
      Axios.put(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/marcos-oliveira-mello/trips/${tripId}/candidates/${candidateId}/decide`, axiosConfig)
      .then(response => {

      setDecideCandidate(response.data)
    })
      .catch (e => {
      alert("Erro ao mostrar candidatos :(")
    })
  }  

  const handleTripSelect = (event) => {
    setTripId(event.target.value)
  }

  const handleCandidateSelect = (event) => {
    setCandidateId(event.target.value)
  }

  const handleLogout = () => {
    localStorage.clear()
    history.push("/")
  }

  return (
    <TripDetailsContainer>
      <Header>
        <span>admin </span>
        <button onClick={handleLogout}>Logout</button>
      </Header>

      <p>Escolha a viagem que deseja: 
        <select  
          value={tripId} 
          onChange={handleTripSelect}
        >
          <option value=""></option>
          {listTrips.map(trip => {
            return <option key={trip.id} value={trip.id}>{trip.name}</option>
          })}
        </select>
      </p>
      <div>
      <button onClick={listCandidates}>Listar Candidatos</button>
      </div>
      
      {candidate && candidate.map(trip => {
        return (
          <div key={trip.id}>
            <p>{trip.name}</p>
          </div>
        )
      })}

      <p>Escolha um candidato para ver detalhes : 
        <select  
          value={candidateId} 
          onChange={handleCandidateSelect}
        >
          <option value=""></option>
          {candidate.map(decide => {
            return <option key={decide.id} value={decide.id}>{decide.name}</option>
          })}
        </select>
      </p>

      {candidateId && candidate.map(candidate => {
        return (
          <div key={candidate.id}>
            <p>Idade: <span>{candidate.age}</span></p>
            <p>Profissão: <span>{candidate.profession}</span></p>
            <p>País: <span>{candidate.country}</span></p>
            <p>Porque devo ser escolhido: <span>{candidate.applicationText}</span></p>
            <button>Aprovar</button>
            <button>Reprovar</button>
          </div>
        )
      })}
  

    </TripDetailsContainer>
  );
}

export default TripDetailsPage;