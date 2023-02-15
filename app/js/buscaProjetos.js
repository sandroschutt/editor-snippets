$("#pesquisa").on("keyup", (event) => {
  event.preventDefault();
  buscaProjetos(event);
});

$("#pesquisa").on("submit", (event) => {
  // event.preventDefault();
  buscaProjetos(event);
});

function buscaProjetos(event) {
  let resultadosDaPesquisa = 0;
  //recupera o valor da busca
  let pesquisa = $("#pesquisa").val();
  localStorage.setItem('termoPesquisado', JSON.stringify(pesquisa));

  //recupera os projetos salvos
  let projetos = JSON.parse(localStorage.getItem("projeto"));

  //transforma objetos em arrays
  let array = [];
  projetos.forEach((projeto) => {
    array.push([projeto.nome, projeto.descricao, projeto.linguagem]);
  });

  let projetosEncontrados = Array();

  //encontra termo da pesquisa nas arrays
  array.forEach((element) => {
    pesquisa = "\\b" + pesquisa;
    let busca = new RegExp(pesquisa, "i");
    element.map((item) => {
      console.log(`Pesquisa: ${pesquisa}\nItem: ${item}`);
      if (item.match(busca)) {
        let indiceProjeto = array.indexOf(element);
        if (!projetosEncontrados.includes(projetos[indiceProjeto])) {
          projetosEncontrados.push(projetos[indiceProjeto])
          resultadosDaPesquisa++;
        }
      }
    });
  });

  localStorage.setItem(
    "projetosEncontrados",
    JSON.stringify(projetosEncontrados)
  );

  localStorage.setItem(
    "resultadosEncontrados",
    JSON.stringify(resultadosDaPesquisa)
  );
}

export { buscaProjetos };