// Estruturas de Repetição
import { parseTextInput } from "../scripts.js";

document.getElementById("p2-ex1").addEventListener("submit", (e) => {
  e.preventDefault();

  const login = document.getElementById("p2-ex1-input1");
  const senha = document.getElementById("p2-ex1-input2");
  const resultado = document.getElementById("p2-ex1-resultado");

  function validarSenha() {
    if (login.value !== senha.value) {
      senha.classList.remove("is-invalid");
      senha.classList.add("is-valid");
      return true;
    } else {
      senha.classList.remove("is-valid");
      senha.classList.add("is-invalid");
      resultado.textContent = `Senha inválida.`;
      return false;
    }
  }

  class P3_1 {
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