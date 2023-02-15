import { buscaProjetos } from "./buscaProjetos.js";

//projetos salvos
let projetos = JSON.parse(localStorage.getItem("projeto"));
console.log(projetos);

//projetos favoritos
let meusFavoritos;
localStorage.getItem("projetosFavoritos") == null
  ? localStorage.setItem("projetosFavoritos", "[]")
  : false;
meusFavoritos = JSON.parse(localStorage.getItem("projetosFavoritos"));

// seleciona a row
const row = document.querySelector(".row.codigo");
row.style.marginRight = "0";
row.style.marginLeft = "0";

let guardaIds = [];

function CriaCard(projetos) {
  $(document).ready(function () {
    if (projetos.length > 0) {
      projetos.forEach((projeto) => {
        guardaIds.push(projeto.id);
        projeto.linguagem == "html"
          ? (projeto.codigo = projeto.codigo
              .replace(/&/g, "&amp;")
              .replace(/</g, "&lt;")
              .replace(/>/g, "&gt;")
              .replace(/"/g, "&quot;")
              .replace(/'/g, "&#039;"))
          : (projeto.codigo = projeto.codigo);

        let iconeLinguagem = "";

        if (projeto.linguagem == "javascript") {
          iconeLinguagem = `<i class="fa-brands fa-square-js" style="font-size: 40px; color: #5081fb29" data-linguagem="javascript">`;
        } else if (projeto.linguagem == "css") {
          iconeLinguagem = `<i class="fa-brands fa-css3-alt" style="font-size: 40px; color: #5081fb29" data-linguagem="css">`;
        } else {
          iconeLinguagem = `<i class="fa-brands fa-html5" style="font-size: 40px; color: #5081fb29" data-linguagem="html">`;
        }

        row.innerHTML += `<div class="col-lg-6 cartao"><div class="card-container"><div class="editor-codigo-container" style="background-color: ${projeto["cor"]};" data-id="${projeto.id}"><div class="editor-codigo"><div class="controles"><ul><li style="background-color: rgb(255, 95, 86);"></li><li style="background-color: rgb(255, 189, 46);"></li><li style="background-color: rgb(39, 201, 63);"></li></ul></div><div class="codigo"><code class="preview ${projeto["linguagem"]}" contenteditable="true" aria-label="Editor de Código">${projeto["codigo"]}</code></div></div></div><div class="card-info row"><div class="col col-10"><h2 class="title">${projeto["nome"]}</h2><p class="descricao">${projeto["descricao"]}</p></div><div class="col col-2 text-end">${iconeLinguagem}</i></div></div><div class="social-buttons"><div class="row d-flex"><div class="col"><span class="favoritar"><i class="fa-solid fa-star" style="margin: 0;" data-idprojeto="${projeto.id}"></i></span><span class="excluir"><i class="fa-solid fa-trash"></i></span></div><div class="col"><a href="./"><div class="perfil-container"><div class="perfil bg-light"><i class="fa-solid fa-user" style="color: var(--bg); font-size: 22px; padding: 6px;"></i></div><span class="text-light" style="margin-left: 10px; padding-right: 20px;">@Nome</span></div></a></div></div></div></div></div>`;
      });
    } else {
      row.innerHTML =
        "<h4 style='opacity: 0.1'>Nenhum projeto encontrado :(</h4>";
    }

    //aplica highlight aos cards
    let listaCodigos = document.querySelectorAll("code");
    listaCodigos.forEach((codigo) => {
      hljs.highlightElement(codigo);
    });

    // configura os filtros de linguagens
    let iconesLinguagem = document.querySelectorAll("[data-linguagem]");

    iconesLinguagem.forEach((icone) => {
      icone.addEventListener("click", (event) => {
        console.log(icone.dataset.linguagem);
        document.querySelector("#pesquisa").value = icone.dataset.linguagem;
        buscaProjetos(event);
        document.formpesquisa.submit();
      });
    });

    // adiciona função de favoritar aos cards
    const favoritar = document.querySelectorAll(".favoritar");
    let favoritos = [];

    meusFavoritos.forEach((favorito) => {
      favoritos.push(favorito);
    });

    favoritar.forEach((estrela) => {
      let projetoFavoritado = estrela.firstChild.dataset.idprojeto;
      let index = favoritos.indexOf(projetoFavoritado);

      favoritos.includes(projetoFavoritado)
        ? estrela.classList.toggle("favoritou")
        : false;

      estrela.addEventListener("click", () => {
        estrela.classList.toggle("favoritou");
        if (favoritos.includes(projetoFavoritado)) {
          favoritos.splice(index, 1);
          localStorage.setItem("projetosFavoritos", JSON.stringify(favoritos));
        } else {
          favoritos.push(projetoFavoritado);
          favoritos.sort();
          localStorage.setItem("projetosFavoritos", JSON.stringify(favoritos));
          alert("Projeto Favoritado :D");
        }
      });
    });

    // adiciona funcao de exclusão ao ícone de lixeira
    let elementosExcluir = document.querySelectorAll(".fa-trash");
    let guardaElementosExcluir = [];
    elementosExcluir.forEach((elemento) => {
      guardaElementosExcluir.push(elemento);
      elemento.addEventListener("click", () => {
        let index = guardaElementosExcluir.indexOf(elemento);
        let projetos = JSON.parse(localStorage.getItem("projeto"));
        ExcluirProjeto(guardaIds[index], projetos, index);
      });
    });

    // adiciona informação do usuário ao avatar dos cards
    let usuario = JSON.parse(localStorage.getItem("usuario"));

    let avatres = document.querySelectorAll(".perfil");
    let tagsNome = document.querySelectorAll("span.text-light");

    avatres.forEach((avatar) => {
      avatar.innerHTML = "";
      avatar.style.backgroundImage = `url(${usuario.avatar})`;
      avatar.style.backgroundSize = "cover";
    });

    tagsNome.forEach((tag) => {
      tag.innerText = usuario.nome;
    });
  });
}

let paginaComunidade = window.location.pathname;

if(paginaComunidade == "/editor-snippets/comunidade.html"){
  CriaCard(projetos);
  EditarProjeto();
}

function EditarProjeto() {
  $(document).ready(function () {
    let cartoes = document.querySelectorAll(".editor-codigo-container");
    cartoes.forEach((cartao) => {
      cartao.addEventListener("click", () => {
        localStorage.setItem(
          "projetoSelecionado",
          JSON.stringify(cartao.dataset.id)
        );
        window.location.href = "https://sandroschutt.github.io/editor-codigo.html";
      });
    });
  });
}

function ExcluirProjeto(id, projetos, index) {
  projetos.every((projeto) => {
    if (projeto.id == id) {
      let confirmaExclusao = confirm(
        "Tem certeza que deseja excluir este projeto?"
      );
      let projetosFavoritos = JSON.parse(
        localStorage.getItem("projetosFavoritos")
      );
      if (confirmaExclusao == true) {
        projetosFavoritos.forEach((projetoFavorito) => {
          if (projetoFavorito == id) {
            projetosFavoritos.splice(
              projetosFavoritos.indexOf(projetoFavorito),
              1
            );
            localStorage.setItem(
              "projetosFavoritos",
              JSON.stringify(projetosFavoritos)
            );
          }
        });
        projetos.splice(index,1);
        console.log("projetos após exclusão: ", projetos);
        localStorage.setItem("projeto", JSON.stringify(projetos));
        alert("Projeto excluído com sucesso!");
        window.location.reload();
      }
      return false;
    }
    return true;
  });
}

export { CriaCard, EditarProjeto, row };
