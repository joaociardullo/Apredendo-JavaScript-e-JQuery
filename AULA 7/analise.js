let num = document.querySelector('input#tnum')
let lista = document.querySelector('select#tlista')
let res = document.querySelector('div#res')
let valores = []

function isNum(n) {
    if (Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}

function isLista(n, l) {
    if (l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}


function adicionar() {
    if (isNum(num.value) && !isLista(num.value, valores)) {
        valores.push(Number(num.value))
        let item = document.createElement('option')

        item.text = `Valor ${num.value} adicionado.`

        res.innerHTML = ""

        lista.appendChild(item)
    } else {
        alert('valor invalido ou ja encontrado na lista')
    }
    num.value = ""
    num.focus()
}

function finalizar() {
    if (valores.length == 0) {
        alert('adicione valores antes de finalizar ')

    } else {
        let tot = valores.length //total de elementos de vetor
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0

        for (let pos in valores) {
            if (valores[pos] > maior)
                maior = valores[pos]

            if (valores[pos] > menor)
                menor = valores[pos]
            soma += valores[pos]
        }
        media = soma / tot

        res.innerHTML = ''
        res.innerHTML += `<p> ao todo temos, ${tot} números cadastrados</p>`

        res.innerHTML += `<p> O maior valor informado foi ${maior} </p>`

        res.innerHTML += `Somando todos os valores , temos ${soma} </p>`

        res.innerHTML += `<p> A media dos valores digitados é ${media.toFixed(1)}</p>`

    }
}




















