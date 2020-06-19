import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';

import FavoriteIcon from '@material-ui/icons/Favorite';

const Container = styled.div `
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: auto;
  width: 65vh;
  height: 45vw;
  border: none;
  border-radius: 20px;
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.4);
  margin-top: 20px;
  background-color: white;
`

const Header = styled.div `
  display: flex;
  justify-content: space-around;
  width: 425px;
  height: 60px;
  margin-bottom: 20px;
  border-bottom: 1px solid #C0C0C0;

  h3 {
    font-size: 30px;
    margin: auto 0;
  }
`

const ProfileImage = styled.img `
  width: 400px;
  height: 450px;
  border-radius: 15px;
  border: 1px solid black;
`

const Info = styled.div `
  display: flex;
  flex-direction: column;
  position: absolute;
  width: 400px;
  bottom: 116px;
  padding-top: 10px;
  background-color: rgba(0, 0, 0, 0.5);
  font-family: sans-serif;
  text-shadow: 1px 1px black;
  color: white;

  span {
    font-size: 20px;
    padding-left: 8px;
    font-weight: bolder;
  }
 
  p {
    padding-left: 8px;
    font-weight: bold;
  }
`

const Buttons = styled.div `
  display: flex;
  justify-content: space-around;
  width: 100%;
  margin-top: 30px;
`

const Profile = props => {

  const [profile, setProfile] = useState({})

  useEffect(() => {
    getProfiles()
  }, [])
  
  const getProfiles = async () => {
    try {
      const response = await axios.get("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/marcos/person")
      
      setProfile(response.data.profile)
    } catch (err) {
      alert(err)
    }
  }

  const likePerson = async () => {
    try {
      const body = {
        id: profile.id,
        choice: true
      }
      await axios.post("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/marcos/choose-person", body)
      
      getProfiles()
    } catch (err) {
      alert(err)
    }
  }

  const dislikePerson = async () => {
    try {
      const body = {
        id: profile.id,
        choice: false
      }
      await axios.post("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/marcos/choose-person", body)
         
      getProfiles()
    } catch (err) {
      alert(err)
    }
  }

  return (
    <Container>
      <Header>
        <h3>astromach</h3>
        <button onClick={props.screen}>Match</button>
        <FavoriteIcon></FavoriteIcon>
      </Header>
      <ProfileImage src={profile.photo} alt="Foto Perfil" />
        <Info>
          <span>{profile.name}, {profile.age}</span>
          <p>{profile.bio}</p>
        </Info>
      <Buttons>
        <button onClick={dislikePerson}>Descartar</button>
        <button onClick={likePerson}>Match</button>
      </Buttons>
    </Container>      
  )
}

export default Profile;
