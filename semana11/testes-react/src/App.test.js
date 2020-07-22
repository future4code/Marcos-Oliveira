import React from "react";
import { render, fireEvent, wait } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import App from "./App";

test ("Ao digitar no input e clicar no botão Adicionar, deve aparecer o post na tela", async() => {

  //preparação  
  const { getByPlaceholderText, getByText, getByTestId } = render(<App />)
  
  const inputPost = getByPlaceholderText(/Novo Post/i)
  const addButton = getByText(/Adicionar/i)

  //execução
  fireEvent.change(inputPost, { target: { value: "Post 1" } })
  fireEvent.click(addButton)

  //verificação
  let post = getByTestId(/post-content/i)
  wait(() => {
    expect(post).toHaveTextContent("Post 1")
  })

  //preparação - botão curtir
  const likeButton = getByTestId(/like-button/i)

  //execução - botão curtir
  fireEvent.click(likeButton)

  //verificação - botão curtir
  expect(likeButton).toHaveTextContent(/descurtir/i)

  //preparação - botão apagar
  const deleteButton = getByText(/apagar/i)
  
  //execução - botão apagar
  fireEvent.click(deleteButton)

  //verificação - botão apagar
  wait(() => {
    expect(post).toBeNull()
  })
})

test("Quando o usuário cria um post, o input deve ser limpo", () => {
  //preparação
  const { getByPlaceholderText, getByText } = render(<App />)

  //execução
  const inputPost = getByPlaceholderText(/Novo Post/i)
  const addButton = getByText(/Adicionar/i)

  //verificação
  

})

