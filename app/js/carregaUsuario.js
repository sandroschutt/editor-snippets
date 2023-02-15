function carregaUsuario() {
  if (localStorage.getItem("usuario")) {
    let usuario = JSON.parse(localStorage.getItem("usuario"));
    if (usuario.nome != null) {
      let nomeUsuario = document.querySelector("span.text-light");
      nomeUsuario.innerText = usuario.nome;
      // MOBILE
      let nomeUsuarioMobile = document.querySelector("#mobile-nome");
      nomeUsuarioMobile.innerText = usuario.nome;
    }

    if (usuario.avatar != null) {
      let avatar = document.querySelector(".perfil");
      avatar.innerHTML = '';
      avatar.style.backgroundImage = `url(${usuario.avatar})`;
      avatar.style.backgroundSize = "cover";
      // MOBILE
      let avatarMobile = document.querySelector("#mobile-perfil");
      avatarMobile.innerHTML = '';
      avatarMobile.style.backgroundImage = `url(${usuario.avatar})`;
      avatarMobile.style.backgroundSize = "cover";
    }
  }
}

carregaUsuario();
