// Função auxiliar para transformar o texto separado por espaços em um vetor
export function parseTextInput(input) {
  return input
    .split(" ")
    .filter((item) => item !== "")
    .map((item) => parseFloat(item.trim()));
}

export function validarFeedback(elementoFeedback) {
  elementoFeedback.classList.remove("is-invalid");
  elementoFeedback.classList.add("is-valid");
}

export function invalidarFeedback(elementoFeedback) {
  elementoFeedback.classList.remove("is-valid");
  elementoFeedback.classList.add("is-invalid");
}