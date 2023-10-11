// Estruturas de Repetição
// import { parseTextInput } from "../index.js";

import { validarFeedback } from "../index.js";
import { invalidarFeedback } from "../index.js";

document.getElementById("p2-ex1").addEventListener("submit", (e) => {
  e.preventDefault();

  const login = document.getElementById("p2-ex1-input1");
  const senha = document.getElementById("p2-ex1-input2");
  const resultado = document.getElementById("p2-ex1-resultado");

  function validarSenha() {
    if (login.value !== senha.value) {
      validarFeedback(senha);
      return true;
    } else {
      invalidarFeedback(senha);
      resultado.textContent = `Senha inválida.`;
      return false;
    }
  }

  class P2_1 {
    constructor(elementoNome, elementoSenha) {
      this.login = elementoNome.value;
      this.senha = elementoSenha.value;
    }
    
    resultado() {
      resultado.textContent = `Cadastrado com sucesso!`;
    }
  }

  if (validarSenha()) {
    let conta1 = new P2_1(login, senha);
    conta1.resultado();
  }

});

document.getElementById("p2-ex2").addEventListener("submit", (e) => {
  e.preventDefault();

  const resultado = document.getElementById("p2-ex2-resultado");
  const nome = document.getElementById("p2-ex2-input1");
  const idade = document.getElementById("p2-ex2-input2");
  const salario = document.getElementById("p2-ex2-input3");
  const sexo = document.getElementById("p2-ex2-input4");
  const estadoCivil = document.getElementById("p2-ex2-input5");

  function resultadoValido() {
    resultado.textContent = `Cadastrado com sucesso!`;
  }

  function resultadoInvalido() {
    resultado.textContent = `O cadastro não foi concluído.`;
  }

  function validarInputs({nome, idade, salario, sexo, estadoCivil}) {
    const objValidacao = {
      [nome]: function(elemento) {
        return elemento.value.lenght > 3
      },

      [idade]: function(elemento) {
        return elemento.value > 0 && elemento.value < 150
      },

      [salario]: function(elemento) {
        return elemento.value > 0
      },

      [sexo]: function(elemento) {
        return elemento.value !== ""
      },

      [estadoCivil]: function(elemento) {
        return elemento.value !== ""
      }
   }
    

    [nome, idade, salario, sexo, estadoCivil].forEach(element => {
      objValidacao[element](element) ? validarFeedback(element) : invalidarFeedback(element);
    });
  }

  class P2_2 {
    constructor(elementoNome, elementoSenha) {
      this.login = elementoNome.value;
      this.senha = elementoSenha.value;
    }
  }

  console.log("Teste P2_2");
  validarInputs([nome, idade, salario, sexo, estadoCivil]);
});