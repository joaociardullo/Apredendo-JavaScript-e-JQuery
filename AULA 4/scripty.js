function carregar() {

    let msg = document.getElementById('msg') //declarção de variavel 
    let img = document.getElementById('imagem')
    let data = new Date()
    let hora = data.getHours() -8  // para acelarar o tempo , colocar "NUMERO"

    msg.innerHTML = `Agora são ${hora} horas` //texto de menssagem vai aparecer as horas 

    if (hora >= 0 && hora < 12) {
        img.src = "img/manha.png"
        document.body.style.background = '#DF8922'

    } else if (hora >= 12 && hora < 18) {
        img.src = "img/tarde.png"
        document.body.style.background = '#ffa500'

    } else {
        img.src = "img/noite.png"
        document.body.style.background = '#41253F'
    }
}
