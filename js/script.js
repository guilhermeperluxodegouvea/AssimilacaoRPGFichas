// Botão Como Usar
$(document).ready(function () {
    $("#botaoComoUsar").click(function () {
        $("#modalComoUsar").modal("show");
    });
});

// Botão Importar
document.getElementById("importar").addEventListener("click", function () {
    document.getElementById("importarFicha").click();
});
document
    .getElementById("importarFicha")
    .addEventListener("change", function () {
        const fileInput = document.getElementById("importarFicha");

        // Verifica se um arquivo foi selecionado
        if (fileInput.files.length > 0) {
            const file = fileInput.files[0];
            const reader = new FileReader();

            reader.onload = function (e) {
                try {
                    const jsonData = JSON.parse(e.target.result);

                    // Preenche os campos com os valores do JSON
                    for (let key in jsonData) {
                        const element = document.getElementById(key);
                        if (element) {
                            // Preenche o campo com o valor correspondente
                            if (
                                element.tagName === "TEXTAREA" ||
                                element.type === "text" ||
                                element.type === "number"
                            ) {
                                element.value = jsonData[key]; // Para inputs e textareas
                            } else if (element.tagName === "SELECT") {
                                element.value = jsonData[key]; // Para selects
                            }
                        }
                    }
                } catch (error) {
                    alert(
                        "Erro ao importar sua ficha. Verifique o formato do arquivo."
                    );
                    console.error(error);
                }
            };

            // Lê o arquivo como texto
            reader.readAsText(file);
        } else {
            alert("Por favor, selecione um arquivo para importar.");
        }
    });

