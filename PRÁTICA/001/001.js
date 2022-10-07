const caixa1 = document.querySelector("#caixa1")
const caixa2 = document.querySelector("#cx2")
const btn = document.querySelector("#btn-copiar")
const todosCursos = [...document.querySelectorAll(".curso")]

todosCursos.map((el) => {
    el.addEventListener("click", (evt) => {
        const curso = evt.target
        curso.classList.toggle("selecionar")
    })
})


btn.addEventListener("click", () => {
    const cursosSelecionados = [...document.querySelectorAll(".selecionar")]
    cursosSelecionados.map((el) => {
        caixa2.appendChild(el)
    })

})