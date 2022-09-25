let num=[12,20,30,40,50]

for( n in num){
    console.log(n)
}
//são a mesma coisa
// for(let i=0;i<num.length;i++){
//     console.log(num [i])
// } 
// se trocar o [i] pelo i sem as traves ele vai mostrar o cumprimento de memória que está sendo usado, e não as informações nela contidas
// no exemplo de baixo o .length serve para mostrar o cumprimento(posições)
for(n of num){
    console.log(n)
}
// o 'for(--of--) mostra o conteúdo que está dentro da memória alocada, e não o cumprimento(posições).