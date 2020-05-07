
const meuContainer = document.getElementById("container");
const secaoDespesaDetalhada = document.createElement("section");

meuContainer.appendChild(secaoDespesaDetalhada);
secaoDespesaDetalhada.id = 'DespesaDetalhada';

const mostraDespesa = document.getElementById("DespesaDetalhada");
mostraDespesa.innerHTML += "<h2>Despesas Detalhadas</h2>";
mostraDespesa.innerHTML += "<label>Tipo (Casa, Viagem, Alimentação, Transporte, Outros)</label>";
mostraDespesa.innerHTML += "<select id='tipoDetalheDespesa'><option></option><option> Casa </option><option> Viagem </option><option> Alimentação </option><option> Transporte </option><option> Outros </option></select>"
mostraDespesa.innerHTML += "<label>Valor Mínimo<input id='valorMinimo' type='number'/></label>";
mostraDespesa.innerHTML += "<label>Valor Máximo<input id='valorMaximo' type='number'/></label>";
mostraDespesa.innerHTML += "<button id='botaoFiltrar' onclick='filtrarDespesa()'>Filtrar</button>";
mostraDespesa.innerHTML += "<button id='limparCampo' onclick='limparCampo()'>Limpar Filtros</button>";

const arrayDespesa = [];

function cadastrar() {

    const valorDespesa = document.getElementById("valorDespesa");
    const tipoDespesa = document.getElementById("tipoDespesa");
    const descricaoDespesa = document.getElementById("descricaoDespesa");

    let despesa = valorDespesa.value;
    let tipo = tipoDespesa.value;
    let descricao = descricaoDespesa.value; 

    let objDespesa = {
        despesa: despesa,
        tipo: tipo,
        descricao: descricao
    }
    
    if ((valorDespesa.value === "") || (tipoDespesa.value === "") || (descricaoDespesa.value === "")) {
        alert ("Campo(s) em branco");
    } else {
        arrayDespesa.push(objDespesa);
    }

    console.log(arrayDespesa);
    
    valorDespesa.value = "";
    tipoDespesa.value = "";
    descricaoDespesa.value = "";

}









