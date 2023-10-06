// Função para calcular e exibir resultadoados
function mostrarResultadoCalculado(parte) {
    let resultado;
    switch (parte) {
        case 'a':
            const vetorA = parseTextInput(document.getElementById("vetorA").value);
            const numX = parseFloat(document.getElementById("numX").value);
            const vetorM = vetorA.map((num) => num * numX);

            resultado = { vetorA, numX, vetorM };
            document.getElementById("resultadoA").textContent = JSON.stringify(resultado, null, 2);
            break;

        case 'b':
            const numerosB = parseTextInput(document.getElementById("numerosB").value);
            const numerosRevertidos = numerosB.reverse();

            resultado = { numerosB, numerosRevertidos };
            document.getElementById("resultadoB").textContent = JSON.stringify(resultado, null, 2);
            break;

        case 'c':
            const notasAlunos = parseTextInput(document.getElementById("notasAlunos").value);
            const notaMedia = calcularMedia(notasAlunos);
            const acimaMedia = contarAcimaMedia(notasAlunos, notaMedia);

            resultado = { notaMedia, acimaMedia };
            document.getElementById("resultadoC").textContent = JSON.stringify(resultado, null, 2);
            break;

        case 'd':
            const valorMercadoriasInputs = document.querySelectorAll(".valorMercadoria");
            const quantidadeMercadoriasInputs = document.querySelectorAll(".quantidadeMercadoria");
            const valorMercadorias = [];
            const quantidadeMercadorias = [];

            valorMercadoriasInputs.forEach(input => valorMercadorias.push(parseFloat(input.value)));
            quantidadeMercadoriasInputs.forEach(input => quantidadeMercadorias.push(parseInt(input.value)));

            const valorTotalEstoque = calcularValorTotalEstoque(valorMercadorias, quantidadeMercadorias);
            const valorMedioMercadorias = calcularValorMedioMercadorias(valorMercadorias);

            resultado = { valorTotalEstoque, valorMedioMercadorias };
            document.getElementById("resultadoD").textContent = JSON.stringify(resultado, null, 2);
            break;

        case 'e':
            const vetorV1 = parseTextInput(document.getElementById("vetorV1").value);
            const vetorV2 = parseTextInput(document.getElementById("vetorV2").value);
            const mesmoNumeroEPosicao = contarMesmoNumeroEPosicao(vetorV1, vetorV2);

            resultado = { mesmoNumeroEPosicao };
            document.getElementById("resultadoE").textContent = JSON.stringify(resultado, null, 2);
            break;

        default:
            break;
    }
}

// Função auxiliar para analisar a entrada de texto em formato de vetor
function parseTextInput(input) {
    return input.split(" ").filter(item => item !== "").map((item) => parseFloat(item.trim()));
}

// Função auxiliar para calcular a média
function calcularMedia(array) {
    const sum = array.reduce((total, num) => total + num, 0);
    return sum / array.length;
}

// Função auxiliar para contar quantos números estão acima da média
function contarAcimaMedia(array, average) {
    return array.filter(num => num > average).length;
}

// Função auxiliar para contar quantos números são iguais e estão na mesma posição
function contarMesmoNumeroEPosicao(array1, array2) {
    return array1.reduce((count, num, index) => count + (num === array2[index] ? 1 : 0), 0);
}

// Função para adicionar campos de entrada para mais uma mercadoria
function adicionarMercadoria() {
    const mercadoriasContainer = document.getElementById("mercadorias-container");
    const novaMercadoria = document.createElement("div");
    novaMercadoria.className = "mercadoria";
    novaMercadoria.innerHTML = `
    <div class="row-input-valores">
      <div class="input-field">
        <label for="valorMercadoria" class="input-label-mercadoria">Valor:</label>
        <input type="number" class="valorMercadoria input-mercadoria" min="1" required/>
      </div>
      <div class="input-field">
        <label for="quantidadeMercadoria" class="input-label-mercadoria">Quantidade:</label>
        <input type="number" class="quantidadeMercadoria input-mercadoria" min="1" required/>
      </div>
      <button id="1botaoRemover" class="removerMercadoria">Remover</button>
    </div>
    `;
    mercadoriasContainer.appendChild(novaMercadoria);

    // Adicionar um ouvinte de evento ao botão de remoção para a nova mercadoria
    const botaoRemover = novaMercadoria.querySelector(".removerMercadoria");
    botaoRemover.addEventListener("click", () => removerMercadoria(novaMercadoria));
}

// Função para remover uma mercadoria
function removerMercadoria(mercadoriaElement) {
    mercadoriaElement.remove();
}

// Função auxiliar para calcular o valor total do estoque
function calcularValorTotalEstoque(valores, quantidades) {
    let total = 0;
    for (let i = 0; i < valores.length; i++) {
        total += valores[i] * quantidades[i];
    }
    return total;
}

// Função auxiliar para calcular o valor médio das mercadorias
function calcularValorMedioMercadorias(valores) {
    const totalValores = valores.reduce((sum, valor) => sum + valor, 0);
    return totalValores / valores.length;
}

const mercadoria1 = document.getElementById("1mercadoria");
const botaoRemover1 = document.getElementById("1botaoRemover");
botaoRemover1.addEventListener("click", () => removerMercadoria(mercadoria1));  