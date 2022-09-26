function soma(...valores){ /*os três pontinhos são sim os spreads*/
    let tam=valores.length
    let res=0
    for(let i=0;i<tam;i++){
        res+=valores[i]
    }
    return res
}
console.log(soma(10,5))


// usando FOR OF simplifica 



function soma(...valores){
    let res=0
    for(let v of valores){
        res+=v
    }
    return res
}
console.log(soma(10,10,5,5))