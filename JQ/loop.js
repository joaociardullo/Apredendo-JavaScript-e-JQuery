let lista = ['html', 'css', 'php', 'Jquery']

$.each(lista, function (indice, valor) {
    console.log(`o valor de indice [${indice}] tem o valor de ${valor}`)
})


let pessoa = {
    nome: 'Joao',
    dn: '20/10/2019',
    CPF: '123.123.123 -12'
}

$.each(pessoa, function (chave, valor) {
    console.log(`O elemento de chave [${chave}] tem o valor de ${valor}`)
})

let interesses = $('#interesses li')
$.each(interesses, function(indice,valor){
    console.log(valor)
})

let interesse = $('#interesse li')
$.each(interesses, function(indice,valor){
    console.log($(valor).text())
})
