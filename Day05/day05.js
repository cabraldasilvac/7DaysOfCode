// se você deseja adicionar um produto  na sua lista de compras, e você deve poder responder com sim ou não.

//Em seguida, ele perguntará qual comida você deseja inserir, e você digitará o nome dela, como por exemplo batata.

// Depois, ele deverá perguntar em qual categoria essa comida se encaixa, com algumas opções já pré-definidas, como frutas, laticínios, congelados, doces e o que mais você achar interessante. Assim, você poderá separar tudo no seu devido grupo.

// Por fim, caso você não queira mais adicionar nada na lista de compras e responder não na primeira pergunta, ele irá exibir uma lista com todos os itens agrupados, da seguinte forma:

// Caso você adicione na sua lista:
// banana, leite em pó, tomate, leite vegetal, chiclete, bala de ursinho, maçã, uva, abacate e leite de vaca 


// O programa deverá imprimir, por exemplo:

// Lista de compras:
// Frutas: banana, tomate, maçã, uva, abacate
// Laticínios: leite vegetal, leite de vaca, leite em pó
// Congelados:
// Doces: chiclete e bala de ursinho

//cria um array onde vai ser armazenada a lista
var lista = ["Minha", "lista", "de compras"];


var $lista = document.querySelector('ul');
var $produto = document.querySelector('#produto');
var $botao = document.querySelector('#btn');

// adiciona produto na lista
$botao.addEventListener('click', addProduto);

function addProduto() {
    var item = '<li>' + $produto.value + '</li>';
    $lista.innerHTML += item;
    // limpa campo
    $produto.value = '';
    // colocando o cursor no campo
    $produto.focus();
}

$produto.addEventListener('keyup', function(e) {
    // para descobrir qual a tecla foi digitada /console.log(e.keyCode);/
    if (e.keyCode === 13) {
        addProduto()
    } // Apertou a TECLA ENTER

})