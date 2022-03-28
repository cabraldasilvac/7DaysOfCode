var categorias = ["Bebidas", "Temperos", "Laticínios", "Sacolão", "Doces", "Açougue", "Limpeza", "Padaria", "Enlatados", "Cereais", "Frios", "Congelados"]
var lista = []
var produto = ""
var quantidade = ""
var categoria = ""


createSelectCategorias()

function createSelectCategorias() {
    var divCategorias = ""
    divCategorias += "Categoria: <select name='categoriasSelect' id='categoriasSelect'>"

    for (var item in categorias) {
        divCategorias += "<option value='" + categorias[item] + "'>" + categorias[item] + "</option>"
    }

    divCategorias += "</select>"
    document.getElementById("divCategorias").innerHTML = divCategorias
}

function addItem() {

    produto = document.getElementById("item").value
    quantidade = document.getElementById("quantidade").value
    categoria = document.getElementById("categoriasSelect").value

    var objetoProduto = { "produto": produto, "quantidade": quantidade, "categoria": categoria }

    lista.push(objetoProduto)

    document.getElementById("item").value = ""
    document.getElementById("quantidade").value = ""

}

function exibirLista() {

    var htmlCode = "<h3>Lista de Compras:</h3>"

    var categoriasSelecionadas = []

    for (var k in lista) {
        if (!categoriasSelecionadas.includes(lista[k].categoria))
            categoriasSelecionadas.push(lista[k].categoria)
    }

    for (var i in categoriasSelecionadas) {
        htmlCode += "<ul>" + categoriasSelecionadas[i] + ":</ul>"
        for (var j in lista) {
            if (lista[j].categoria == categoriasSelecionadas[i]) {
                htmlCode += "<li>" + lista[j].produto + ": " + lista[j].quantidade + "</li>"
            }
        }
    }
    limparContent()

    document.getElementById("content").innerHTML = htmlCode

}

function excluirElementoTela() {
    var htmlCode = ""

    htmlCode += "Item: <select name='itemSelect' id='itemSelect'>"

    for (var item in lista) {
        htmlCode += "<option value='" + lista[item].produto + "'>" + lista[item].produto + "</option>"
    }

    htmlCode += "</select>"
    htmlCode += "<button class='delete' onclick='excluirElemento()' >Excluir item</button>"
    htmlCode += "<button class='finalizar' onclick='telaInicial()' >Voltar</button>"

    exibirLista()
    document.getElementById("content").innerHTML += htmlCode
}

function excluirElemento() {
    var item = document.getElementById("itemSelect").value

    for (var i in lista) {
        if (lista[i].produto.toLowerCase() == item.toLowerCase()) {
            lista.splice(i, 1)
        }
    }

    excluirElementoTela()

}

function telaInicial() {
    limparContent()
    var htmlCode = ""

    htmlCode += "<p>Vamos preparar a lista de compras?</p>"
    htmlCode += "<p>Adicione os produtos na lista, depois que adicionar todos os produtos clique em finalizar.</p>"
    htmlCode += "Produto: <input type='text' id='item'><br>"
    htmlCode += "Quantidade: <input type='text' id='quantidade'><br>"
    htmlCode += "<div id='divCategorias'></div>"
    htmlCode += "<br><button class='add' onclick='addItem()'>Adicionar Item</button><button class='deleteButton' onclick='excluirElementoTela()' >Excluir um item</button>"
    htmlCode += "<br><button class='finalizar' onclick='telaFinal()'>Finalizar</button>"
    htmlCode += "<div class='mensagem'>"
    htmlCode += "<p id='mensagem'></p>"
    htmlCode += "</div>"

    document.getElementById("content").innerHTML = htmlCode

    createSelectCategorias()

}

function limparContent() {
    document.getElementById("content").innerHTML = ""
}

function limparCategorias() {
    document.getElementById("divCategorias").innerHTML = ""
}

function addButtonsContent() {
    var htmlCode = ""

    htmlCode += "<br><button class='finalizar' onclick='telaInicial()'>Adicionar Mais Itens</button><button class='finalizar' onclick='novaLista()' >Criar nova lista</button>"

    document.getElementById("content").innerHTML += htmlCode

    console.log("Executando mas não aparece na tela")
}

function telaFinal() {
    console.log("Executou o telaFinal")
    exibirLista()
    console.log("Saiu do exibirLista")
    addButtonsContent()
}

function novaLista() {
    lista = []
    telaInicial()
}