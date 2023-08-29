import sumar from "./sumador";
import porcentaje from "./totalizador";
import {calcularImpuesto, totalConImpuesto} from "./impuesto";
import {descuento,portentajeDes} from "./descuento";
const first = document.querySelector("#primer-numero");
const segundo = document.querySelector("#precio-item");
const form = document.querySelector("#sumar-form");
const div = document.querySelector("#resultado-div");
const div2 = document.querySelector("#precio-div")
const estado = document.querySelector("#est");
const div3 = document.querySelector("#impuesto-div");
const div4 = document.querySelector("#total-impuesto");
const div5 = document.querySelector("#descuento-div");
const div6 = document.querySelector("#descu")

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const firstNumber = Number.parseInt(first.value);
  const precioItem = Number.parseInt(segundo.value);
  const precioTotal = firstNumber*precioItem;
  const estadoSelec = estado.value;
  const porcentajeEst = porcentaje(estadoSelec);
  const impuesto = calcularImpuesto(estadoSelec, precioTotal);
  const totalMasImp = totalConImpuesto(estadoSelec, precioTotal);

  const porcentajeDess = portentajeDes(totalMasImp);
  const des = descuento(totalMasImp);
  const totalDesImp = precioTotal + impuesto - des;


  div.innerHTML = "<p> Cantidad de item: " + firstNumber + "</p>";
  div2.innerHTML = "<p> Precio por item: " + precioItem +"</p>"+"Estado: " + estado.value + "%" +porcentajeEst +"" +"<br> <br> Precio neto: $" + precioTotal;
  div3.innerHTML = "<p> Impuesto: $" + impuesto + "</p>";
  div4.innerHTML = "<p> Precio total con impuesto: $" + totalMasImp + "</p>";


  div5.innerHTML = "<p> Precio Total: " + totalDesImp + "</p>";
  div6.innerHTML = "<p> Cantidad de Descuento(%" +porcentajeDess+ "): $" + des + "</p>";


});
