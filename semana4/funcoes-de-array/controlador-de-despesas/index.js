
const meuContainer = document.getElementById("container");
const secaoDespesaDetalhada = document.createElement("section");
meuContainer.appendChild(secaoDespesaDetalhada);
secaoDespesaDetalhada.id = 'DespesaDetalhada';    // ------------------ Cria a segunda seção

const mostraDespesa = document.getElementById("DespesaDetalhada");
mostraDespesa.innerHTML += "<h2>Despesas Detalhadas</h2>";
mostraDespesa.innerHTML += "<label>Tipo (Casa, Viagem, Alimentação, Transporte, Outros)</label>";
mostraDespesa.innerHTML += "<select id='tipoDespesaDetalhada'><option></option><option> Casa </option><option> Viagem </option><option> Alimentação </option><option> Transporte </option><option> Outros </option></select>"
mostraDespesa.innerHTML += "<label>Valor Mínimo<input id='valorMinimo' type='number'/></label>";
mostraDespesa.innerHTML += "<label>Valor Máximo<input id='valorMaximo' type='number'/></label>";
mostraDespesa.innerHTML += "<button id='botaoFiltrar' onclick='executaFiltraDespesaEMostraExtrato()'>Filtrar</button>";
mostraDespesa.innerHTML += "<button id='limparCampo' onclick='limparFiltros()'>Limpar Filtros</button>";


const secaoExibeDespesas = document.createElement("section");
meuContainer.appendChild(secaoExibeDespesas);
secaoExibeDespesas.id = 'exibeDespesas';     // ----------------------- Cria uma seção só para exibir os filtros
const exibe = document.getElementById("exibeDespesas");


const secaoExtrato = document.createElement("section");
meuContainer.appendChild(secaoExtrato);     // ------------------------- Cria a seção Extrato
secaoExtrato.id = 'exibeExtrato';

const extrato = document.getElementById("exibeExtrato");
extrato.innerHTML += "<h2>Extrato</h2>"
extrato.innerHTML += "<span>Valor Total: </span>"

const arrayDespesa = [];

function cadastrar() {

    const valorDespesa = document.getElementById("valorDespesa");
    const tipoDespesa = document.getElementById("tipoDespesa");
    const descricaoDespesa = document.getElementById("descricaoDespesa");

    let valor = valorDespesa.value;
    let tipo = tipoDespesa.value;
    let descricao = descricaoDespesa.value; 

    let objDespesa = {
        valor: valor,
        tipo: tipo,
        descricao: descricao
    }
    
    if ((valorDespesa.value === "") || (tipoDespesa.value === "") || (descricaoDespesa.value === "")) {
        alert("Campo(s) em branco");
    } else {
        arrayDespesa.push(objDespesa);
    }
    
    valorDespesa.value = "";
    tipoDespesa.value = "";
    descricaoDespesa.value = "";

}

const valorMinimo = document.getElementById("valorMinimo");
const valorMaximo = document.getElementById("valorMaximo");
const tipoConsulta = document.getElementById("tipoDespesaDetalhada");
let somaValorDespesa = Number(0);

function filtrarDespesa() {

    let minimo = valorMinimo.value;
    let maximo = valorMaximo.value;

    arrayDespesa.forEach ((despesas, index, array) => {
        if ((despesas.valor >= minimo) && (despesas.valor <= maximo)) {
            const string =  "Tipo da Despesa: " + despesas.tipo + " -- " + "Valor: " + despesas.valor + " -- " +  "Descrição: " + despesas.descricao;
            exibe.innerHTML += "<p>" + string + "</p";
            somaValorDespesa += Number(despesas.valor);
        }
    })

    valorMaximo.value = "";
    valorMinimo.value = "";
    tipoConsulta.value = "";
}

function mostraExtrato() {
    extrato.innerHTML += "<span>" + somaValorDespesa + "</span>";
}


function executaFiltraDespesaEMostraExtrato() {
    filtrarDespesa();
    mostraExtrato();
}

function limparFiltros() {
    document.getElementById("exibeDespesas").innerHTML = "";
}






