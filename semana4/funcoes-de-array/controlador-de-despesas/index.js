
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
mostraDespesa.innerHTML += "<button id='botaoFiltrar' onclick='executaFiltrarDespesaEImprmirExtrato()'>Filtrar</button>";
mostraDespesa.innerHTML += "<button id='limparCampo' onclick='limparFiltros()'>Limpar Filtros</button>";


const articleExibeDespesas = document.createElement("article");
secaoDespesaDetalhada.appendChild(articleExibeDespesas);
articleExibeDespesas.id = 'exibeDespesas';     // ----------------------- Cria um article para exibir os filtros
const exibe = document.getElementById("exibeDespesas");


const secaoExtrato = document.createElement("section");
meuContainer.appendChild(secaoExtrato);     // ------------------------- Cria a seção Extrato
secaoExtrato.id = 'exibeExtrato';

const extrato = document.getElementById("exibeExtrato");
extrato.innerHTML += "<h2>Extrato</h2>"

const articleExibeExtrato = document.createElement("article"); // ---------- Cria article para exibir valor do extrato
secaoExtrato.appendChild(articleExibeExtrato);
articleExibeExtrato.id = 'mostraExtrato';

const casa = [];
const viagem = [];
const alimentacao = [];
const transporte = [];
const outros = [];



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
        if (tipoDespesa.value === "Casa") {
            casa.push(objDespesa);
        } else if (tipoDespesa.value === "Viagem") {
            viagem.push(objDespesa);
        } else if (tipoDespesa.value === "Alimentação") {
            alimentacao.push(objDespesa);
        } else if (tipoDespesa.value === "Transporte") {
            transporte.push(objDespesa);
        } else if (tipoDespesa.value === "Outros") {
            outros.push(objDespesa);
        }
    }

    valorDespesa.value = "";
    tipoDespesa.value = "";
    descricaoDespesa.value = "";

}



const valorMinimo = document.getElementById("valorMinimo");
const valorMaximo = document.getElementById("valorMaximo");
const tipoConsulta = document.getElementById("tipoDespesaDetalhada");
<<<<<<< HEAD
let despesaCasa = Number(0);
=======
let despesaCasa = 0;
>>>>>>> daf9d043291023b91a5ec4d11e278642ab7afba2
let despesaViagem = 0;
let despesaAlimentacao = 0;
let despesaTransporte = 0;
let despesaOutros = 0;

function filtrarDespesa() {

    let minimo = valorMinimo.value;
    let maximo = valorMaximo.value;

    if (tipoConsulta.value === "Casa") {
        casa.forEach ((despesas, index, array) => {
            if ((despesas.valor >= minimo) && (despesas.valor <= maximo)) {
                const stringCasa =  "Tipo da Despesa: " + despesas.tipo + " -- " + "Valor: " + despesas.valor + " -- " +  "Descrição: " + despesas.descricao;
                exibe.innerHTML += "<p>" + stringCasa + "</p";
                despesaCasa += Number(despesas.valor);
            }   
        })
    } else if (tipoConsulta.value === "Viagem") {
        viagem.forEach ((despesas, index, array) => {
            if ((despesas.valor >= minimo) && (despesas.valor <= maximo)) {
                const stringViagem =  "Tipo da Despesa: " + despesas.tipo + " -- " + "Valor: " + despesas.valor + " -- " +  "Descrição: " + despesas.descricao;
                exibe.innerHTML += "<p>" + stringViagem + "</p";
                despesaViagem += Number(despesas.valor);
            }
        })
    } else if (tipoConsulta.value === "Alimentação") {
        alimentacao.forEach ((despesas, index, array) => {
            if ((despesas.valor >= minimo) && (despesas.valor <= maximo)) {
                const stringAlimentacao =  "Tipo da Despesa: " + despesas.tipo + " -- " + "Valor: " + despesas.valor + " -- " +  "Descrição: " + despesas.descricao;
                exibe.innerHTML += "<p>" + stringAlimentacao + "</p";
                despesaAlimentacao += Number(despesas.valor);
            }
        })
    } else if (tipoConsulta.value === "Transporte") {
        transporte.forEach ((despesas, index, array) => {
            if ((despesas.valor >= minimo) && (despesas.valor <= maximo)) {
                const stringTransporte =  "Tipo da Despesa: " + despesas.tipo + " -- " + "Valor: " + despesas.valor + " -- " +  "Descrição: " + despesas.descricao;
                exibe.innerHTML += "<p>" + stringTransporte + "</p";
                despesaTransporte += Number(despesas.valor);
            }
        })
    } else if (tipoConsulta.value === "Outros") {
        outros.forEach ((despesas, index, array) => {
            if ((despesas.valor >= minimo) && (despesas.valor <= maximo)) {
                const stringOutros =  "Tipo da Despesa: " + despesas.tipo + " -- " + "Valor: " + despesas.valor + " -- " +  "Descrição: " + despesas.descricao;
                exibe.innerHTML += "<p>" + stringOutros + "</p";
                despesaOutros += Number(despesas.valor);
            }
        })
    }
}



function imprimirExtrato() {
    if (tipoConsulta.value === "Casa") {
        articleExibeExtrato.innerHTML += "<p>Valor Total: " + despesaCasa + "</p>";

    } else if (tipoConsulta.value === "Viagem") {
        articleExibeExtrato.innerHTML += "<p>Valor Total: " + despesaViagem + "</p>";

    } else if (tipoConsulta.value === "Alimentação") {
        articleExibeExtrato.innerHTML += "<p>Valor Total: " + despesaAlimentacao + "</p>";

    } else if (tipoConsulta.value === "Transporte") {
        articleExibeExtrato.innerHTML += "<p>Valor Total: " + despesaTransporte + "</p>";

    } else if (tipoConsulta.value === "Outros") {
        articleExibeExtrato.innerHTML += "<p>Valor Total: " + despesaOutros + "</p>";
    }
}


function executaFiltrarDespesaEImprmirExtrato() {
    filtrarDespesa();
    imprimirExtrato();
}

function limparFiltros() {
    document.getElementById("exibeDespesas").innerHTML = "";
    document.getElementById("mostraExtrato").innerHTML = "";
    valorMaximo.value = "";
    valorMinimo.value = "";
    tipoConsulta.value = "";
    despesaCasa = 0;
    despesaViagem = 0;
    despesaAlimentacao = 0;
    despesaTransporte = 0;
    despesaOutros = 0;
}
