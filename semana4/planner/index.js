
const inputTarefa = document.getElementById("tarefa");

const minhaLista = document.getElementsByTagName("ul")[0];

function addTarefa() {
    let item = inputTarefa.value;

    if (dias === "Segunda-feira") {
    minhaLista.innerHTML += `<li>${item}</li>`;
    meuInput.value = " ";
    } 
}