// Botão Exportar
document.getElementById("exportar").addEventListener("click", function () {
    // Objeto para armazenar os dados
    let data = {};

    // Pega todos os inputs, textareas e selects
    const elements = document.querySelectorAll("input, textarea, select");

    // Passa pelos inputs, textareas e selects para pegar os valores
    elements.forEach((element) => {
        if (element.id) {
            data[element.id] = element.value;
        }
    });

    // O nome do arquivo será o nome do personagem
    const nomeArquivo = document.getElementById("nomePersonagem")
        ? document.getElementById("nomePersonagem").value +
          "FichaPersonagemAssimilacao"
        : "fichaPersonagemAssimilacao";

    const jsonData = JSON.stringify(data, null, 2);

    const blob = new Blob([jsonData], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `${nomeArquivo}.json`;
    a.click();

    URL.revokeObjectURL(url);
});

// Botão Créditos
$(document).ready(function () {
    $("#botaoCreditos").click(function () {
        $("#modalCreditos").modal("show");
    });
});

// Botão troca de tema
document.addEventListener("DOMContentLoaded", function () {
    const botaoTema = document.getElementById("tema");
    let temaEscuroAtivo = false;

    botaoTema.addEventListener("click", () => {
        if (temaEscuroAtivo) {
            // Muda cor do body (fundo e texto)
            document.body.classList.remove("bg-dark", "text-white");
            document.body.classList.add("bg-light", "text-dark");

            // Muda o ícone do botão de tema para Lua
            botaoTema.innerHTML = '<i class="bi bi-moon"></i>';

            // Muda a variável
            temaEscuroAtivo = false;

            // Fazendo a mudança valer para os botões
            const botoes = document.querySelectorAll(".btn");
            botoes.forEach((botao) => {
                botao.classList.remove("btn-outline-light");
                botao.classList.add("btn-outline-dark");
            });

            // Mudando a linha no fim da nav
            const navbar = document.querySelector(".navbar");
            navbar.classList.remove("border-light");
            navbar.classList.add("border-dark");

            // Mudando as cores no modal Como Usar
            const modalComoUsarContent = document.querySelector(
                "#modalComoUsar .modal-content"
            );
            modalComoUsarContent.classList.remove("bg-dark", "text-white");
            modalComoUsarContent.classList.add("bg-light", "text-dark");

            // Mudando as cores no modal Creditos
            const modalCreditosContent = document.querySelector(
                "#modalCreditos .modal-content"
            );
            modalCreditosContent.classList.remove("bg-dark", "text-white");
            modalCreditosContent.classList.add("bg-light", "text-dark");

            // Mudando as cores no modal Dados
            const modalDadosContent = document.querySelector(
                "#modalDados .modal-content"
            );
            modalDadosContent.classList.remove("bg-dark", "text-white");
            modalDadosContent.classList.add("bg-light", "text-dark");

            // Mudando as cores no modal Resultados
            const modalResultadosContent = document.querySelector(
                "#modalResultados .modal-content"
            );
            modalResultadosContent.classList.remove("bg-dark", "text-white");
            modalResultadosContent.classList.add("bg-light", "text-dark");
        } else {
            // Muda cor do body (fundo e texto)
            document.body.classList.remove("bg-light", "text-dark");
            document.body.classList.add("bg-dark", "text-white");

            // Muda o ícone do botão de tema para Sol
            botaoTema.innerHTML = '<i class="bi bi-sun"></i>';

            // Fazendo a mudança valer para os botões
            const botoes = document.querySelectorAll(".btn");
            botoes.forEach((botao) => {
                botao.classList.remove("btn-outline-dark");
                botao.classList.add("btn-outline-light");
            });

            // Mudando a linha no fim da nav
            const navbar = document.querySelector(".navbar");
            navbar.classList.remove("border-dark");
            navbar.classList.add("border-light");

            // Muda a variável
            temaEscuroAtivo = true;

            // Mudando as cores no modal Como Usar
            const modalComoUsarContent = document.querySelector(
                "#modalComoUsar .modal-content"
            );
            modalComoUsarContent.classList.remove("bg-light", "text-dark");
            modalComoUsarContent.classList.add("bg-dark", "text-white");

            // Mudando as cores no modal Creditos
            const modalCreditosContent = document.querySelector(
                "#modalCreditos .modal-content"
            );
            modalCreditosContent.classList.remove("bg-light", "text-dark");
            modalCreditosContent.classList.add("bg-dark", "text-white");

            // Mudando as cores no modal Creditos
            const modalDadosContent = document.querySelector(
                "#modalDados .modal-content"
            );
            modalDadosContent.classList.remove("bg-light", "text-dark");
            modalDadosContent.classList.add("bg-dark", "text-white");

            // Mudando as cores no modal Resultados
            const modalResultadosContent = document.querySelector(
                "#modalResultados .modal-content"
            );
            modalResultadosContent.classList.remove("bg-light", "text-dark");
            modalResultadosContent.classList.add("bg-dark", "text-white");
        }
    });
});

// Botões de Determinação vs Assimilação
function toggleButton(button) {
    button.classList.toggle("botaoClicado");
}

// Botão Dados
$(document).ready(function () {
    $("#botaoDados").click(function () {
        $("#modalDados").modal("show");
    });
});

// Botão Resultados
$(document).ready(function () {
    $("#botaoResultados").click(function () {
        $("#modalResultados").modal("show");
    });
});

// Rolagem de dados
function rolarDados() {
    // PREPARA O MODAL
    const modalResultadosBody = document.querySelector("#modalResultadosBody");
    modalResultadosBody.innerHTML = "";

    // A QUANTIDADE RESGATADA VAI PRA UMA VARIAVEL DE QUANTIDADE
    const qntD6 =
        document.querySelector('input[name="d6"]:checked')?.value ?? 0;
    const qntD10 =
        document.querySelector('input[name="d10"]:checked')?.value ?? 0;
    const qntD12 =
        document.querySelector('input[name="d12"]:checked')?.value ?? 0;

    console.log(`D6: ${qntD6}, D10: ${qntD10}, D12: ${qntD12}`);

    // OBJETOS LITERAIS DO DADOS: CHAVE = NUMERO, VALOR = SIMBOLO
    const simbolosD6 = {
        1: "",
        2: "",
        3: "img/pressaoPreto.png",
        4: ["img/pressaoPreto.png", "img/adaptacaoPreto.png"],
        5: ["img/pressaoPreto.png", "img/adaptacaoPreto.png"],
        6: "img/sucessoPreto.png",
    };
    const simbolosD10 = {
        1: "",
        2: "",
        3: "img/pressaoPreto.png",
        4: ["img/pressaoPreto.png", "img/adaptacaoPreto.png"],
        5: ["img/pressaoPreto.png", "img/adaptacaoPreto.png"],
        6: "img/sucessoPreto.png",
        7: ["img/sucessoPreto.png", "img/sucessoPreto.png"],
        8: ["img/sucessoPreto.png", "img/adaptacaoPreto.png"],
        9: [
            "img/sucessoPreto.png",
            "img/adaptacaoPreto.png",
            "img/pressaoPreto.png",
        ],
        10: [
            "img/sucessoPreto.png",
            "img/sucessoPreto.png",
            "img/pressaoPreto.png",
        ],
    };
    const simbolosD12 = {
        1: "",
        2: "",
        3: "img/pressaoPreto.png",
        4: ["img/pressaoPreto.png", "img/adaptacaoPreto.png"],
        5: ["img/pressaoPreto.png", "img/adaptacaoPreto.png"],
        6: "img/sucessoPreto.png",
        7: ["img/sucessoPreto.png", "img/sucessoPreto.png"],
        8: ["img/sucessoPreto.png", "img/adaptacaoPreto.png"],
        9: [
            "img/sucessoPreto.png",
            "img/adaptacaoPreto.png",
            "img/pressaoPreto.png",
        ],
        10: [
            "img/sucessoPreto.png",
            "img/sucessoPreto.png",
            "img/pressaoPreto.png",
        ],
        11: [
            "img/sucessoPreto.png",
            "img/adaptacaoPreto.png",
            "img/adaptacaoPreto.png",
            "img/pressaoPreto.png",
        ],
        12: ["img/pressaoPreto.png", "img/pressaoPreto.png"],
    };

    // OS DADOS SÃO ROLADOS, TANTOS DADOS POR QUANTIDADE, E COMPARA
    // O RESULTADO COM UMA CHAVE PARA PEGAR O SÍMBOLO RESPECTIVO.
    // D6
    for (let i = 0; i < qntD6; i++) {
        const resultado = Math.floor(Math.random() * 6) + 1;
        const simbolo = simbolosD6[resultado];

        let simbolosTirados = "";

        // Verifica se o valor de simbolo é um array
        if (Array.isArray(simbolo)) {
            // Se for mais de um símbolo
            simbolosTirados = simbolo
                .map((imgPath) => `<img src="${imgPath}">`)
                .join("");
        } else {
            // Se for um símbolo só
            simbolosTirados = `<img src="${simbolo}">`;
        }

        // Escreve no modal
        modalResultadosBody.innerHTML += `<h4 class="fw-bold">Resultado ${
            i + 1
        }º <i class="bi bi-square-fill fs-5 me-2"></i>: ${simbolosTirados}</h4>`;

        console.log(resultado);
    }
    modalResultadosBody.innerHTML += `<hr>`;

    // D10
    for (let i = 0; i < qntD10; i++) {
        const resultado = Math.floor(Math.random() * 10) + 1;
        const simbolo = simbolosD10[resultado];

        let simbolosTirados = "";

        // Verifica se o valor de simbolo é um array
        if (Array.isArray(simbolo)) {
            // Se for mais de um símbolo
            simbolosTirados = simbolo
                .map((imgPath) => `<img src="${imgPath}">`)
                .join("");
        } else {
            // Se for um símbolo só
            simbolosTirados = `<img src="${simbolo}">`;
        }

        // Escreve no modal
        modalResultadosBody.innerHTML += `<h4 class="fw-bold">Resultado ${
            i + 1
        }º <i class="bi bi-suit-diamond-fill fs-4 me-2"></i>: ${simbolosTirados}</h4>`;

        console.log(resultado);
    }
    modalResultadosBody.innerHTML += `<hr>`;

    // D12
    for (let i = 0; i < qntD12; i++) {
        const resultado = Math.floor(Math.random() * 12) + 1;
        const simbolo = simbolosD12[resultado];

        let simbolosTirados = "";

        // Verifica se o valor de simbolo é um array
        if (Array.isArray(simbolo)) {
            // Se for mais de um símbolo
            simbolosTirados = simbolo
                .map((imgPath) => `<img src="${imgPath}">`)
                .join("");
        } else {
            // Se for um símbolo só
            simbolosTirados = `<img src="${simbolo}">`;
        }

        // Escreve no modal
        modalResultadosBody.innerHTML += `<h4 class="fw-bold">Resultado ${
            i + 1
        }º <i class="bi bi-pentagon-fill fs-4 me-2"></i>: ${simbolosTirados}</h4>`;

        console.log(resultado);
    }
}
