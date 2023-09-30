

addEventListener("scroll",()=>{
    const arvore = document.getElementById("arvore")
    const chao = document.getElementById("chao")

    arvore.style.backgroundPositionX = .1 + (scrollY / 5)  + "px"
    chao.style.backgroundPositionX = .1 + (scrollY / 5)   + "px"
})