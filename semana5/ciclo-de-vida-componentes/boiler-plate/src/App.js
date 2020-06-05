import React from 'react'
import styled from 'styled-components'
import './styles.css'

const TarefaList = styled.ul`
  padding: 0;
  width: 200px;
`

const Tarefa = styled.li`
  padding-top: 20px;
  text-align: left;
  text-decoration: ${({completa}) => (completa ? 'line-through' : 'none')};
`

const InputsContainer = styled.div`
  display: grid;
  grid-auto-flow: column;
  gap: 10px;
`

const BtnDeletar = styled.button `
  margin-right: 0px;
  font-size: 12px;
`
const BtnEditar = styled.button `
  font-size: 12px;
  margin-left: 10px;
`

class App extends React.Component {
    state = {
      tarefas: [],
      inputValue: "",
      filter: "",
      filterNome: ""
    }

  componentDidUpdate() {
    localStorage.setItem("listaDeTarefas", JSON.stringify(this.state.tarefas));
  };

  componentDidMount() {
    if (localStorage.getItem("listaDeTarefas")) {
      const listaDeTarefas = JSON.parse(localStorage.getItem("listaDeTarefas"));

      this.setState({tarefas: listaDeTarefas});
    }
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
    this.setState({tarefas: listaNovaTarefa, inputValue: ""});
  }

  editaTarefa = (id) => {
    const tarefaEditada = this.state.tarefas.map((tarefa) => {
      if (id === tarefa.id) {
        const novaLista = {
          ...tarefa,
          texto: this.state.inputValue
        }
        return novaLista
      }
    })
    this.setState({tarefas: tarefaEditada, inputValue: ""});
  }

  apagaTarefa = () => {
    const apagaTodasTarefas = [];
    this.setState({tarefas: apagaTodasTarefas});
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
    this.setState({tarefas: tarefaCompleta});
  }

  removeTarefa = (id) => {
    const novaLista = this.state.tarefas.filter((tarefa) => {
      return id !== tarefa.id
    }) 

    this.setState({tarefas: novaLista});
  }

  ordenaDeAZ = () => {
    const listaDeAZ = this.state.tarefas
    listaDeAZ.sort(function (a, b) {
      return (a.texto > b.texto) ? 1 : ((b.texto > a.texto) ? -1 : 0);
    });
    this.setState({tarefas: listaDeAZ});
  }

  ordenaDeZA = () => {
    const listaDeZA = this.state.tarefas
    listaDeZA.sort(function (a, b) {
      return (a.texto > b.texto) ? 1 : ((b.texto > a.texto) ? -1 : 0);
    });
    listaDeZA.reverse();
    this.setState({tarefas: listaDeZA});
  }

  onChangeFilter = (event) => {
    this.setState({filter: event.target.value});
  }

  onChangeFilterNome = (event) => {
    this.setState({filterNome: event.target.value});
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
      });

    const listaPorNome = this.state.tarefas
      

    return (
      <div className="App">
        <h1>Lista de tarefas</h1>
        <InputsContainer>
          <label>Tarefa:</label>
          <input value={this.state.inputValue} onChange={this.onChangeInput}/>
          <button onClick={this.criaTarefa}>Adicionar</button>
          <button onClick={this.apagaTarefa}>Apagar Tarefas</button>
          <button onClick={this.ordenaDeAZ}>Ordenar de A-Z</button>
          <button onClick={this.ordenaDeZA}>Ordenar de Z-A</button>
        </InputsContainer>
        <br/>

        <InputsContainer>
          <label>Filtro:</label>
          <select value={this.state.filter} onChange={this.onChangeFilter}>
            <option value="">Nenhum</option>
            <option value="pendentes">Pendentes</option>
            <option value="completas">Completas</option>
          </select>
          <label>Filtro por Nome:</label>
          <select value={this.state.filterNome} onChange={this.onChangeFilterNome}>
            <option value="">Nenhum</option>
            {listaPorNome.map(tarefa => {
              return (
                <option>{tarefa.texto}</option>
              )
            })}
          </select>
        </InputsContainer>
        <TarefaList>
          {listaFiltrada.map(tarefa => {
            return (
              <div>
                <Tarefa
                  completa={tarefa.completa}
                  onClick={() => this.selectTarefa(tarefa.id)}
                >
                  {tarefa.texto} 
                </Tarefa>
                <BtnDeletar onClick={() => this.removeTarefa(tarefa.id)}>Deletar</BtnDeletar>
                <BtnEditar onClick={() => this.editaTarefa(tarefa.id)}>Editar</BtnEditar>
                <hr />
              </div>
            )
          })}
        </TarefaList>
      </div>
    )
  }
}

export default App
