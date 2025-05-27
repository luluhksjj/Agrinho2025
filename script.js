// Alternar tema claro/escuro
const btnTema = document.getElementById('toggle-tema');
const body = document.body;
let temaEscuro = localStorage.getItem('tema') === 'escuro';

function aplicarTema() {
  if (temaEscuro) {
    body.classList.add('escuro');
    btnTema.textContent = 'Modo claro';
  } else {
    body.classList.remove('escuro');
    btnTema.textContent = 'Modo escuro';
  }
}

btnTema.addEventListener('click', () => {
  temaEscuro = !temaEscuro;
  localStorage.setItem('tema', temaEscuro ? 'escuro' : 'claro');
  aplicarTema();
});

aplicarTema();

// Mostrar mensagem interativa
function mostrarMensagem() {
  document.getElementById('mensagem').textContent = "Obrigado por se interessar por um centro melhor!";
}

// Contador de visitas local
const contadorSpan = document.getElementById('contador-visitas');
let visitas = localStorage.getItem('visitas') || 0;
visitas++;
localStorage.setItem('visitas', visitas);
contadorSpan.textContent = visitas;

// Tradução dos textos
const textos = {
  pt: {
    titulo: "Festejando a Conexão Campo-Cidade",
    descricao: "Propostas para transformar o centro de Curitiba...",
    feiras: "Feiras do Campo no Centro",
    verde: "Criação de Parques Urbanos",
    acesso: "Acessibilidade Urbana",
    mapa: "Mapa do Projeto",
    contador: "Visitantes desta página",
    mensagem: "Obrigado por interagir!",
  },
  en: {
    titulo: "Celebrating the Rural-Urban Connection",
    descricao: "Proposals to improve Curitiba’s downtown with rural integration...",
    feiras: "Farmers' Markets Downtown",
    verde: "Creation of Urban Parks",
    acesso: "Urban Accessibility",
    mapa: "Project Map",
    contador: "Visitors on this page",
    mensagem: "Thanks for interacting!",
  },
};

let idiomaAtual = 'pt';

document.getElementById("toggle-idioma").addEventListener("click", () => {
  idiomaAtual = idiomaAtual === 'pt' ? 'en' : 'pt';
  const t = textos[idiomaAtual];
  document.getElementById("titulo-principal").textContent = t.titulo;
  document.getElementById("descricao-principal").textContent = t.descricao;
  document.getElementById("titulo-feiras").textContent = t.feiras;
  document.getElementById("titulo-verde").textContent = t.verde;
  document.getElementById("titulo-acesso").textContent = t.acesso;
  document.getElementById("titulo-mapa").textContent = t.mapa;
  document.getElementById("titulo-contador").textContent = t.contador;
});

// Mensagem interativa
function mostrarMensagem() {
  document.getElementById("mensagem").textContent = textos[idiomaAtual].mensagem;
}

// Alto contraste
document.getElementById("contraste").addEventListener("click", () => {
  document.body.classList.toggle("alto-contraste");
});

// Aumentar/diminuir fonte
let tamanhoFonte = 16;
document.getElementById("aumentarFonte").addEventListener("click", () => {
  tamanhoFonte += 2;
  document.body.style.fontSize = tamanhoFonte + "px";
});
document.getElementById("diminuirFonte").addEventListener("click", () => {
  tamanhoFonte = Math.max(12, tamanhoFonte - 2);
  document.body.style.fontSize = tamanhoFonte + "px";
});

// Atalhos de teclado
document.addEventListener("keydown", (e) => {
  if (e.altKey) {
    switch (e.key) {
      case "1":
        document.getElementById("feiras").scrollIntoView();
        break;
      case "2":
        document.getElementById("verde").scrollIntoView();
        break;
      case "3":
        document.getElementById("acesso").scrollIntoView();
        break;
      case "h":
        window.scrollTo({ top: 0, behavior: "smooth" });
        break;
    }
  }
});


