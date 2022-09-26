//sintaxe
function nome(){ /*declaração*/
    console.log("saymon")

}
nome() /*chamada da função*/
//exemplo em loop
for(let i=0;i<10;i++){
    nome()
} 
// outro exemplo
function soma2_10(){
    let n1=2
    let n2=10
    let soma=n1+n2
    console.log(soma)
}
soma2_10()
// em loop
for (let i=0;i<10;i++){
    soma2_10()
}
// outro exmplo, alterando texto com botão
function mudarTexto(){
    let d1=document.getElementById("d1")
    let d2=document.getElementById("d2")
    let d3=document.getElementById("d3")


    d1.innerHTML="Alteração de texto com innerHTML dentro da função"
    d2.innerHTML="Alteração de texto com innerHTML dentro da função"
    d3.innerHTML="Alteração de texto com innerHTML dentro da função"
}
