function contar() {

    let inic = document.getElementById('inicio')
    let fims = document.getElementById('fim')
    let pass = document.getElementById('passo')
    let res = document.getElementById('res')

    //Verificar se os dados estao preenchidos

    if (inic.value.length == 0 || fims.value.length == 0 || pass.value.length == 0) {
        res.innerHTML = 'Impossivel contar ! preencher os dados.'
    } else {

        res.innerHTML = 'contador: '

        //Converter os dados do input para numerto 

        let i = Number(inic.value)
        let f = Number(fims.value)
        let p = Number(pass.value)

        //se colocar passo igual 0 - mostrar erro  e substituir para 1

        if (p <= 0) {
            window.alert('passo invalido ! Consideramos PASSO 1')
            p = 1
        }

        //contagem crescente
        if (i < f) {
            for (let cont = i; cont <= f; cont += p) {
                res.innerHTML += ` ${cont} \u{1f449} `
            }
        } else { //contagem decresente
            for (let cont = i; cont >= f; cont -= p) {
                res.innerHTML += ` ${cont} \u{1f449}`
            }
        }
        res.innerHTML +='\u{1f3c1}'
    }
}

function limpar() {
    if (document.getElementById('inicio').value != "") {
        document.getElementById('inico ').value = "";
        document.getElementById('fim').value = "";
        document.getElementById('passo').value = "";
        document.getElementById('res').innerHTML = "";

    }
}

