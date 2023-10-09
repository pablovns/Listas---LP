// Vetores
import { parseTextInput } from "../scripts.js";

document.getElementById("p3-ex1").addEventListener("submit", (e) => {
  e.preventDefault();

  class P3_1 {
    constructor(elemento) {
      this.arrayValores = parseTextInput(elemento.value);
      console.log(this.arrayValores);
    }

    inverterArray() {
      return this.arrayValores.reverse();
    }

    resultado() {
      let resultado = document.getElementById("p3-ex1-resultado");
      resultado.textContent = `Array inverso: [${this.inverterArray().join(", ")}]`;
    }
  }

  let input1 = new P3_1(document.getElementById("p3-ex1-input1"));
  input1.resultado();
});