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

const inss = document.getElementById("inss");

inss.addEventListener("click", mostrarinss);

function mostrarinss(){
    carregarPagina("inss/inss.html")
}

function carregarPagina(url) {
    document.getElementById("conteudoFrame").src = url;
}