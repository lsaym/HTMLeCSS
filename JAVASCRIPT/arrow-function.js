// const soma=function(v1,v2){
//     return v1+v2
// }
// acima vemos uma função anônima comum
const soma=(v1,v2)=>{return v1+v2}
console.log(soma(10,15))
// quando temos apenas um parâmetro para entrada na função, não necessita de paênteses. exemplo:
const numero=n=>{return n}
console.log(numero(2))
// também podemos fazer sem o return, e a sintaxe também fica mais simples. exemplo:
const add=n=>n+10
console.log(add(10))
//porém só funciona para operações muito simples