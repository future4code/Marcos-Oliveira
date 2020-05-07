
const meuContainer = document.getElementById("container");
const novaSection = document.createElement("section");

meuContainer.appendChild(novaSection);
novaSection.id = 'secaoPost';

const arrayPost = [];

function inserirPost() {
    const postagemSection = document.getElementById("secaoPost");
    postagemSection.innerHTML += "<label> Título: </label>" + "<span>" + arrayPost[arrayPost.length -1].titulo + "</span> <br>";
    postagemSection.innerHTML += "<label> Autor: </label>" +  "<span>" + arrayPost[arrayPost.length -1].autor + "</span> <br>";
    postagemSection.innerHTML += "<label> Conteúdo: </label>" + "<span>" + arrayPost[arrayPost.length -1].conteudo + "</span> <br><br>";
}

function post() {

    const tituloPost = document.getElementById("inputTitulo");
    const nomeAutor = document.getElementById("inputAutor");
    const conteudoPost = document.getElementById("inputConteudo");

    let titulo = tituloPost.value;
    let autor = nomeAutor.value;
    let conteudo = conteudoPost.value;

    let conteudoPostado = {
        titulo: titulo,
        autor: autor,
        conteudo: conteudo
    }

    arrayPost.push(conteudoPostado);

    inserirPost();

    tituloPost.value = "";
    nomeAutor.value = "";
    conteudoPost.value = "";    

}

