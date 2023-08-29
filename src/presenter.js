import sumar from "./sumador";
import porcentaje from "./totalizador";
import calcularImpuesto from "./impuesto";

const first = document.querySelector("#primer-numero");
const segundo = document.querySelector("#precio-item");
const form = document.querySelector("#sumar-form");
const div = document.querySelector("#resultado-div");
const div2 = document.querySelector("#precio-div")
const estado = document.querySelector("#est");
const div3 = document.querySelector("#impuesto-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const firstNumber = Number.parseInt(first.value);
  const precioItem = Number.parseInt(segundo.value);
  const precioTotal = firstNumber*precioItem;
  const estadoSelec = estado.value;
  const porcentajeEst = porcentaje(estadoSelec);
  const impuesto = calcularImpuesto(estadoSelec, precioTotal);


  div.innerHTML = "<p> Cantidad de item: " + firstNumber + "</p>";
  div2.innerHTML = "<p> Precio por item: " + precioItem +"</p>"+"Estado: " + estado.value + " " +porcentajeEst +"%" +"<br> <br> Precio neto: $" + precioTotal;
  div3.innerHTML = "<p> Impuesto: " + impuesto + "</p>";
});
