import React, { useState, useEffect } from 'react';
import { useHistory } from "react-router-dom";
import Axios from 'axios';
import styled from 'styled-components';

const FormContainer = styled.div `
  display: flex;
  background-color: #A020F0;
  flex-direction: column;
  align-content: flex-start;
  height: 48vw;
`

const Header = styled.div `
  padding: 30px 40px;
  color: white;
`

const Form = styled.div `
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  margin: 50px auto;
  width: 35%;
  padding: 5px;
  border: 1px solid white;

  p {
    font-size: 18px;
    color: white;
    font-family: sans-serif;
    padding: 20px 10px;
    margin: 0;
  }
`

const useForm = initialValues => {
  const[form, setForm] = useState(initialValues)
  
  const onChange = (name, value) => {
    const newForm = { ...form, [name]: value}
    setForm(newForm)
  }

  const resetForm = () => {
    setForm(initialValues)
  }

  return {form, onChange, resetForm}
}

const FormPage = () => {
  const [listTrips, setListTrips] = useState([])
  const [catchId, setCatchId] = useState("")

  const {form, onChange, resetForm} = useForm ({
    name: "",
    age: "",
    applicationText: "",
    profession: "",
    country: ""
  })

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

  const handleSelect = (event) => {
    setCatchId(event.target.value)
  }

  const handleInputChange = event => {
    const {name, value} = event.target

    onChange(name, value)
  }

  const handleSubmit = async (event) => {
    event.preventDefault()

    try {
      await Axios.post(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/marcos-oliveira-mello/trips/${catchId}/apply`,form)
      
    } catch (e) {
      alert("Erro ao se candidatar :(")
    }

    resetForm()
  }

  return (
    <FormContainer>
      <Header>
        <h2>Formulário de cadastro</h2>
      </Header>
      <Form>
        <form onSubmit={handleSubmit}>
          <p>Escolha a viagem que deseja: 
            <select 
              name="trip" 
              value={catchId} 
              onChange={handleSelect}
              required
            >
              <option value=""></option>
              {listTrips.map(trip => {
                return <option key={trip.id} value={trip.id}>{trip.name}</option>
              })}
            </select>
          </p> 
          <p>Nome completo: 
            <input 
              type="text"
              name="name"
              value={form.name}
              pattern="[A-Za-z ]{3,}"
              onChange={handleInputChange}
              required
            />
          </p>
          <p>Idade: 
            <input 
              type="number"
              name="age"
              value={form.age}
              min="18"
              onChange={handleInputChange}
              required
            />
          </p> 
          <p>Porque devo ser escolhido? 
            <input 
              type="text"
              name="applicationText"
              value={form.applicationText}
              pattern="[A-Za-z ]{30,}"
              onChange={handleInputChange}
              required
            />
          </p>
          <p>Profissão: 
            <input 
              type="text"
              name="profession"
              value={form.profession}
              pattern="[A-Za-z ]{10,}"
              onChange={handleInputChange}
              required
            />
          </p>
          <p>País: 
            <select 
              name="country"
              value={form.country}
              onChange={handleInputChange}
              required 
            >
              <option value=""></option>
              <option value="Brasil">Brasil</option>
              <option value="Inglaterra">Inglaterra</option>
              <option value="Austrália">Austrália</option>
            </select>
          </p>       
          <button>Candidatar-se</button>
        </form>
      </Form>
    </FormContainer>
  );
}

export default FormPage;

