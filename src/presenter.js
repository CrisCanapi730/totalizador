import sumar from "./sumador";
import porcentaje from "./totalizador";
const first = document.querySelector("#primer-numero");
const segundo = document.querySelector("#precio-item");
const form = document.querySelector("#sumar-form");
const div = document.querySelector("#resultado-div");
const div2 = document.querySelector("#precio-div")
const estado = document.querySelector("#est");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const firstNumber = Number.parseInt(first.value);
  const precioItem = Number.parseInt(segundo.value);
  const estadoSelec = estado.value;
  const porcentajeEst = porcentaje(estadoSelec);
  div.innerHTML = "<p> Cantidad de item: " + firstNumber + "</p>";
  div2.innerHTML = "<p> Precio por item: " + precioItem +"</p>"+"Estado: " + estado.value + " " +porcentajeEst +"%" +"<br> <br> Precio neto: $" + firstNumber*precioItem;
});
