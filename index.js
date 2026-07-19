const display = document.querySelector("#display");
const botonInicio = document.querySelector("#boton-inicio");
const botonReinicio = document.querySelector("#boton-reinicio");
const rocket = document.querySelector("#rocket");
const countInput = document.querySelector("#count");

let intervalo;
let tiempoRestante = 0;

const formatearTiempo = (tiempo) => tiempo.toString().padStart(2, "0");

botonInicio.addEventListener("click", () => {
  clearInterval(intervalo);
  let segundos = parseInt(countInput.value);

  if (isNaN(segundos) || segundos < 1 || segundos > 60) {
    alert("Por favor, ingresa un tiempo válido entre 1 y 60 segundos.");
    return;
  }

  tiempoRestante = segundos;
  display.textContent = formatearTiempo(tiempoRestante);

  intervalo = setInterval(() => {
    tiempoRestante--;
    if (tiempoRestante < 0) {
      tiempoRestante = 0;
    }
    display.textContent = formatearTiempo(tiempoRestante);

    if (tiempoRestante <= 0) {
      clearInterval(intervalo);
      display.textContent = "00";
      rocket.style.display = "block";
    }
  }, 1000);
});

botonReinicio.addEventListener("click", () => {
  clearInterval(intervalo);
  display.textContent = "00";
  countInput.value = "";
  rocket.style.display = "none";
});
