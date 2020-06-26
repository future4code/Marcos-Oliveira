import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {Container, Header, ProfileImage, Info, MatchScreen, Buttons, Like, Loading} from'./styleds'

import heart from '../../imagens/heart.png'
import dislike from '../../imagens/dislike.png'
import match from '../../imagens/match.png'

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

  const renderContent = () => {
    if (profile.photo === undefined || profile.photo === false) {
      return <Loading>
        <svg viewBox="0 0 48.000000 48.000000">
          <g transform="translate(0.000000,48.000000) scale(0.100000,-0.100000)" fill="#A020F0">
            <path d="M123 413 c-31 -6 -70 -48 -77 -84 -10 -51 25 -113 111 -195 43 -41
                    80 -74 83 -74 3 0 40 33 83 74 116 110 141 189 81 250 -35 34 -80 40 -126 17
                    -38 -18 -39 -18 -75 0 -21 11 -42 18 -48 18 -5 -1 -20 -4 -32 -6z"
            />
          </g>
        </svg>
      </Loading>
    }
  }

  return (
    <Container>
      <Header>
        <h3>astromach</h3>
        <MatchScreen src={match} onClick={props.screen} alt="Ir para tela match"/>
      </Header>
      {renderContent()}
      <div>
        <ProfileImage src={profile.photo} />
          <Info>
            <span>{profile.name}, {profile.age}</span>
            <p>{profile.bio}</p>
          </Info>
        <Buttons>
          <Like src={dislike} onClick={dislikePerson} alt="Dislike"/>
          <Like src={heart} onClick={likePerson} alt="Like"/>
        </Buttons>
      </div>
    </Container>      
  )
}

export default Profile;
