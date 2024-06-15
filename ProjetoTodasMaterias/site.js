const sections = [
    { id: "ai", url: "AutomacaoIndustrial/ai.html" },
    { id: "bd", url: "BancoDeDados/bd.html" },
    { id: "dw", url: "DesenvolvimetoWeb/dw.html" },
    { id: "lp", url: "LinguagemDeProgramacao/lp.html" },
    { id: "cd", url: "CienciaDeDados/cd.html" }
];

// Função para carregar página no iframe
function carregarPagina(url) {
    document.getElementById("conteudoFrame").src = url;
}

// Adicionar eventos de clique para cada seção
sections.forEach(section => {
    document.getElementById(section.id).addEventListener("click", () => carregarPagina(section.url));
});

// Função para alternar a exibição do menu
function toggleMenu() {
    const menu = document.getElementById('menu');
    menu.style.display = menu.style.display === 'flex' ? 'none' : 'flex';
}
