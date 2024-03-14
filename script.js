function toggleMode() {
  const html = document.documentElement;
  html.classList.toggle("light");
  const img = document.querySelector("#profile img");
  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/avatar-light.png");
  } else {
    img.setAttribute("src", "./assets/avatar.png");
  }
}

function afar(frase) {
  const rodape = document.querySelector("footer");
  const span = document.createElement("span");
  const ancora = document.createElement("a");
  ancora.textContent = "@kelvynzucco";
  ancora.href = "https://www.instagram.com/kelvynzucco";
  ancora.target = "_blank";
  span.appendChild(ancora);
  const palavras = frase.split(" ");
  const paragrafo = document.createElement("p");
  for (const palavra of palavras) {
    if (palavra === "@KelvynZucco") {
      paragrafo.appendChild(span);
    } else {
      paragrafo.appendChild(document.createTextNode(palavra + " "));
    }
  }
  rodape.appendChild(paragrafo);
}
afar("Construído por @KelvynZucco");
