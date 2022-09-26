
function retornoUm(){
let n1=10
let n2=2
let result=n1*n2
return result // retorna oq selecionar ao lado do return
}
console.log(retornoUm())
// outro exemplo
function retornoDois(){
    let n1=10
    let n2=2
    let res=n1*n2
    if(res%2==0){
        return "par"
    }else{
        return "impar"
    }
    }
    console.log(retornoDois())
    //APENAS UM RETURN PODE SER EXIBIDO, NUNCA SERÁ EXECUTADO DOIS RETURN NA MESMA FUNÇÃO POIS ELE ENCERRA A FUNÇÃO NO PRIMEIRO RETURN.