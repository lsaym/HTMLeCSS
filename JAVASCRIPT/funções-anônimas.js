 const f=function(v1,v2){
    return v1+v2

}
console.log(f(10,5))


//usando spread

const t=function(...valores){
    let res=0
    for(v of valores){
        res+=v
    }
    return res
    
}

console.log(t(20,20))

// Função Contrutor anônima

const g= new Function ("v1","v2", "return v1+v2") // tudo com aspas dentro do parenteses e o Function tem que ter o F maiúsculo, como se usasse camelcase
console.log(g(6,6))