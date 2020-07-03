import React from 'react';
import { render, wait } from '@testing-library/react';
//import axios from 'axios;'
import userEvent from '@testing-library/user-event';
import App from './App';

describe('Renderizacao inicial', () => {

  test('Renderiza tudo corretamente', async () => {
    const utils = render(<App />)

    const input = utils.getByLabelText('Nova Tarefa')
    const select = utils.getByLabelText(/'dia'/i)
    const button = utils.getByText('Criar Tarefa')

    expect(input).toBeInTheDocument()
    expect(select).toBeInTheDocument()
    expect(button).toBeInTheDocument()
    expect(utils.getByText(/Domingo/i)).toBeInTheDocument()

  })
})

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
