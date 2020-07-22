import React from 'react';
import { render, wait } from '@testing-library/react';
import axios from 'axios';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom/extend-expect'
import App from './App';

describe("Renderização inicial", () => {
  test("Renderiza tudo corretamente", async() => {
    axios.get = jest.fn().mockResolvedValue({
      data: [
        {
          "id": "sYLgZCjyXTwr3G9lqNIP",
          "text": "Tarefa requisição teste",
          "day": "sabado",
        }
      ]
    })
    
    const { getByTestId, findByText } = render(<App />)

    const input = getByTestId("inputTasks")
    expect(input).toBeInTheDocument()
        
    expect(getByTestId("selectTasks")).toBeInTheDocument()
    expect(getByTestId("btnTask")).toBeInTheDocument()

    const task = await findByText("Tarefa requisição teste")
    expect(task).toBeInTheDocument()

    expect(axios.get).toHaveBeenCalled() 
    
  })
})

describe("Criar uma tarefa", () => {
  test("Cria uma tarefa com sucesso", async () => {
    const { getByTestId, getByText } = render(<App />)

    const input = getByTestId("inputTasks")
    await userEvent.type(input, "tarefa teste")
    expect(input).toHaveValue("tarefa teste")

    const select = getByTestId("selectTasks")
    userEvent.selectOptions(select, getByText(/Sexta-Feira/i))

    //expect(select.toBeEqual("Sexta-Feira")).toBeInTheDocument()

    //expect(select).toHaveValue.selectOptions(/Sexta-Feira/)

    const button = getByTestId("btnTask")
    userEvent.click(button)

    
    //  data: [
    //    {
    //      "id": "sYLgZCjyXTwr3G9lqprldNIP",
    //      "text": "tarefa teste",
    //      "day": "sexta"
    //    }
    //  ]
    //})

    axios.post = jest.fn().mockResolvedValue({
      data: [
        {
          "id": "sYLgZCjyXTwr3G9lqNIP",
          "text": "tarefa teste",
          "day": "sexta"
        }
      ]
    })

    expect(axios.post).toHaveBeenCalledWith({
      text: 'tarefa teste',
      day: 'sexta'
    })

    await wait(() => expect(axios.post).toHaveBeenCalled())
    await wait(() => expect(input).toHaveValue(""))
  })
})

/*
describe('Renderizacao inicial', () => {

  test('Renderiza tudo corretamente', async () => {
    const utils = render(<App />)

    
    const select = utils.getByLabelText(/'dia'/i)
    const button = utils.getByText('Criar Tarefa')

    
    expect(select).toBeInTheDocument()
    expect(button).toBeInTheDocument()
    expect(utils.getByText(/Domingo/i)).toBeInTheDocument()

  })
})*/

/*
test('Cria a tarefa com sucesso', async () => {
  axios.get = jest.fn().mockResolvedValue({
    data: [
      {
        "id": "sYLgZCjyXTwr3G9lqNIP",
        "texto": "tarefa teste",
        "dia": "segunda"
      }
    ]
  })

  axios.post = jest.fn().mockResolvedValue()

  const { getByLabelText, getByText } = render(<App />)

  const input = getByLabelText('Nova Tarefa')
  const select = getByLabelText(/'dia'/i)

  await userEvent.type(input, 'tarefa teste')
  userEvent.selectOptions(select, getByText(/'segunda'/i))

  expect(input).toHaveValue('tarefa teste')
  expect(select).toHaveValue('segunda')

  const button = getByText(/Criar Tarefa/)
  userEvent.click(button)

  expect(axios.post).toHaveBeenCalledWith('https://us-central1-labenu-apis.cloudfunctions.net/generic/tarefas', {
    texto: 'tarefa teste',
    completa: false
  })

  await wait(() => expect(axios.get).toHaveBeenCalledTimes(2))
  await wait(() => expect(input).toHaveValue(''))
})
*/
