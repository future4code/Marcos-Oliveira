import React, { useState ,useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';

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

const MatchContainer = styled.div `
  display: flex;
  flex-direction: row;
  width: 400px;
`

const ImageProfile = styled.img `
  width: 60px;
  height: 60px;
  border-radius: 80px;
  padding: 15px 15px;
`

const Info = styled.div `
  display: flex;
  align-items: center;
`

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

  return (
    <Container>
      <Header>
        <h3>astromach</h3>
        <button onClick={props.screen}>Match</button>
      </Header>
      <div>
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