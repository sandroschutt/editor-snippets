import html2canvas from "../../node_modules/html2canvas/dist/html2canvas.esm.js";

let nomeProjeto = $("#nome-projeto").val();
let descricaoProjeto = $("#descricao-projeto").val();
let corProjeto = $("#cor-destaque-projeto").val();
let extensaoProjeto = $("#linguagem-projeto").val();

// EXPORTA IMAGEM
const selecionaExportarImagem = document.querySelector("#pre-exportar-imagem");

selecionaExportarImagem.addEventListener("click", (event) => {
  event.preventDefault();
  document.querySelector("#opcoes-imagem").classList.remove("d-none");
  let extensaoImagem = document.querySelector("#extensao-imagem");

  let codigoCanvas = document.querySelector(".editor-codigo-container");

  document
    .querySelector("button#exportar-imagem")
    .addEventListener("click", (event) => {
      event.preventDefault();
      let nomeProjeto = document.querySelector("#nome-projeto").value;
      let extensaoImagem = document.querySelector("#extensao-imagem").value;
      let canvasImage = document.createElement("a");
      html2canvas(codigoCanvas).then((canvas) => {
        canvasImage.href = canvas.toDataURL(`image/${extensaoImagem}`);
        canvasImage.setAttribute("download", "code");
        nomeProjeto == ""
          ? (canvasImage.download = "code")
          : (canvasImage.download = `${nomeProjeto}`);
        canvasImage.click();
      });
    });

  document.querySelector("#nome-projeto").value = nomeProjeto;
  document.querySelector("#descricao-projeto").value = descricaoProjeto;
  document.querySelector("#linguagem-projeto").value = extensaoProjeto;
});
