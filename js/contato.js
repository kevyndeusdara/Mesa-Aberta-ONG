/* =======================================================
   MESA ABERTA - PROJETO INTEGRADOR (VERSAO 2)
   Funcionalidade 1: validar o formulario de contato.
   Funcionalidade 2: mostrar/ocultar orientacoes da ONG.
   Sem envio real de mensagens ou armazenamento de dados.
   ======================================================= */

// Selecionamos os elementos da pagina pelos seus IDs.
const formulario = document.getElementById("form-contato");
const campoNome = document.getElementById("nome");
const campoEmail = document.getElementById("email");
const campoAssunto = document.getElementById("assunto");
const campoMensagem = document.getElementById("mensagem");
const mensagemRetorno = document.getElementById("mensagem-retorno");

const botaoOrientacoes = document.getElementById("botao-orientacoes");
const painelOrientacoes = document.getElementById("painel-orientacoes");

// FUNCIONALIDADE 1 - Validar os quatro campos do formulario.
function validarFormulario(evento) {
    // Impede que o navegador tente enviar/recarregar a pagina.
    evento.preventDefault();

    // Lemos os valores e retiramos espacos desnecessarios das pontas.
    const nome = campoNome.value.trim();
    const email = campoEmail.value.trim();
    const assunto = campoAssunto.value.trim();
    const mensagem = campoMensagem.value.trim();

    // As condicoes exibem o primeiro problema encontrado.
    if (nome.length < 3) {
        mensagemRetorno.textContent = "Informe um nome com pelo menos 3 caracteres.";
        mensagemRetorno.className = "mensagem-erro";
        campoNome.focus();
    } else if (email === "" || !campoEmail.checkValidity()) {
        mensagemRetorno.textContent = "Informe um e-mail valido, como aventureiro@exemplo.com.";
        mensagemRetorno.className = "mensagem-erro";
        campoEmail.focus();
    } else if (assunto === "") {
        mensagemRetorno.textContent = "Selecione um assunto para sua mensagem.";
        mensagemRetorno.className = "mensagem-erro";
        campoAssunto.focus();
    } else if (mensagem.length < 10) {
        mensagemRetorno.textContent = "Escreva uma mensagem com pelo menos 10 caracteres.";
        mensagemRetorno.className = "mensagem-erro";
        campoMensagem.focus();
    } else {
        // Apenas demonstracao: nao ha servidor nem envio de e-mail.
        mensagemRetorno.textContent =
            "Pergaminho validado! Esta e uma simulacao: nenhum e-mail foi enviado e nenhum dado foi armazenado.";
        mensagemRetorno.className = "mensagem-sucesso";
    }
}

// FUNCIONALIDADE 2 - Mostrar ou ocultar orientacoes ao clicar.
function alternarOrientacoes() {
    if (painelOrientacoes.hidden) {
        painelOrientacoes.hidden = false;
        botaoOrientacoes.textContent = "Ocultar orientacoes da guilda";
        botaoOrientacoes.setAttribute("aria-expanded", "true");
    } else {
        painelOrientacoes.hidden = true;
        botaoOrientacoes.textContent = "Mostrar orientacoes da guilda";
        botaoOrientacoes.setAttribute("aria-expanded", "false");
    }
}

// Registramos os dois eventos obrigatorios do projeto.
formulario.addEventListener("submit", validarFormulario);
botaoOrientacoes.addEventListener("click", alternarOrientacoes);
