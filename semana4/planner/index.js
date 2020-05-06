
const inputTarefa = document.getElementById("tarefa");

const diaSemana = document.getElementById("dias");

function addTarefa() {
    let item = inputTarefa.value;
    let minhaLista = " ";

    if (item == "") {
        alert("Tarefa em branco");
        
    } else if (diaSemana.value === "segunda") {
        minhaLista = document.getElementById("tarefaSegunda");
        minhaLista.innerHTML += `<li>${item}</li>`;
        inputTarefa.value = "";
        
    } else if (diaSemana.value === "terca") {
        minhaLista = document.getElementById("tarefaTerca");
        minhaLista.innerHTML += `<li>${item}</li>`;
        inputTarefa.value = "";

    } else if (diaSemana.value === "quarta") {
        minhaLista = document.getElementById("tarefaQuarta");
        minhaLista.innerHTML += `<li>${item}</li>`;
        inputTarefa.value = "";

    } else if (diaSemana.value === "quinta") {
        minhaLista = document.getElementById("tarefaQuinta");
        minhaLista.innerHTML += `<li>${item}</li>`;
        inputTarefa.value = "";

    } else if (diaSemana.value === "sexta") {
        minhaLista = document.getElementById("tarefaSexta");
        minhaLista.innerHTML += `<li>${item}</li>`;
        inputTarefa.value = "";

    } else if (diaSemana.value === "sabado") {
        minhaLista = document.getElementById("tarefaSabado");
        minhaLista.innerHTML += `<li>${item}</li>`;
        inputTarefa.value = "";

    } else if (diaSemana.value === "domingo") {
        minhaLista = document.getElementById("tarefaDomingo");
        minhaLista.innerHTML += `<li>${item}</li>`;
        inputTarefa.value = "";

    }

}



