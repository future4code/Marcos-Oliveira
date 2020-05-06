
const arrayPost = [];

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

    const novaSection = document.createElement("section");
    



    tituloPost.value = "";
    nomeAutor.value = "";
    conteudoPost.value = "";

    console.log(conteudoPostado);
    arrayPost.push(conteudoPostado);
    console.log(arrayPost);

}





