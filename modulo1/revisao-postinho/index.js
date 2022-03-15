
// COMPARADORES
// Exercício 1------------------------------------------------------------------------------------

// a-)Comparador de desigualdade a!==b 
// Exemplo:
/*
function checarDesigualdade(a, b) {

    return `No comparador de desigualdade ${a}!==${b} é ${a !== b}`
}
console.log(checarDesigualdade(1, 3));

// b-)Compare a igualdade entre a===b

function checarIgualdade(a, b) {
    //  Sua lógica aqui
    return `No comparador de igualdade ${a}===${b} é ${a === b}`
}
console.log(checarIgualdade(1, 1));


// c-)Faça uma função chamada "verificaSeEMaior"
function verificaSeEMaior(a, b) {

    return `No comparador de maior  ${a}>${b} é ${a > b} `
}
console.log(verificaSeEMaior(2156, 321));


// Exercício 2------------------------------------------------------------------------------------
//Escreva true or false para as comparações abaixo:
// exemplo 1>2 = false
// a-) 1==='1'= true
// b-) 1=='1'= false
// c-) 'a'==='b'= true
// d-) 'b'>'a'= false
// e-) 0!==null= true


// CONDICIONAIS

// Exercício 3------------------------------------------------------------------------------------

const cadastro = () => {
    const usuario = []

    //  Sua lógica aqui
    const nomeDoUsuario = prompt('Digite seu nome.')
    const anoDeNascimento = Number(prompt('Digite a sua data de nascimento.'))
    const senhaDoUsuario = prompt('Digite sua senha.')
    const nacionalidae = prompt('Digite a sua nacionalidade.')
    const idade = (2022 - anoDeNascimento)
    if(idade < 18){
        return `Erro no cadastro.`
    }
    if(senhaDoUsuario.length < 6){
        return `Erro no cadastro`
    }
    if(nacionalidae !== 'br'){
        return `Erro no cadastro.`
    }
    
    const pessoa = {
        nomeDoUsuario:nomeDoUsuario, 
        anoDeNascimento:anoDeNascimento,
        senhaDoUsuario:senhaDoUsuario,
        nacionalidae:nacionalidae
    }
    usuario.push(pessoa)

    return usuario
}



// console.log(cadastro());

// Exercício 4-----------------------------------------------------------------------------------------------

// const login = () => {
//     const login = "labenu"
//     //  Sua lógica aqui
//     const senhaUsuario = prompt('Digite sua senha')
    

// if(senhaUsuario === login){
//     return `Usuario logado.`
// }else{
//     return `Senha Inválida`
// }

// }
// console.log(login());

// Exercício 5----------------------------------------------------------------------------------------------------

const primeiraDose = () => {

    //  Sua lógica aqui
    const seuNome = prompt('Digite seu nome.')
    const nomeVacina = prompt('Digite o nome da vacina que você tomou.')
    let tempo = ""
    let data = ""


if(nomeVacina === 'Coronavac'){
    tempo = 28
    data = '12/04/2022'

        return `Olá ${seuNome}! A próxima dose da ${nomeVacina} é daqui a ${tempo} dias. Compareça no posto na data ${data}`

}
if(nomeVacina === 'Astrazenica'){
    tempo = 90
    data = '15/06/2022'
        
    return `Olá ${seuNome}! A próxima dose da ${nomeVacina} é daqui a ${tempo} dias. Compareça no posto na data ${data}`
}
if(nomeVacina === 'Pfizer'){
    tempo = 90
    data = '15/06/2022'

    return `Olá ${seuNome}! A próxima dose da ${nomeVacina} é daqui a ${tempo} dias. Compareça no posto na data ${data}`
}
}
console.log(primeiraDose())


// LOOP+CONDICIONAL

// Exercício 6 -------------------------------------------------------------------------------------

const segundaDose = (nomeDoUsuario) => {
    const usuarios = [
        { nome: "Artur", imunizacao: "incompleta" },
        { nome: "Barbara", imunizacao: "incompleta" },
        { nome: "Carlos", imunizacao: "incompleta" }
    ]

    //  Sua lógica aqui

    for (let i = 0 ; i<3 ; i++){
        if(nomeDoUsuario === usuarios[i].nome){
            usuarios[i].imunizacao = "completa"
        }
    }

}
console.log(segundaDose("Barbara"));

// Exercício 7 --------------------------------------------------------------------------------------

const avisoAosAtrasados = () => {
    const usuarios = [
        { nome: "Artur", imunizacao: "incompleta" },
        { nome: "Barbara", imunizacao: "completa" },
        { nome: "Carlos", imunizacao: "incompleta" }
    ]

    //  Sua lógica aqui
    for (let i = 0 ; i < usuarios.length ; i++){
        if(usuarios[i].imunizacao !== "completa"){
            console.log (`Olá ${usuarios[i].nome}! Sua imunização está ${usuarios[i].imunizacao}, por favor volte ao postinho para tomar a segunda dose.`)
        }
    }

}
console.log(avisoAosAtrasados());
*/

// DESAFIO------------------------------------------------------------------------------------------

const usuarios = [
    {
        nome: "Artur",
        ano: 2000,
        nacionalidae: "brasileiro",
        senha: "123456",
        vacina: "pfizer",
        imunizacao: "incompleta"
    },
    {
        nome: "Bárbara",
        ano: 1984,
        nacionalidae: "brasileira",
        senha: "labenu",
        vacina: "astrazenica",
        imunizacao: "completa"
    },
    {
        nome: "Carlos",
        ano: 2000,
        nacionalidae: "brasileiro",
        senha: "123456",
        vacina: "coronavac",
        imunizacao: "incompleta"
    }

]

const cadastroDesafio = () => {
    //  Sua lógica aqui
    
console.log(cadastroDesafio());

const loginDesafio = () => {
    //  Sua lógica aqui
}
console.log(loginDesafio());

const primeiraDoseDesafio = () => {
//  Sua lógica aqui
}
console.log(primeiraDoseDesafio())
const segundaDoseDesafio = (nomeDoUsuario) => {
    //  Sua lógica aqui
}
console.log(segundaDoseDesafio("ALGUM NOME AQUI"));

const avisoAosAtrasadosDesafio = () => {
    //  Sua lógica aqui
}
console.log(avisoAosAtrasadosDesafio());