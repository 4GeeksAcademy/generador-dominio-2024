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

  for (i = 0; i < pronombres.length; i++) {
    for (i = 0; i < adjetivos.length; i++) {
      for (i = 0; i < sustantivos.length; i++) {
        for (i = 0; i < dominios.length; i++) {
          console.log(`${pronombres},${adjetivos},${sustantivos},${dominios}`);
        }
      }
    }
  }
};
