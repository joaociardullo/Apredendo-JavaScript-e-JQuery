let conteudo_html = $('#paragrafo_html').html()
$('#paragrafo_html').html("Mudar conteudo do paragrafo .html")
console.log(conteudo_html)

let conteudo_text = $('#paragrafo_text').text()
$('#paragrafo_text').text("mudar o conteudo do paragrafo .text")

conteudo_text = $('#paragrafo_text').text()
console.log(conteudo_text)

//attr - metodo é usado para manipular atributos com src, href . target....
let url_link = $('#paragrafo_link')
$('#paragrafo_link').attr('href', 'https://www.uol.com.br')

url_link = $('paragrago_link').attr('href')
console.log(url_link)


//mudar imagem 
$('#mudar_imagem').click(function(){
    $('#imagem_js').attr('src', 'img/noite.png')
    $('#mudar_imagem').hide()
})

//empty e remove
$('#paragrafo_empty').empty()

$('#paragrafo_empty').remove()