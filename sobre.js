
// Seleciona o botão que tem o id "botao-tema" e guarda na variável botaoTema
const botaoTema = document.getElementById('botao-tema');

// Seleciona o body inteiro do site para poder alterar o fundo e textos
const body = document.body;

// Cria um evento que escuta quando o botão é clicado
botaoTema.addEventListener('click', function () {

    // Alterna a classe "modo-escuro" no body
    // Se já tiver, ele tira. Se não tiver, ele coloca.
    body.classList.toggle('modo-escuro');

    // Verifica se a classe "modo-escuro" está aplicada no body
    if (body.classList.contains('modo-escuro')) {
        // Se estiver no modo escuro, muda o texto do botão pra "Modo Claro"
        botaoTema.innerText = 'Modo Claro';
    } else {
        // Se não estiver, muda o texto pra "Modo Escuro"
        botaoTema.innerText = 'Modo Escuro';
    }
});

// Seleciona todos os elementos com a classe 'evento'
const eventos = document.querySelectorAll('.evento');

// Função que verifica se o elemento está visível na tela
function verificarVisibilidade() {
    eventos.forEach(evento => {
        const rect = evento.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
            evento.classList.add('mostrar'); // Adiciona a classe que faz aparecer
        } else {
            evento.classList.remove('mostrar'); // Remove se sair da tela 
        }
    });
}

// Executa a função sempre que rolar a página
window.addEventListener('scroll', verificarVisibilidade);

// Executa uma vez ao carregar a página
verificarVisibilidade();
