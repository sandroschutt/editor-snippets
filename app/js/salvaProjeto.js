// cria o projeto no localStorage
window.localStorage.getItem("projeto") != null
  ? false
  : localStorage.setItem("projeto", "[]");

// seleciona o nome do projeto
let botaoSalvar = document.querySelector("button.salvar-projeto");
botaoSalvar.addEventListener("click", (event) => {
  event.preventDefault();
  // verifica se o projeto existe
  let idProjeto = document
    .querySelector(".editor-codigo-container")
    .getAttribute("data-id");

  let ultimaId = localStorage.getItem("ultimaId");

  let nomeProjeto = document.querySelector("#nome-projeto").value;
  let descricaoProjeto = document.querySelector("#descricao-projeto").value;
  let linguagemProjeto = document.querySelector("#linguagem-projeto").value;
  let corDestaqueProjeto = document.querySelector(
    "#cor-destaque-projeto"
  ).value;
  let codigoProjeto = document.querySelector("code.preview").textContent;

  let projeto = {
    id: ultimaId,
    nome: nomeProjeto,
    descricao: descricaoProjeto,
    linguagem: linguagemProjeto,
    cor: corDestaqueProjeto,
    codigo: codigoProjeto,
  };

  let projetos = JSON.parse(window.localStorage.getItem("projeto"));

  if (idProjeto == null) {
    projetos.push(projeto);

    ultimaId++;
    localStorage.setItem("ultimaId", ultimaId);
  } else {
    projeto.id = idProjeto;
    projetos.forEach((element) => {
      if (element.id == projeto.id) {
        projetos[projetos.indexOf(element)] = projeto;
        console.log(projetos);
      }
    });
  }

  projetos = JSON.stringify(projetos);
  window.localStorage.setItem("projeto", projetos);

  alert("Projeto salvo com sucesso!");

  window.location.href = "./comunidade.html";
});
