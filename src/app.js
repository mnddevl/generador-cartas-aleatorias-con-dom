/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  // Evento de clic al botón
  document
    .getElementById("generateButtom")
    .addEventListener("click", generateCard);

  // Evento de clic al botón para aplicar dimensiones
  document
    .getElementById("aplicarDimensiones")
    .addEventListener("click", aplicarDimensiones);

  // Función para generar una nueva carta
  function generateCard() {
    const palos = ["spade", "club", "heart", "diamond"];
    const valores = [
      "A",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "10",
      "J",
      "Q",
      "K"
    ];
    const simbolosPalos = {
      spade: "♠",
      club: "♣",
      heart: "♥",
      diamond: "♦"
    };

    const paloAleatorio = palos[Math.floor(Math.random() * palos.length)];
    const valorAleatorio = valores[Math.floor(Math.random() * valores.length)];
    const carta = document.getElementById("card");

    carta.className = `card ${paloAleatorio}`;
    carta.innerHTML = `
      <span class="top-left simbol">${simbolosPalos[paloAleatorio]}</span>
      <span class="center number">${valorAleatorio}</span>
      <span class="bottom-right simbol">${simbolosPalos[paloAleatorio]}</span>
    `;
  }

  // Función para aplicar dimensiones especificadas por el usuario
  function aplicarDimensiones() {
    const width = document.getElementById("width").value;
    const height = document.getElementById("height").value;
    const carta = document.getElementById("card");

    if (width && height) {
      carta.style.width = width + "px";
      carta.style.height = height + "px";
    } else {
      alert("Por favor, ingresa valores válidos para el ancho y la altura.");
    }
  }

  // Generar una carta inicial cuando se cargue la página
  generateCard();

  // Configurar el temporizador para generar una nueva carta cada 10 segundos
  setInterval(generateCard, 10000);
};
