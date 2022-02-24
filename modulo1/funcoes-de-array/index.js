//Exercícios de interpretação de código 1.
//Vai imprimir os itens da lista 1 a 1 
  
//Exercícios de interpretação de código 2.
//Vai imprimir apenas os nomes da lista

//Exercícios de interpretação de código 3.
//Vai excluir o item(apelido = Chinjo)



// Exercícios de escrita de código 1.
//a)
// const pets = [
//     { nome: "Lupin", raca: "Salsicha"},
//     { nome: "Polly", raca: "Lhasa Apso"},
//     { nome: "Madame", raca: "Poodle"},
//     { nome: "Quentinho", raca: "Salsicha"},
//     { nome: "Fluffy", raca: "Poodle"},
//     { nome: "Caramelo", raca: "Vira-lata"},
//  ]

//  const listaNomes = pets.map((item, index, array) => {
//      return item.nome

//  })
// console.log(listaNomes)

//b)
// const pets = [
//     { nome: "Lupin", raca: "Salsicha"},
//     { nome: "Polly", raca: "Lhasa Apso"},
//     { nome: "Madame", raca: "Poodle"},
//     { nome: "Quentinho", raca: "Salsicha"},
//     { nome: "Fluffy", raca: "Poodle"},
//     { nome: "Caramelo", raca: "Vira-lata"},
//  ]

// let nomePets = pets.filter((item) => {
//     if(item.raca === "Salsicha" ){
//         return true
//     }
//     else{
//         return false
//     }
    
// })

// console.log(nomePets)





//c)
// const pets = [
//         { nome: "Lupin", raca: "Salsicha"},
//         { nome: "Polly", raca: "Lhasa Apso"},
//         { nome: "Madame", raca: "Poodle"},
//         { nome: "Quentinho", raca: "Salsicha"},
//         { nome: "Fluffy", raca: "Poodle"},
//         { nome: "Caramelo", raca: "Vira-lata"},
//      ]
//      const racaPet = pets.filter((item) =>{
//           return item.raca === "Poodle"
         
//         })
//      console.log(racaPet)

//     const racaPoodle = racaPet.map((item) => {
//        const msg =  `Você ganhou um cupom de desconto de 10% para tosar o/a ${item.nome}!`
//        return msg

//     })

//     console.log(racaPoodle)


// Exercícios de escrita de código 2.
//a)
const produtos = [
    { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
    { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
    { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
    { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
    { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
    { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
    { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
    { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
    { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
    { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
 ]

//  const listaNomes = produtos.map((item, index, array) => {
//          return item.nome
    
//      })
//     console.log(listaNomes)    


//b)
// const listaNomes = produtos.map((item,) => {
//          const objeto = {nome: item.nome, preco: item.preco * 0.95 }   
//         return objeto
//          })
// console.log(listaNomes)
//c)

// const bebidas = produtos.filter((item) => {
//     return (item.categoria == "Bebidas")
// })
// console.log(bebidas)

//d)

const ype = produtos.filter((item) => {
    if(item.nome.includes("Ypê")){
        return (ype)
    }


})
