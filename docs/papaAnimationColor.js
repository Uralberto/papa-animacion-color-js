const path = document.getElementsByTagName("path");
const path635 = document.querySelector(".cls-145");

function colorRandom() {
  let set = "0123456789ABCDEF";
  let codigo = [];
  for (let i = 0; i <= 5; i++) {
    let num = Math.floor(Math.random() * 16);
    codigo.push(set[num]);
  }
  let codigoColor = "#" + codigo.join("");
  return codigoColor;
}

function pintar() {
  for (let i = 0; i <= 172; i++) {
    let pathi = path[i];
    let color = colorRandom();
    pathi.style.fill = color;
    pathi.style.stroke = color;
  }
}

setTimeout(function () {
  let contador = 0;
  let clear = setInterval(function () {
    pintar();
    contador++;
    if (contador === 100) {
      clearInterval(clear);
    }
  }, 50);
}, 2000);
