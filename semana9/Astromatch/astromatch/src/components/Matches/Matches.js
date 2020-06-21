import React, { useState ,useEffect } from 'react';
import axios from 'axios';
import {Container, Header, MatchContainer, ImageProfile, Info, HomeScreen, Loading} from './styleds'

import home from '../../imagens/home.png'

const Matches = props => {
  const [showMatches, setShowMatches] = useState([])

  useEffect(() => {
    axios.get("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/marcos/matches")
         .then((response) => {
           setShowMatches(response.data.matches)
         })
         .catch((err) => {
           alert(err)
         })
  }, [])

  const renderContent = () => {
    if (showMatches.length === 0) {
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
        <HomeScreen src={home} onClick={props.screen} alt="Voltar home"/>
      </Header>
      <div>
        {renderContent()}
        {showMatches.map(match => {
          return (
            <MatchContainer>
              <ImageProfile src={match.photo} alt="Foto match" />
              <Info>
                <span>{match.name}</span>
              </Info>
            </MatchContainer>
          )
        })} 
      </div>
    </Container>   
  )
}

export default Matches;