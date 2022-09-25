// const jogador1={nome:"lucas",energia:100,vidas:3,magia:150}
// const jogador2={nome:"bruna",energia:100,vidas:5,velocidade:80}
// const jogador3={jogador1,jogador2}


// console.log(jogador1)
// console.log(jogador2)
// console.log(jogador3)

const jogador1={nome:"lucas",energia:100,vidas:3,magia:150}
const jogador2={nome:"bruna",energia:100,vidas:5,velocidade:80}
const jogador3={...jogador1,...jogador2}



console.log(jogador3)

