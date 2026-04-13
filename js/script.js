
const selectCard = document.querySelectorAll('.card-frente');

let letrasDescubiertas = new Set();

const marcadorContador = document.getElementById("contador-numero");
const contenedorGaleria = document.getElementById("cuadricula-letras");
const botonTodas = document.getElementById("boton-todas");
const botonVocales = document.getElementById("botón-vocales");
const contador = document.getElementById("contador");



function voltear(card) {
    card.classList.toggle('volteada');
    const letra = card.querySelector('.card-frente').textContent;
    if (card.classList.contains("volteada") && !letrasDescubiertas.has(letra)) {
        letrasDescubiertas.add(letra);
        contador.textContent = contador.textContent;
        contador.textContent++;
    }
}
function filtrar(tipo) {
  const cards = document.querySelectorAll('.card');

  cards.forEach(card => {
    if (tipo === 'todas') {
      card.style.display = 'block';
    } else if (card.dataset.tipo === tipo) {
      card.style.display = 'block';
    } else {
      card.style.display = 'none';
    }
  });
}