const ai = document.getElementById("ai");
const bd = document.getElementById("bd");
const dw = document.getElementById("dw");
const lp = document.getElementById("lp");
const cd = document.getElementById("cd");


ai.addEventListener("click", function() {
    carregarPagina("AutomacaoIndustrial/ai.html");
});

bd.addEventListener("click", function() {
    carregarPagina("BancoDeDados/bd.html");
});

dw.addEventListener("click", function() {
    carregarPagina("DesenvolvimetoWeb/dw.html");
});

lp.addEventListener("click", function() {
    carregarPagina("LinguagemDeProgramacao/lp.html");
});

cd.addEventListener("click", function() {
    carregarPagina("CienciaDeDados/cd.html");
});

function carregarPagina(url) {
    document.getElementById("conteudoFrame").src = url;
}
