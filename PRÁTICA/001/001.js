const caixa1 = document.querySelector("#caixa1")
const caixa2 = document.querySelector("#cx2")
const btn = document.querySelector("#btn-transferir")
const todosCursos = [...document.querySelectorAll(".curso")]
const rmv = document.querySelector("#remover")






todosCursos.map((el) => {
    el.addEventListener("click", (evt) => {
        const curso = evt.target
        curso.classList.toggle("selecionar")
    })
})






btn.addEventListener("click", () => {
    const cursosSelecionados = [...document.querySelectorAll(".selecionar")]
    const cursosNaoSelecionados = [...document.querySelectorAll(".curso:not(.selecionar)")]
    cursosSelecionados.map((el) => {
        caixa2.appendChild(el)
    })
    cursosNaoSelecionados.map((el) => {
        caixa1.appendChild(el)
    })

})






rmv.addEventListener("click", () => {
    const cursosSelecionados = [...document.querySelectorAll(".selecionar")]

    cursosSelecionados.map((el) => {
        caixa1.appendChild(el)
    })

})

