// EXPORTA CÓDIGO
document
  .querySelector("button.exportar-codigo")
  .addEventListener("click", () => {
    let exportaCodigo = document.querySelector("code.preview").innerText;
    let extensaoCodigo = document.querySelector(
      "select.novo-projeto-select"
    ).value;
    let nomeArquivo = document.querySelector("#nome-projeto").value;

    let array = [`${exportaCodigo}`]; // an array consisting of a single string
    let blob = new Blob(array, { type: `text/${extensaoCodigo}` }); // the blob
    let arquivo = window.URL.createObjectURL(blob);
    let linkArquivo = document.createElement("a");
    nomeArquivo == ""
      ? linkArquivo.setAttribute("download", "code")
      : linkArquivo.setAttribute("download", `${nomeArquivo}`);
    linkArquivo.href = arquivo;
    linkArquivo.click();
  });
