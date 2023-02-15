function criaUsuario() {
  let usuario = JSON.parse(localStorage.getItem("usuario"));
  let getLoginInfo = location.search;

  // recupera o nome enviado
  let params = new URLSearchParams(getLoginInfo);
  let nome = params.get("login-nome");
  let avatar = params.get("login-avatar");
  if (nome != null) {
    nome = `@${nome}`;
    let novoUsuario = {
      nome: nome,
      avatar: avatar,
    };

    novoUsuario = JSON.stringify(novoUsuario);

    localStorage.setItem("usuario", novoUsuario);
  }
}

criaUsuario();
