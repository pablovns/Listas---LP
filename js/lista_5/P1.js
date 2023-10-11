// Estruturas de Decisão
document.getElementById("p1-ex1").addEventListener("submit", (e) => {
  e.preventDefault();

  class P1_1 {
    constructor(elemento) {
      this.valor = Number(elemento.value);
    }

    static maiorNumero(num1, num2) {
      return Math.max(num1.valor, num2.valor);
    }

    static resultado(num1, num2) {
      let maior = P1_1.maiorNumero(num1, num2);
      let resultado = document.getElementById("p1-ex1-resultado");
      resultado.textContent = `O maior número é: ${maior}`;
    }
  }

  let input1 = new P1_1(document.getElementById("p1-ex1-input1"));
  let input2 = new P1_1(document.getElementById("p1-ex1-input2"));

  P1_1.resultado(input1, input2);
});

document.getElementById("p1-ex2").addEventListener("submit", (e) => {
  e.preventDefault();

  class P1_2 {
    constructor(elemento) {
      this.valor = Number(elemento.value);
    }

    static resultado(numero) {
      let resultado = document.getElementById("p1-ex2-resultado");

      resultado.textContent = `O número é ${
        numero.valor > 0 ? "positivo" : numero.valor < 0 ? "negativo" : "igual a 0"
      }.`;
    }
  }

  let input1 = new P1_2(document.getElementById("p1-ex2-input1"));

  P1_2.resultado(input1);
});

document.getElementById("p1-ex3").addEventListener("submit", (e) => {
  e.preventDefault();

  class P1_3 {
    constructor(elemento) {
      this.valor = elemento.value.toUpperCase();
      this.sexo = this.valor === "F" ? "Feminino" : this.valor === "M" ? "Masculino" : "Inválido";
    }

    resultado() {
      let resultado = document.getElementById("p1-ex3-resultado");
      resultado.textContent = `Sexo ${this.sexo}`;
    }
  }

  let input1 = new P1_3(document.getElementById("p1-ex3-input1"));

  input1.resultado();
});
