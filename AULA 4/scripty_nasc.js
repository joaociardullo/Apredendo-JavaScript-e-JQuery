function verificar(){

    let data = new Date()
    let anoatual = data.getFullYear() 
    let anodig = document.getElementById('txtano')
    let resultado = document.querySelector('div#res') 
	
	
    if(anodig.value.length == 0 || Number(anodig.value) > anoatual){ 
       alert('[ERRO] Verifique os dados e tente novamente!')
    
	} else {
        let fsexo = document.getElementsByName('sexo') //criar tag  img no html 

        let idade = anoatual - Number(anodig.value)
		let genero = '' //inclui

        let img = document.createElement('img')
        img.setAttribute('id', 'foto')


		if(fsexo[0].checked){ 
            genero = 'Homem'
            if(idade >=0 && idade < 10){
                img.setAttribute('src', 'img/menino.png') 
				
            }else if(idade < 21){
               img.setAttribute('src', 'img/jovem_m.png')
			   
            }else if(idade < 50){
               img.setAttribute('src', 'img/adulto.png')
			   
            } else{
               img.setAttribute('src', 'img/idoso.png')
            }


        //FEMININO
        }else if(fsexo[1].checked){
            genero = 'Mulher'
			
            if(idade >=0 && idade < 10){
               img.setAttribute('src', 'img/menina.png')
				
            }else if(idade < 21){
               img.setAttribute('src', 'img/jovem_f.png')
				
            }else if(idade < 50){
               img.setAttribute('src', 'img/adulta.png')
				
            } else{
               img.setAttribute('src', 'img/idosa.png')
            }
        }
		
	//} - essa chaves que estava errada
	
            resultado.style.textAlign = 'center'
            resultado.innerHTML = `Sua idade é ${idade} anos`
            resultado.appendChild(img)
        }
    }
