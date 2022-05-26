// const minhaString:string = 12 
// Type 'number' is not assignable to type 'string'


// b)
// type meuNumero = {
//     name:string,
//     age:number
// }

// c)
        enum coresArcoIris{
        azul = "Azul",
        amarelo = "Amarelo",
        vermelho = "Vermelho",
        verde = "Verde",
        violeta = "Violeta"
}

        type Pessoa = {
        name:string
        age:number
        cores:coresArcoIris.azul
    }

    
    type Person1 = Pessoa
    type Person2 = Pessoa
    type Person3 = Pessoa

