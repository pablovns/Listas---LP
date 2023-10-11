// Estruturas de Repetição
// import { parseTextInput } from "../index.js";

function validarFeedback(elementoFeedback) {
  elementoFeedback.classList.remove("is-invalid");
  elementoFeedback.classList.add("is-valid");
}

function invalidarFeedback(elementoFeedback) {
  elementoFeedback.classList.remove("is-valid");
  elementoFeedback.classList.add("is-invalid");
}

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
    let conta1 = new P3_1(login, senha);
    conta1.resultado();
  }

});

document.getElementById("p2-ex2").addEventListener("submit", (e) => {
  e.preventDefault();

  const nome = document.getElementById("p2-ex2-input1");
  const idade = document.getElementById("p2-ex2-input2");
  const salario = document.getElementById("p2-ex2-input3");
  const sexo = document.getElementById("p2-ex2-input4");
  const estadoCivil = document.getElementById("p2-ex2-input5");
  const resultado = document.getElementById("p2-ex2-resultado");

  class P2_2 {
    constructor(elementoNome, elementoSenha) {
      this.login = elementoNome.value;
      this.senha = elementoSenha.value;
    }
    
    resultado() {
      resultado.textContent = `Cadastrado com sucesso!`;
    }
  }

  
});