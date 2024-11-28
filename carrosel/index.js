var setadireita = window.document.getElementById("setadireita")
var leonardo = window.document.getElementById("leonardo")
var bruna = window.document.getElementById("bruna")
var samantha = window.document.getElementById("samantha")
var setaesquerda = window.document.getElementById("setaesquerda")
function DeslizarParaDireita() {
    leonardo.style = "display:none;"
    bruna.style = "display:flex;"
    setadireita.style = "display:none;"
    setaesquerda.style = "display:flex; ,margin-top:50px;"
}

function DeslizarParaEsquerda() {
    leonardo.style = "display:flex;"
    bruna.style = "display:none;"
    setaesquerda.style = "display:none;"
    setadireita.style = "display:flex; margin-top:50px;"
}