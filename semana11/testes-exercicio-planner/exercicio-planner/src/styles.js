import styled from 'styled-components'

export const AppContainer = styled.main `
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 655px;
  background-color: #D3D3D3;

  p {
    margin: 10px 20px 10px auto;
    font-weight: bolder;
    text-shadow: 2px 1px white;
  }
`

export const SectionContainer = styled.section `
  width: 95%;
  height: 600px;
  background-color: #6495ED;
  border-radius: 10px;
  margin-top: 14px;
`

export const Header = styled.div `
  h1 {
    color: white;
    font-family: Arial, Helvetica, sans-serif;
    padding: 5px 25px;
    font-size: 30px;
    text-shadow: 2px 1px black;
  }
`

export const OptionsHeader = styled.div `
  display: flex;
  justify-content: center;
  align-items: center;

  label {
    font-size: 20px;
    color: white;
    font-family: sans-serif;
    padding-right: 25px;
    text-shadow: 2px 1px black;
  }

  input {
    padding: 3px;
    margin-left: 8px;
  }

  select {
    padding: 3px;
    margin-left: 8px;
    font-weight: bold;
  }

  button {
    padding: 4px;
    margin-left: 5px;
    font-weight: bold;
  }
`

export const DaysSection = styled.div `
  display: flex;
  justify-content: center;
  flex-direction: row;
  padding-top: 30px;

  article {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 13.9%;
    height: 440px;
    border-right: 2px solid white;
    border-left: 2px solid white;
  }

  p {
    font-family: sans-serif;
    font-size: 26px;
    color: white;
    font-weight: bold;
    text-shadow: 2px 1px black;
    margin: 0;
    padding-bottom: 10px;
  }

  ul {
    display: flex;
    flex-direction: column;
    margin-right: 50px;
  }

  li {
    color: white;
    font-family: sans-serif;
    text-shadow: 2px 1px black;
    font-size: 18px;
    padding-top: 10px;
  }
`

