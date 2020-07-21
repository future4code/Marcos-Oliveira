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
    expect(getByTestId("days")).toBeInTheDocument()
    
    const task = await findByText("Tarefa requisição teste")
    expect(task).toBeInTheDocument()

    expect(axios.get).toHaveBeenCalled() 
    
  })
})

describe("Criar uma tarefa", () => {
  test("Cria uma tarefa com sucesso", async () => {
    axios.get = jest.fn().mockResolvedValue({
      data: [
        {
          "id": "sYLgZCjyXTwr3G9lqNIP",
          "texto": "tarefa teste",
          "dia": "segunda"
        }
      ]
    })

    const { getByTestId, getByText } = render(<App />)

    const input = getByTestId("inputTasks")
    await userEvent.type(input, "tarefa teste")
    expect(input).toHaveValue("tarefa teste")

    const select = getByTestId("selectTasks")
    userEvent.selectOptions(select, getByText(/Segunda-Feira/i))
    expect(getByText(/Segunda-Feira/i)).toBeInTheDocument()

    const button = getByTestId("btnTask")
    userEvent.click(button)

    await wait(() => expect(axios.get).toHaveBeenCalledTimes(1))
  })
})


