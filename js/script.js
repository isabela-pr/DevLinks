var toggleMode = () => {
  const html = document.documentElement;

  html.classList.toggle("light");

  const isLight = html.classList.contains("light");
  const srcValue = isLight ? "../img/shrek2.png" : "../img/shrek.png";
  const altValue = isLight
    ? "Imagem de perfil com o personagem shrek de óculos"
    : "Imagem de perfil com o personagem shrek";

  document.querySelector("#profile img").setAttribute("src", srcValue);
  document.querySelector("#profile img").setAttribute("alt", altValue);
};
