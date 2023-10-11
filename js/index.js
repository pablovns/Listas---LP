// Função auxiliar para transformar o texto separado por espaços em um vetor
export function parseTextInput(input) {
  return input
    .split(" ")
    .filter((item) => item !== "")
    .map((item) => parseFloat(item.trim()));
}
