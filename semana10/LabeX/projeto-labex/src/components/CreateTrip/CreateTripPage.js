import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import Axios from 'axios';

const CreateTripContainer = styled.div `
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

const Form = styled.div `
  display: flex;
  flex-flow: row wrap;
  align-items: flex-start;
  justify-content: space-between;
  margin: 50px auto;
  width: 32%;
  padding: 5px;
  border: 1px solid white;

  p {
    font-size: 18px;
    color: white;
    font-family: sans-serif;
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

const CreateTripPage = () => {
  const history = useHistory()

  const {form, onChange, resetForm} = useForm ({
    name: "",
    planet: "",
    date: "",
    description: "",
    durationInDays: ""
  })

  const handleInputChange = event => {
    const {name, value} = event.target

    onChange(name, value)
  }

  useEffect(() => {
   const token = localStorage.getItem("token")

    if (token === null) {
      history.push("/")
    }
  }, [history])

  const handleSubmit = async (event) => {
    event.preventDefault()

    const token = localStorage.getItem("token")
    
    const axiosConfig = {
      headers: {
        auth: token
      }
    }

    try {
      await Axios.post("https://us-central1-labenu-apis.cloudfunctions.net/labeX/marcos-oliveira-mello/trips", form, axiosConfig)
      
    } catch (e) {
      alert("Erro ao criar viagem :(")
    }

    resetForm()
  }

  const handleLogout = () => {
    localStorage.clear()
    history.push("/")
  }

  return (
    <CreateTripContainer>
      <Header>
        <span>admin </span>
        <button onClick={handleLogout}>Logout</button>
      </Header>
      <Form>
        <form onSubmit={handleSubmit}>
          <p>Nome da viagem : 
            <input 
              type="text"
              name="name"
              value={form.name}
              pattern="[A-Za-z ]{5,}"
              onChange={handleInputChange}
              required
            />
          </p>

          <p>Planeta: 
            <select 
              name="planet"
              value={form.planet}
              onChange={handleInputChange}
              required 
            >
              <option value=""></option>
              <option value="Mercúrio">Mercúrio</option>
              <option value="Vênus">Vênus</option>
              <option value="Marte">Marte</option>
              <option value="Júpter">Júpter</option>
              <option value="Saturno">Saturno</option>
              <option value="Urano">Urano</option>
              <option value="Netuno">Netuno</option>
              <option value="Plutão">Plutão</option>
            </select>
          </p> 

          <p>Data: 
            <input 
              type="date"
              name="date"
              value={form.date}
              min={new Date().toJSON().split("T")[0]}
              onChange={handleInputChange}
              required 
            />
          </p>

          <p>Descrição: 
            <input 
              type="text"
              name="description"
              value={form.description}
              pattern="[A-Za-z ]{10,}"
              onChange={handleInputChange}
              required 
            />
          </p>
          
          <p>Duração(em dias): 
            <input 
              type="number"
              name="durationInDays"
              value={form.durationInDays}
              min="50"
              onChange={handleInputChange}
              required 
            />
          </p>
          <button type="submit">Cadastrar</button>
         
        </form>
      </Form>
    </CreateTripContainer>
  );
}

export default CreateTripPage;