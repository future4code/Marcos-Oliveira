import React from 'react';
import Axios from 'axios';
import styled from 'styled-components';

const ContainerApp = styled.div `
  display: flex;
  flex-direction: column;
  align-items: center;
`

const SelectCapsula = styled.select `
  width: 150px;
  padding: 5px;
  font-weight: bold;
  font-size: 15px;
`

const ImgCapsula = styled.img `
  display: flex;
  flex-direction: column;
  margin: 20px 20px;
`

class App extends React.Component {
  
  state = {
    capsulas: [],
    imagesCapsulas: []
  }

  componentDidMount = () => {
    Axios.get("https://api.spacexdata.com/v3/dragons")
         .then(response => {
           this.setState({capsulas: response.data})
         })
         .catch(error => {
           alert(error)
         })
  }

  ImageDragon = (event) => {
    const dragonName = event.target.value
    if (dragonName === "Dragon 1") {
      Axios.get("https://api.spacexdata.com/v3/dragons/dragon1")
           .then(response => {
             this.setState({imagesCapsulas: response.data.flickr_images})
             const imagensQueAparecem = this.state.imagesCapsulas.slice(2, 4)
             this.setState({imagesCapsulas: imagensQueAparecem})
           })
           .catch(err => {
             alert(err)
           })
    } else if (dragonName === "Dragon 2") {
      Axios.get("https://api.spacexdata.com/v3/dragons/dragon2")
           .then(response => {
             this.setState({imagesCapsulas: response.data.flickr_images})
           })
           .catch(err => {
             alert(err)
           })
    }
  }

  render() {

    const images = this.state.imagesCapsulas  ? (this.state.imagesCapsulas.map(image => {
      return <ImgCapsula src={image} alt="Imagem da Cápsula" />
    })
    ) : (
      <div />
    )
  
    return (
      <ContainerApp>
        <h1>Cápsulas Dragon SpaceX</h1>
        <SelectCapsula onChange={this.ImageDragon}>
          <option value=""></option>
          {this.state.capsulas.map(capsula => {
            return <option value={capsula.name}>{capsula.name}</option>
          })}
        </SelectCapsula>
        <div>{images}</div>
      </ContainerApp>
    );
  }
}

export default App;