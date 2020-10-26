const dadPaths = document.getElementsByClassName("dadPath");
const dadBoton = document.getElementById("dadContainer__boton");
const dadContainer = document.getElementById("dadContainer");

console.log(dadPaths);

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

// function dadRemoveAttTransform() {
//   for (let i = 0; i <= 172; i++) {
//     let dadPath = dadPaths[i];
//     dadPath.removeAttribute("transform")
//   }
// }

// dadRemoveAttTransform()


function dadPathsInicio() {
  for (let i = 0; i <= 172; i++) {
    let dadPath = dadPaths[i];
    dadPath.style.opacity = 1;
    dadPath.style.strokeWidth = 1;
    dadPath.style.stroke = "#f8cd51";
    dadPath.style.strokeDasharray = ".5 1 1.5";
    dadPath.style.fill = "#272B59";
  }
}

dadPathsInicio();

function dadPathsParaColorear() {
  for (let i = 0; i <= 172; i++) {
    let dadPath = dadPaths[i];
    dadPath.style.strokeWidth = 0;
  }
}

// Mover los paths con translate de manera aleatoria; imposible
// No he logrado que funcione transalte aleatoriamente. Parece ser que translate solo acepta valores absolutos

// Inicia código para pintar los paths aleatoriamente

function pintarDadPaths() {
  dadPathsParaColorear();
  for (let i = 0; i <= 172; i++) {
    let dadPath = dadPaths[i];
    dadPath.style.fill = colorRandom();
    dadPath.style.stroke = colorRandom();
  }
}

let dadAnimPintar;

function pintarDadFrecuencia() {
  dadAnimPintar = setInterval(pintarDadPaths, 10);
}

function pararPintarDadFrecuencia() {
  clearInterval(dadAnimPintar);
}

// Termina código para pintar los paths aleatoriamente

// Inicia función para volver al translate original de lo paths

function dadTransformInicial() {
  for (let i = 0; i <= 172; i++) {
    let dadPath = dadPaths[i];
    dadPath.setAttribute("transform", "translate(-784 -179)");
  }
}

// Termina función para volver al translate original de lo paths

// Inicia  código para pintar aleatoriamente los cuerpos de los  paths y moverlos




function dadAnimarTransformfill() {

  for (let i = 0; i <= 172; i++) {
    let dadPath = dadPaths[i];
    let numRandom = Math.floor(Math.random() * 4) + 1;

    switch (numRandom) {
      case 1:
        dadPath.setAttribute("transform", "translate(-784 -179)");
        dadPath.style.fill=colorRandom()

        break;

      case 2:
        dadPath.setAttribute("transform", "translate(-804 -199)");
        dadPath.style.fill=colorRandom()

        break;

      case 3:
        dadPath.setAttribute("transform", "translate(-814 -209)");
        dadPath.style.fill=colorRandom()

      case 4:
        dadPath.setAttribute("transform", "translate(-774 -169)");
        dadPath.style.fill=colorRandom()
        break;

      default:
        break;
    }
  }
}

let dadAnimTransfFill;

function activarDadAnimarTransformFill() {
 dadAnimTransfFill = setInterval(dadAnimarTransformfill, 500);
}

function pararDadAnimarTransformFill() {
  clearInterval(dadAnimTransfFill);
}

// Termina código para pintar aleatoriamente los cuerpos de los  paths y moverlos

// Inicia  código para pintar aleatoriamente los strokes de los  paths y moverlos

function dadAnimarTransformStroke() {
  for (let i = 0; i <= 172; i++) {
    let dadPath = dadPaths[i];
    let numRandom = Math.floor(Math.random() * 4) + 1;

    switch (numRandom) {
      case 1:
        dadPath.style.stroke = colorRandom();
        dadPath.style.strokeWidth = 1
         
        
        break;

      case 2:
        dadPath.style.stroke = colorRandom();
        dadPath.style.strokeWidth = 2 
        dadPath.style.strokeDashArray = "3 2 1 " 
        break;

      case 3:
        dadPath.style.stroke = colorRandom();
        dadPath.style.strokeWidth = 2 
        dadPath.style.strokeDashArray = "1 2 3" 


      case 4:
        dadPath.style.stroke = colorRandom();
        dadPath.style.strokeWidth = 1 

        break;

      default:
        break;
    }
  }
}

let dadAnimTransfStroke;

function activarDadAnimarTransformStroke() {
  dadAnimTransfStroke = setInterval(dadAnimarTransformStroke, 500);
}

function pararDadAnimarTransformStroke() {
  clearInterval(dadAnimTransfStroke);
}

let dadCheck = 0;

function togglePintarDadCiclo() {
  if (dadCheck === 0) {
    pintarDadFrecuencia();
    dadBoton.innerHTML = '<i class="far fa-play-circle">+</i>';
    dadCheck = 1;
  } else if (dadCheck === 1) {
    dadBoton.innerHTML = '<i class="far fa-play-circle">+</i>';
    pararPintarDadFrecuencia();
    activarDadAnimarTransformFill();
    dadCheck = 2;
  } else if (dadCheck === 2) {
    dadBoton.innerHTML = '<i class="far fa-pause-circle"></i>';
    pararDadAnimarTransformFill()
    dadTransformInicial();
    dadPathsInicio();
    activarDadAnimarTransformStroke();
    dadCheck = 3;
  } else if (dadCheck === 3) {
    dadBoton.innerHTML = '<i class="far fa-play-circle"></i>';
    pararDadAnimarTransformStroke();
    dadTransformInicial();
    dadPathsInicio();
    dadCheck = 0;
  }
}
