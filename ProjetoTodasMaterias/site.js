const ai = document.getElementById("ai");

ai.addEventListener("click", mostrarai);

function mostrarai (){
carregarPagina("AutomacaoIndustrial/ai.html")
}

function carregarPagina(url) {
    document.getElementById("conteudoFrame").src = url;
}

const bd = document.getElementById("bd");

bd.addEventListener("click", mostrarbd);

function mostrarbd (){
    carregarPagina("BancoDeDados/bd.html")
}

function carregarPagina(url) {
    document.getElementById("conteudoFrame").src = url;
}

const dw = document.getElementById("dw");

dw.addEventListener("click", mostrardw);

function mostrardw(){
    carregarPagina("DesenvolvimetoWeb/dw.html")
}

function carregarPagina(url) {
    document.getElementById("conteudoFrame").src = url;
}

