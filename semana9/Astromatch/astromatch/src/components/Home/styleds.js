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
  margin-bottom: 20px;
  border-bottom: 1px solid #C0C0C0;

  h3 {
    font-size: 30px;
    margin: auto 0;
    background: -webkit-linear-gradient(120deg, #ff00f7, #00d0ff);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`

export const ProfileImage = styled.img `
  width: 400px;
  height: 450px;
  border-radius: 15px;
  border: none;
`

export const Info = styled.div `
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

export const MatchScreen = styled.img `
  position: absolute;
  width: 35px;
  height: 35px;
  margin: 14px 180px;
  cursor: pointer;

  :hover {
    -moz-transform: scale(0.9);
    -webkit-transform: scale(0.9);
    transform: scale(0.9);
  }
`

export const Buttons = styled.div `
  display: flex;
  justify-content: space-around;
  width: 100%;
  margin-top: 20px;
`

export const Like = styled.img `
  width: 40px;
  height: 40px;

  :hover {
    -moz-transform: scale(1.2);
    -webkit-transform: scale(1.2);
    transform: scale(1.4);
  }
`

export const Loading = styled.div `
  position: absolute;
  display: flex;
  justify-content: center;
  margin-top: 200px;    

  svg {
    width: 15%;
    height: 15%;
  }
`

