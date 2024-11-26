/* eslint-disable */
/*import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";*/

window.onload = function() {
  let pronombres = ["the", "our"];
  let adjetivos = ["great", "big"];
  let sustantivos = ["jogger", "racoon"];
  let dominios = [".io", ".com", ".es"];
  let resultado = document.getElementById("resultado");

  for (let i = 0; i < pronombres.length; i++) {
    for (let j = 0; j < adjetivos.length; j++) {
      for (let k = 0; k < sustantivos.length; k++) {
        for (let h = 0; h < dominios.length; h++) {
          let dominio = `${pronombres[i]}${adjetivos[j]}${sustantivos[k]}${dominios[h]}`;
          console.log(dominio); // Muestra el dominio en la consola pero lo muestra
          let span = document.createElement("span");
          span.textContent = `${dominio}  //  `;
          resultado.appendChild(span);
        }
      }
    }
  }
};
