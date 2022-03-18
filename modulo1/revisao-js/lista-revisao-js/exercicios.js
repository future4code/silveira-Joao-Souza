// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!! 
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()


// EXERCÍCIO 01
function retornaTamanhoArray(array) {
   
    const tamanho = array.length()
        return tamanho
}

// EXERCÍCIO 02
function retornaArrayInvertido(array) {
  
    const meuArrayInvert = array.reverse()
        return meuArrayInvert
}

// EXERCÍCIO 03
function retornaArrayOrdenado(array) {
    const arrayOrdenado = array.sort()
        return arrayOrdenado
}

// EXERCÍCIO 04
function retornaNumerosPares(array) {
    const pares = array.filter(x => x % 2 ===0)
        return pares
}
// EXERCÍCIO 05
function retornaNumerosParesElevadosADois(array) {
    const pares = array.filter(x => x % 2 ===0)
        return pares ** 2
    
        
}   

// EXERCÍCIO 06
function retornaMaiorNumero(array) {
    const numMaior = Math.max.apply(null, array);
        return numMaior
        
}

// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {

}

// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {
   
}

// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {

}

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {
  
}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {
       filme = {
       nome: 'O Diabo Veste Prada',
       ano: 2006,
       diretor: 'David Frankel',
       atores: ['Maryl Streep', ' Anne Hathaway', ' Emily Blunt', ' Stanley Tucci' ]
   }
   const frase = `Venha assistir ao filme ${filme.nome}, de ${filme.ano}, dirigido por ${filme.diretor} e estrelado por ${filme.atores}`
    
       return frase
} 


// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
    pessoa = {
       nome: "Astrodev",
       idade: 25,
       email:"astrodev@labenu.com.br",
       endereco: "Rua do Futuro, 4"
}
        return novoObjeto = {
            ...pessoa,
            nome: "ANÔNIMO"
        }
}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {
   
   

   
}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
  
}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {

}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {
  
}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {
   
}