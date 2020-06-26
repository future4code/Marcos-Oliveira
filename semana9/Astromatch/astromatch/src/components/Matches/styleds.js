import styled from 'styled-components';
 
 export const Container = styled.div `
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

export const Header = styled.div `
  display: flex;
  justify-content: space-around;
  width: 425px;
  height: 60px;
  border-bottom: 1px solid #C0C0C0;

  h3 {
    font-size: 30px;
    margin: auto 0;
    background: -webkit-linear-gradient(120deg, #ff00f7, #00d0ff);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`

export const MatchContainer = styled.div `
  display: flex;
  flex-direction: row;
  width: 400px;
`

export const ImageProfile = styled.img `
  width: 60px;
  height: 60px;
  border-radius: 80px;
  padding: 15px 15px;
`

export const Info = styled.div `
  display: flex;
  align-items: center;
  font-weight: bold;
  font-size: 20px;
`

export const HomeScreen = styled.img `
  position: absolute;
  width: 35px;
  height: 35px;
  margin: 14px -180px;
  cursor: pointer;

  :hover {
    -moz-transform: scale(0.9);
    -webkit-transform: scale(0.9);
    transform: scale(0.9);
  }
`

export const Loading = styled.div `
  display: flex;
  justify-content: center;
  margin-top: 200px;    

  svg {
    width: 15%;
    height: 15%;
  }
`