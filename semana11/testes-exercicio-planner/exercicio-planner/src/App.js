import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { AppContainer, SectionContainer, Header, OptionsHeader, DaysSection } from './styles.js';

const App = () => {
  const [tasks, setTasks] = useState([])
  const [inputTask, setInputTask] = useState("")
  const [selectDay, setSelectDay] = useState("")

  const baseUrl = "https://us-central1-labenu-apis.cloudfunctions.net/generic/planner-mello-marcos-oliveira"

  let orderedTasks = {
                        monday: [],
                        tuesday: [],
                        wednesday: [],
                        thursday: [],
                        friday: [],
                        saturday: [],
                        sunday: []
                      }

  useEffect(() => {
    getTaskList()
    
  }, [tasks])

  const getTaskList = async() => {
    try {
      const response = await axios.get(`${baseUrl}`)
      
      setTasks(response.data)
    } catch (e) {
      alert("Erro ao buscar tarefas")
    }
  }

  for (let task of tasks) {
    switch (task.day) {
      case "segunda" :
        orderedTasks.monday.push(task)
        break;
      case "terca" :
        orderedTasks.tuesday.push(task)
        break;
      case "quarta" :
        orderedTasks.wednesday.push(task)
        break;
      case "quinta" :
        orderedTasks.thursday.push(task)
        break;
      case "sexta" :
        orderedTasks.friday.push(task)
        break;
      case "sabado" :
        orderedTasks.saturday.push(task)
        break;
      case "domingo" :
        orderedTasks.sunday.push(task)
        break;
      default:
        return
    }
  }

  const onChangeTask = (event) => {
    setInputTask(event.target.value)
  }

  const onChangeSelect = (event) => {
    setSelectDay(event.target.value)
  }

  const createTask = async() => {
    if (inputTask === "" || selectDay === "") {
      alert("Campo Nova tarefa ou dia da semana vazio")
    
    } else {

      const body = {
        text: inputTask,
        day: selectDay
      }

      try {
        await axios.post(`${baseUrl}`, body)

        getTaskList()
        setInputTask("")
      } catch (e) {
        alert("Erro ao criar tarefa")
      }
    }
  }

  const deleteTask = (id) => {
    axios.delete(`${baseUrl}/${id}`)
         .then(() => {
           
           getTaskList()
         })
         .catch(() => {
           alert("Não foi possivel excluir a tarefa")
         })
  }

  return (
    <AppContainer>
      <SectionContainer>
        <Header>
          <h1>MINHA SEMANA</h1>
            <OptionsHeader>
              <label>Nova Tarefa: 
                <input
                  data-testid="inputTasks" 
                  type="text"
                  value={inputTask}
                  onChange={onChangeTask}
                />
              </label>
              <label>Escolha o dia:
                <select
                  data-testid="selectTasks"
                  value={selectDay}
                  onChange={onChangeSelect}
                >
                  <option value=""></option>
                  <option value="segunda">Segunda-Feira</option>
                  <option value="terca">Terça-Feira</option>
                  <option value="quarta">Quarta-Feira</option>
                  <option value="quinta">Quinta-Feira</option>
                  <option value="sexta">Sexta-Feira</option>
                  <option value="sabado">Sábado</option>
                  <option value="domingo">Domingo</option>
                </select>
              </label>
              <button data-testid="btnTask" onClick={createTask}>Criar Tarefa</button>
            </OptionsHeader>
        </Header>
        <DaysSection data-testid="days">
          <article>
            <p>Segunda</p>
            <ul>
              {orderedTasks.monday.map((task) => {
                return <li key={task.id} onDoubleClick={() => deleteTask(task.id)}>{task.text}</li>
              })}
            </ul>
          </article>
          <article>
            <p>Terça</p>
            <ul>
              {orderedTasks.tuesday.map((task) => {
                return <li key={task.id} onDoubleClick={() => deleteTask(task.id)}>{task.text}</li>
              })}
            </ul>
          </article>
          <article>
            <p>Quarta</p>
            <ul>
              {orderedTasks.wednesday.map((task) => {
                return <li key={task.id} onDoubleClick={() => deleteTask(task.id)}>{task.text}</li>
              })}
            </ul>
          </article>
          <article>
            <p>Quinta</p>
            <ul>
              {orderedTasks.thursday.map((task) => {
                return <li key={task.id} onDoubleClick={() => deleteTask(task.id)}>{task.text}</li>
              })}
            </ul>
          </article>
          <article>
            <p>Sexta</p>
            <ul>
              {orderedTasks.friday.map((task) => {
                return <li key={task.id} onDoubleClick={() => deleteTask(task.id)}>{task.text}</li>
              })}
            </ul>
          </article>
          <article>
            <p>Sábado</p>
            <ul>
              {orderedTasks.saturday.map((task) => {
                return <li key={task.id} onDoubleClick={() => deleteTask(task.id)}>{task.text}</li>
              })}
            </ul>
          </article>
          <article>
            <p>Domingo</p>
            <ul>
              {orderedTasks.sunday.map((task) => {
                return <li key={task.id} onDoubleClick={() => deleteTask(task.id)}>{task.text}</li>
              })}
            </ul>
          </article>              
        </DaysSection>
      </SectionContainer>
      <p>Clique duplo apaga a tarefa</p>
    </AppContainer>
  );
}

export default App;
