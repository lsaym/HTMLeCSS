function teste(p1){
    console.log(p1)
}
teste("saymon")



// outro exmeplo



function soma(n1,n2){
    console.log(n1+n2)
}
soma(10,5)

// outro exemplo
 function soma2(n1=0,n2=0){
   return n1+n2 // oq for retornar sempre ao lado do return
    
 }
 console.log(soma2(10,5))

 //abaixo, a forma mais didática da função a cima.
 
//  function soma2(n1=0,n2=0){
//     let res
//     res=n1+n2
//     return res
//  }

//  let res_soma=soma2(10,5)
//  console.log(res_soma)
 