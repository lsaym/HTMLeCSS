
// também posso criar um array dos elementos
// também posso alterar todos os elementos usando a estrutura MAP
const dc1=document.getElementById("c1") 
const dc2=document.getElementById("c2") 
const dc3=document.getElementById("c3") 
const dc4=document.getElementById("c4") 
const dc5=document.getElementById("c5") 
const dc6=document.getElementById("c6") 

const arrayElement = [dc1,dc2,dc3,dc4,dc5,dc6 ]

arrayElement.map((e)=>{
    e.innerHTML="conteúdo alterado com o MAP"
    console.log(e)
})

const colecaoHTML=document.getElementsByTagName("div")
console.log(arrayElement)
console.log(colecaoHTML)