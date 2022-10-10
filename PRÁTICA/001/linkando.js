const btn = document.querySelector("#send") //seleciona o botão de enviar "submit"


btn.addEventListener("click", function (e) { //cria uma função de click para o submit

    e.preventDefault() // impede o envio antes de por o nome

    const name = document.querySelector('#iname') // name recebe o valor do input com o id=iname

    const value = name.value // a variavel value recebe o valor de name

    console.log(value) //exibe o valor de value
})