document.getElementById("ex1").addEventListener("submit", (e) => {
  e.preventDefault();

  class Ex1 {
    constructor(elemento) {
      this.valor = Number(elemento.value);
    }

    static maiorNumero(num1, num2) {
      return Math.max(num1.valor, num2.valor);
    }

    static resultado(num1, num2) {
      let maior = Ex1.maiorNumero(num1, num2);
      let resultado = document.getElementById("p1-ex1-resultado");
      resultado.textContent = `O maior número é: ${maior}`;
    }
  }

  let input1 = new Ex1(document.getElementById("p1-ex1-input1"));
  let input2 = new Ex1(document.getElementById("p1-ex1-input2"));

  Ex1.resultado(input1, input2);
});

document.getElementById("ex2").addEventListener("submit", (e) => {
  e.preventDefault();

  class Ex2 {
    constructor(elemento) {
      this.valor = Number(elemento.value);
      console.log(this.valor);
    }

    static resultado(numero) {
      let resultado = document.getElementById("p1-ex2-resultado");

      resultado.textContent = `O número é ${
        numero.valor > 0 ? "positivo" : numero.valor < 0 ? "negativo" : "igual a 0"
      }.`;
    }
  }

  let input1 = new Ex2(document.getElementById("p1-ex2-input1"));

  Ex2.resultado(input1);
});

document.getElementById("ex3").addEventListener("submit", (e) => {
  e.preventDefault();

  class Ex3 {
    constructor(numero) {
      this.numero = Number(numero.value);
    }
  }

  input1 = new Ex3(document.getElementById("p1-ex3-input1"));
});
