import React, { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';

import Profile from './components/Home/Profile';
import Matches from './components/Matches/Matches';

const AppContainer = styled.main `
  display: flex;
  justify-content: center; 
  height: 100vh;
  background-color: #C0C0C0;
`

const Button = styled.button `
  position: fixed;
  right: 5px;
  bottom: 5px;
  padding: 5px;
  border-radius: 14px;
`

const App = props => {

  const [changeScreen, setChangeScreen] = useState(true)

  const screen = () => {
    setChangeScreen(!changeScreen)
  }

  const clearMatches = async () => {
    try {
      await axios.put("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/marcos/clear")

      window.location.reload()
    } catch (err) {
      alert(err)
    }
  }

  return (
    <AppContainer>
      {changeScreen && true ? <Profile screen={screen}/> : <Matches screen={screen}/>}
      <Button onClick={clearMatches}>Limpar swipes e matches</Button>     
    </AppContainer>
  );
}

export default App;
