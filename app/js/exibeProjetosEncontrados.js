import { CriaCard, EditarProjeto, row } from "./criaCardCodigo.js";

let getInfo = location.search;

// recupera infos enviadas
let params = new URLSearchParams(getInfo);
// let termoPesquisado = params.get("pesquisa");
let termoPesquisado = localStorage.getItem("termoPesquisado");
// console.log(termoPesquisado);

if (!localStorage.getItem("projetosEncontrados") == "") {
  let resultadosDaPesquisa = localStorage.getItem("resultadosEncontrados");
  row.innerHTML = `<p style='font-size: 1rem; margin-bottom: 15px;'>${resultadosDaPesquisa} resultados encontrados para ${termoPesquisado}</p>`;
  let projetos = JSON.parse(localStorage.getItem("projetosEncontrados"));
  CriaCard(projetos);
  EditarProjeto();
  window.localStorage.setItem("projetosEncontrados", "");
  window.localStorage.setItem("resultadosEncontrados", "");
} else {
  row.innerHTML = `<h4 style='opacity: 0.1'>Nenhum resultado encontrado para ${termoPesquisado} :(</h4>`;
}
