
const selectCard = document.querySelectorAll('.card-frente');

let letrasDescubiertas = new Set();

const marcadorContador = document.getElementById("contador-numero");
const contenedorGaleria = document.getElementById("cuadricula-letras");
const botonTodas = document.getElementById("boton-todas");
const botonVocales = document.getElementById("botón-vocales");

const contador = document.getElementById("contador");

// selectCard.addEventListener('click', function () {
//     console.log('Card clicked!');
// });

function voltear(card) {
    card.classList.toggle('volteada');
    const letra = card.querySelector('.card-frente').textContent;
    if (card.classList.contains("volteada") && !letrasDescubiertas.has(letra)) {
        // Sumar al registro de descubiertas
        letrasDescubiertas.add(letra);
        contador.textContent = contador.textContent;
        contador.textContent++;
    }
}