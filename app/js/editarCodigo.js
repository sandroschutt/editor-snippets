let projetoSelecionado = JSON.parse(localStorage.getItem("projetoSelecionado"));
// console.log(projetoSelecionado);

let projetos = JSON.parse(localStorage.getItem("projeto"));
projetos.forEach((projeto) => {
  projeto.id == projetoSelecionado ? (projetoSelecionado = projeto) : false;
});

document.querySelector("code").innerText = projetoSelecionado.codigo;
document.querySelector("#nome-projeto").value = projetoSelecionado.nome;
document.querySelector("#descricao-projeto").value =
  projetoSelecionado.descricao;
document.querySelector("#cor-destaque-projeto").value = projetoSelecionado.cor;
document.querySelector(".editor-codigo-container").setAttribute("data-id", projetoSelecionado.id);

let linguagem = document.querySelectorAll("option");
linguagem.forEach((option) => {
  option.value == projetoSelecionado.linguagem
    ? (option.selected = true)
    : (option.selected = false);
});
