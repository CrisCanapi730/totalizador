import sumar from "./sumador";

const first = document.querySelector("#primer-numero");
const segundo = document.querySelector("#precio-item");
const form = document.querySelector("#sumar-form");
const div = document.querySelector("#resultado-div");
const div2 = document.querySelector("#precio-div")

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const firstNumber = Number.parseInt(first.value);
  const precioItem = Number.parseInt(segundo.value);

  div.innerHTML = "<p> Cantidad de item: " + firstNumber + "</p>";
  div2.innerHTML = "<p> Precio por item: " + precioItem + "</p>";

});
