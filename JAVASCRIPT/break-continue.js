let n=0
let max=1000
let pares=0

while(n<max){
    console.log("loop infinito " + n )
    if(n>=10) {
        break // para a execução do programa, assim que a condição for verdadeira.
    }
    n++
}
console.log("fim do programa 1")

for(let i=n;i<max;i++){
    if(i%2!=0){
        continue
    }
    pares++
}
console.log("quantidade de pares: "+ pares)
console.log("fim do programa 2")
