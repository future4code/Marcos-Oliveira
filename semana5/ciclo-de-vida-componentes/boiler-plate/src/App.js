import React from 'react'
import styled from 'styled-components'
import './styles.css'

const TarefaList = styled.ul`
  padding: 0;
  width: 200px;
`

const Tarefa = styled.li`
  text-align: left;
  text-decoration: ${({completa}) => (completa ? 'line-through' : 'none')};
`

const InputsContainer = styled.div`
  display: grid;
  grid-auto-flow: column;
  gap: 10px;
`

const BtnEditar = styled.button `
  margin-left: 100px;
`

class App extends React.Component {
    state = {
      tarefas: [],
      inputValue: '',
      filter: ''
    }

  componentDidUpdate() {
    const novaTarefa = this.state
    localStorage.getItem("tarefas", JSON.stringify(novaTarefa))
  };

  componentDidMount() {
    const tarefaNoLocalStorage = localStorage.getItem("tarefa")
    const tarefaObjeto = JSON.parse(tarefaNoLocalStorage)
  };

  onChangeInput = (event) => {
    this.setState({inputValue: event.target.value});
  }

  criaTarefa = () => {
    const tarefaNova = {
      id: Date.now(),
      texto: this.state.inputValue,
      completa: false
    };

    const listaNovaTarefa = [...this.state.tarefas, tarefaNova];
    this.setState({tarefas: listaNovaTarefa});

    
  }

  apagaTarefa = () => {
    const apagaTodasTarefas = []
    this.setState({tarefas: apagaTodasTarefas})
  }

  selectTarefa = (id) => {
    const tarefaCompleta = this.state.tarefas.map((tarefa) => {
      if (id === tarefa.id) {
        const novaLista = {
          ...tarefa,
          completa: !tarefa.completa
        }
        return novaLista
      } else {
        return tarefa
      }
    })
    this.setState({tarefas: tarefaCompleta})
  }

  removeTarefa = (id) => {
    const novaLista = this.state.tarefas.filter((tarefa) => {
      return id !== tarefa.id
    }) 

    this.setState({tarefas: novaLista})
  }

  onChangeFilter = (event) => {
    this.setState({filter: event.target.value});
  }

  render() {
    const listaFiltrada = this.state.tarefas
      .filter(tarefa => {
        switch (this.state.filter) {
          case 'pendentes':
            return !tarefa.completa
          case 'completas':
            return tarefa.completa
          default:
            return true
        }
      })

    return (
      <div className="App">
        <h1>Lista de tarefas</h1>
        <InputsContainer>
          <input value={this.state.inputValue} onChange={this.onChangeInput}/>
          <button onClick={this.criaTarefa}>Adicionar</button>
          <button onClick={this.apagaTarefa}>Apagar Tarefas</button>
        </InputsContainer>
        <br/>

        <InputsContainer>
          <label>Filtro</label>
          <select value={this.state.filter} onChange={this.onChangeFilter}>
            <option value="">Nenhum</option>
            <option value="pendentes">Pendentes</option>
            <option value="completas">Completas</option>
          </select>
        </InputsContainer>
        <TarefaList>
          {listaFiltrada.map(tarefa => {
            return (
              <Tarefa
                completa={tarefa.completa}
                onClick={() => this.selectTarefa(tarefa.id)}
                onDoubleClick={() => this.removeTarefa(tarefa.id)}
              >
                {tarefa.texto} 
              </Tarefa>
            )
          })}
        </TarefaList>
      </div>
    )
  }
}

export default App
