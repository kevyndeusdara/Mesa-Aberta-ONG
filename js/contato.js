/* Identificando os elementos do HTML */

const opcoesJornada = document.querySelectorAll(
    'input[name="jornada"]'
);

const grupoProjetos = document.getElementById(
    "grupo-projetos"
);

const grupoVoluntario = document.getElementById("grupo-voluntario");

const grupoMensagem = document.getElementById("grupo-mensagem");

/* Observando a escolha do visitante */

opcoesJornada.forEach(function(opcao) {

    opcao.addEventListener("change", function() {

        if (opcao.checked) {

            grupoProjetos.hidden = opcao.value !== "participar";

            grupoVoluntario.hidden = opcao.value !== "voluntario";

            grupoMensagem.hidden = opcao.value !== "contato";

        }

    });

});

/* ---------------- Envio do Formulário ---------------- */

// Encontrando o formulário
const formulario = document.getElementById("form-contato");

// Encontrando onde mostraremos a resposta
const mensagemRetorno = document.getElementById("mensagem-retorno");

// Detectando quando o visitante envia a ficha
formulario.addEventListener("submit", function(evento) {

    // Impede o envio padrão da página
    evento.preventDefault();

    // Descobre qual jornada foi escolhida
    const jornada = document.querySelector(
        'input[name="jornada"]:checked'
    ).value;

    // Confere o campo correspondente à jornada
    let campoObrigatorio;

    if (jornada === "participar") {
        campoObrigatorio = document.getElementById("projeto");
    } else if (jornada === "voluntario") {
        campoObrigatorio = document.getElementById("funcao");

        const disponibilidade = document.getElementById("disponibilidade");

        if (!disponibilidade.value) {
            disponibilidade.focus();
            mensagemRetorno.textContent = "Escolha sua disponibilidade!";
            return;
        }

    } else {
        campoObrigatorio = document.getElementById("mensagem");
    }

    if (!campoObrigatorio.value.trim()) {
        campoObrigatorio.focus();
        mensagemRetorno.textContent = "Complete os campos da sua jornada!";
        return;
    }

    // Exibe a confirmação de teste
    mensagemRetorno.textContent =
        "Pergaminho validado! Sua ficha está pronta para envio à guilda.";

        /* Limpa os campos do formulário */
formulario.reset();

/* Esconde as seções das jornadas */
grupoProjetos.hidden = true;
grupoVoluntario.hidden = true;
grupoMensagem.hidden = true;

});

