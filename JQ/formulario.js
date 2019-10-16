let conteudo_input = $('#c_nome').val()
console.log(conteudo_input)

$('#c_nome').val('Adriano Sanches')
console.log($('#c_nome').val())


let valor_selecionado = $('#options').val()
console.log(valor_selecionado)


let texto_selecionado = $('#options').find(':selected').text()
console.log(texto_selecionado)

let texto_radio = $('input[name=genero]:checked').parent('span').text()
console.log(texto_radio)

$('input[name=interesse]').change(function(){
    let checkboxes = $('input[name=interesse]:checked')
    let textos = []

    $.each(checkboxes, function(index, value){
        textos.push($(value).parent('span').text())
    })
    console.log(textos)
})
