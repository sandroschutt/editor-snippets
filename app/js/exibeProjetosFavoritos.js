import {CriaCard, EditarProjeto, row} from "./criaCardCodigo.js";

let projetos = JSON.parse(localStorage.getItem('projeto'));
let projetosFavoritos = JSON.parse(localStorage.getItem("projetosFavoritos"));

let meusProjetos = [];
let meusFavoritos = [];
let exibicao = [];

projetos.forEach(projeto => {
    meusProjetos.push(projeto);
})

projetosFavoritos.forEach(projeto => {
    meusFavoritos.push(projeto);
})


if (meusFavoritos.length > 0) {
    meusProjetos.map((projeto) => {
        meusFavoritos.forEach(favorito => {
            if (projeto.id == favorito) {
                exibicao.push(projeto);
            }
        })
    });

    console.log(exibicao);

    CriaCard(exibicao);
    EditarProjeto();
} else {
    row.innerHTML = "<h4 style='opacity: 0.1'>Nenhum favorito encontrado :(</h4>"
}