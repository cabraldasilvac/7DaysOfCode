//  #7DaysOfCode 
// // ChallengeDay02 - Lógica JS 2/7: Variáveis

//- Qual  é o seu nome?
// - Qual é a sua idade?
// - Qual linguagem de programação você está estudando?
// - Você gosta de estudar [linguagem]? Responda com o número 1 para SIM ou 2 para NÃO.

// Dependendo da Resposta o programa retorna.

// 1 > Muito bom! Continue estudando e você terá muito sucesso.
// 2 > Ahh que pena... Já tentou aprender outras linguagens de programação?
//
function enviar() {
    const nome = document.getElementById("nome").value;
    const idade = document.getElementById("idade").value;
    const linguagem = document.getElementById("linguagem").value;

    if ((nome, idade, linguagem == "")) {
        alert("Você dever preencher todos os campos para continuar!");
    } else {
        document.getElementById(
            "mensagem"
        ).innerHTML = `Olá ${nome}! Você tem ${idade} anos e está estudando ${linguagem}.`;

        document.getElementById(
            "pergunta"
        ).innerHTML = `<div class="perguntas"<label>Você está gostando de estudar ${linguagem}?</label><br><br>
  <button type="submit" onclick="sim()">Sim</button> <button type="submit" onclick="nao()">Não</button></div>`;
    }
}

function sim() {
    document.getElementById("resposta").innerHTML =
        "<h2>Muito bom! Continue estudando e você terá muito sucesso.</h2>";
}

function nao() {
    document.getElementById("resposta").innerHTML =
        "<h2>Ahh que pena... Já tentou aprender outras linguagens de programação?</h2>";
}