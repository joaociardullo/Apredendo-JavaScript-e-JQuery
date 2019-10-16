/*

let nomes = ['Sirlene', 'Adriano', 'Luciana', 'Amanda']
console.log(nomes)
console.log(nomes.length)
console.log(nomes[1])
console.log(nomes[5])


let grupos = [
    ['Sirlene', 'Adriano'],
    ['Luciana', 'Amanda', 'Thalita'],
    ['Carolina', 'Sidney', 'Gabriela']
]

console.log(grupos.length)
console.log(grupos[0][0])
console.log(grupos[1][1])


/*
push - adiciona elementos ao final de um array
pop - remove o último elemento do array
shift - remove o primeiro elemento do array
unshift - adicona elementos ao inicio do array


let cursos = ['HTML', 'PYTHON', 'PHP']
console.log(cursos)

cursos.push('JavaScript')
console.log(cursos)

cursos.unshift('BOOTSTRAP')
console.log(cursos)
*/


//=========================================
/*
function par_impar(n){
    if (n % 2 == 0){
        return 'Par'
    }else {
        return 'Ímpar'
    }
}

console.log(par_impar(5))
console.log(par_impar(8))


function soma(n1, n2){
    return n1 + n2
}
console.log(soma(2, 3))

// fatorial  - 5! = 5x4x3x2x1
function fator(num){
    if(num == 1){
        return 1
    } else {
        return num * fator(num -1)
    }
}
console.log(fator(5))

//======================================

let func = { 
    nome: 'Sirlene',
    idade: '40',
    cargo: 'Docente'
}
console.log(func)
console.log(func['idade'])
console.log(func.idade)


let cursos = [ //array 
    { //objeto
        titulo: 'HTML5 E CSS3',
        alunos: '180',
        categorias: ['web', 'tecnologia'] //array
    },

    {
        titulo: 'JavaScript',
        alunos: '150',
        categorias: ['desenvolvimento web', 'tecnologia']   
    },
    
    {
        titulo: 'Aprenda PHP',
        alunos: '200',
        categorias: ['programação', 'tecnologia'] 
    }
 ]
 console.log(cursos[1])
 console.log(cursos[2].categorias[1])


 //alterar elementos
 cursos[2].categorias[0] = 'Aplicativos'
 cursos[2].titulo = "Excel Avançado"
 console.log(cursos)
*/

 let aluno = {
     nome: 'Sirlene',
     sobrenome: 'Sanches',
     ano_nasc: 1979,
     nome_completo: function(){
         let n_completo = (`${this.nome} ${this.sobrenome}`)
         return n_completo
     },
     ver_idade: function(){
        let idade = 2019 - this.ano_nasc
        return idade
     }
 }
 console.log(aluno.nome_completo())
 console.log(`A idade é: ${aluno.ver_idade()} anos`)