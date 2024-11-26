/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let pronombres = ["the", "our"];
  let adjetivos = ["great", "big"];
  let sustantivos = ["jogger", "racoon"];
  let dominios = [".io", ".com", ".es"];
  console.log("Hello Rigo from the console!");

  for (let i = 0; i < pronombres.length; i++) {
    for (let j = 0; j < adjetivos.length; j++) {
      for (let k = 0; k < sustantivos.length; k++) {
        for (let h = 0; h < dominios.length; h++) {
          console.log(`${pronombres},${adjetivos},${sustantivos},${dominios}`);
        }
      }
    }
  }
};
