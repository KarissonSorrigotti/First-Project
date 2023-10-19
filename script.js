function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

//pegar a tag img 
const img = document.querySelector("#profile img")

//substituir a img
  if (html.classList.contains("light")) {
//se tiver a light mode, adicionar a img light    
 img.setAttributte("src", "./assets/avatar-light.png")
} else {
//se tiver sem light mode, manter a imagem normal
img.setAttributte("src", "./assets/avatar.png")
}

}