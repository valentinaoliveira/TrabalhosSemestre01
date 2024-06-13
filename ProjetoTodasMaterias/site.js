const ai = document.getElementById("ai");
const bd = document.getElementById("bd");
const dw = document.getElementById("dw");

ai.addEventListener("click", function() {
    carregarPagina("AutomacaoIndustrial/ai.html");
});

bd.addEventListener("click", function() {
    carregarPagina("BancoDeDados/bd.html");
});

dw.addEventListener("click", function() {
    carregarPagina("DesenvolvimetoWeb/dw.html");
});

function carregarPagina(url) {
    document.getElementById("conteudoFrame").src = url;
}
