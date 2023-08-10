var toggleMode = () => {
  const html = document.documentElement;

  html.classList.toggle("light");

  const isLight = html.classList.contains("light");
  const srcValue = isLight ? "../img/WhatsApp Image 2023-08-10 at 11.20.58.jpeg" : "../img/WhatsApp Image 2023-08-10 at 11.20.59.jpeg";
  const altValue = isLight
    ? "Imagem de perfil com o personagem shrek de óculos"
    : "Imagem de perfil com o personagem shrek";

  document.querySelector("#profile img").setAttribute("src", srcValue);
  document.querySelector("#profile img").setAttribute("alt", altValue);
};
