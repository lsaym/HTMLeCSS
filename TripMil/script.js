const imgs = document.getElementById("img");
const img = document.querySelectorAll("#img img");
let idx = 0;
function carrossel(){
    idx++;

    if(idx > img.length -1){
        idx = 0;
    }
    imgs.style.transform = `translateX(${-idx * 500}px)`;
}
setInterval(carrossel, 2500);

function onClickMenu(){
    document.getElementById("menu").classList.toggle("change")
    document.getElementById("nav").classList.toggle("change")
    document.getElementById("menu-bg").classList.toggle("change-bg")// Atenção ao -bg no change pra alteração quando a função for solicitada com o click
}