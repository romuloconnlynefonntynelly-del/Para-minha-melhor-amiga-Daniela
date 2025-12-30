// ===============================
// LISTA DE NOMES PERMITIDOS
// ===============================

// Este array guarda os nomes que podem acessar a carta.
// Se o nome digitado estiver aqui, a pessoa entra.
// Se não estiver, o acesso é negado.
const nomesPermitidos = ["adonai001"];
// Obs: pode adicionar mais nomes dentro das aspas, separados por vírgula



// ===============================
// TEXTO DA CARTA
// ===============================

// Aqui está todo o texto da carta.
// Ele fica entre crases (` `), o que permite várias linhas.
const carta = `

Minha melhor amiga Daniela,

Confesso que, no começo, quando te conheci, não fui muito com a sua cara — e nem sei explicar o porquê. Não houve motivo algum. Mas o tempo, com

sua delicadeza, me mostrou quem você realmente é. À medida que fui te conhecendo, percebi a mulher incrível que você é: uma pessoa boa, atenciosa,

engraçada, com esse seu jeito único, às vezes estranho, mas sempre verdadeiro e leve.

Você se tornou uma das pouquíssimas pessoas para quem eu consegui me abrir de verdade. E acredite, não são muitas. Talvez quatro, no máximo. 

Você foi uma das primeiras. E mais do que isso: eu te considero minha melhor amiga. Um título que nunca dei a ninguém antes. Para mim, você é 

uma irmã — não de sangue, mas de coração. Daquelas que a vida coloca no nosso caminho por um motivo.

Eu sei que este ano foi muito intenso para você. Aconteceram muitas coisas, houve perdas, dores e mudanças. Mesmo assim, quero que você saiba 

o quanto eu admiro a mulher que você é. Seja forte. Enfrente tudo de cabeça erguida. Lute por algo melhor para você. Eu tenho certeza de que a 

mulher que eu conheço — a mulher que admiro e respeito — ainda vai conquistar grandes coisas.

Você é trabalhadora, determinada e esforçada. Você luta pelos seus objetivos e prefere conquistar com o próprio esforço aquilo que é seu. Você 

sonha com a sua casa, o seu lar, o seu canto, o seu espaço no mundo. E eu acredito, de verdade, que você vai alcançar tudo isso. Talvez eu não 

te conheça em cada detalhe, mas conheço o suficiente para saber que você é persistente e não desiste fácil.

Você tem muitos pontos fortes. É engraçada, sabe cozinhar bem, desenha lindamente — seus desenhos são incríveis. Você é talentosa, criativa e 

sensível. Tudo isso faz de você uma pessoa especial. E o homem que um dia tiver o seu coração será um homem de muita sorte. Seja ele quem for. 

Porque ele terá ao lado uma mulher incrível: parceira, trabalhadora, que apoia, incentiva, caminha junto e fortalece. Uma mulher que soma.

Eu sei que algumas coisas não deram certo — entre você e o meu irmão, entre situações da vida — e que, por causa disso, você acabou se afastando. 

Mas acredito que, às vezes, o afastamento também é necessário. Talvez esse seja um tempo para você se reencontrar com a sua família, com a sua 

origem e, principalmente, consigo mesma.

O meu desejo sincero é que você se encontre. Que você se encontre com o Senhor, com o nosso Deus. Que Ele te guie, te fortaleça e te ajude a 

encontrar um propósito e um objetivo de vida que te tragam paz, direção e sentido. Eu sei que, às vezes, a gente se afasta — eu também me afasto. 

Não te julgo. Mas quando colocamos Deus em primeiro lugar, os caminhos se alinham e a força vem de onde a gente nem imagina.

Eu te desejo tudo de bom, minha amiga. Tudo de bom mesmo. Que você encontre a felicidade, que alcance tudo aquilo que almeja e conquiste tudo o 

que merece — inclusive a sua casinha, o seu lar, o seu espaço. Porque você merece. Você é uma boa pessoa. De verdade.

Quero que você saiba também que você foi uma das pouquíssimas pessoas para quem eu me abri verdadeiramente sobre a vida, sobre sonhos, medos e 

objetivos. Você conhece partes de mim que quase ninguém conhece. Na verdade, você é a segunda pessoa com quem eu consegui ser totalmente sincero 

— você e sua irmã. E isso, para mim, significa muito.

E mesmo que, no futuro, o caminho entre você e eu não siga como imaginamos, eu te desejo a felicidade. De todo o meu coração. Eu não sei se 

seremos amigos para sempre, mas sei que você sempre terá uma parte de mim. Porque eu te considero como uma irmã. Uma das melhores amigas que já 

tive.

Desejo que você encontre alguém digno de você. Alguém que te dê carinho, amor e cuidado. Alguém que esteja ao seu lado nos dias ruins e nos dias 

bons, que te traga alegria, segurança e em quem você possa confiar plenamente.

Que você seja feliz. Verdadeiramente feliz.

Conte comigo. Sempre.

Com carinho, respeito e admiração,

Rômulo — para dani
`;



// ===============================
// FUNÇÃO NORMALIZAR TEXTO
// ===============================

// Esta função serve para:
// - transformar tudo em letra minúscula
// - remover acentos
// Isso evita erro se a pessoa digitar "Thaís", "thais" ou "THAÍS"
function normalizar(texto) {
  return texto
    .toLowerCase() // transforma tudo em minúsculo
    .normalize("NFD") // separa letras dos acentos
    .replace(/[\u0300-\u036f]/g, ""); // remove os acentos
}



// ===============================
// FUNÇÃO DE VERIFICAÇÃO DO NOME
// ===============================

// Essa função roda quando a pessoa tenta entrar
function verificarNome() {

  // Pega o campo de input onde o nome foi digitado
  const input = document.getElementById("nameInput");

  // Pega a mensagem de erro
  const erro = document.getElementById("errorMsg");

  // Normaliza o nome digitado (minúsculo + sem acento)
  const nome = normalizar(input.value);

  // Verifica se o nome está dentro da lista permitida
  if (nomesPermitidos.includes(nome)) {

    // Se o nome for permitido:
    // Esconde a tela de login
    document.getElementById("login").classList.add("hidden");

    // Mostra a tela inicial com a carta fechada
    document.getElementById("initialScreen").classList.remove("hidden");

    // Leva a tela para o topo
    window.scrollTo(0, 0);

  } else {

    // Se o nome NÃO for permitido:
    // Mostra mensagem de erro
    erro.classList.remove("hidden");

    // Bloqueia o input temporariamente
    input.disabled = true;

    // Depois de 1.8 segundos:
    setTimeout(() => {
      erro.classList.add("hidden"); // esconde erro
      input.value = "";            // limpa o campo
      input.disabled = false;      // libera o input
      input.focus();               // foca novamente no campo
    }, 1800);
  }
}



// ===============================
// FUNÇÃO DE DIGITAÇÃO DA CARTA
// ===============================

// Essa função faz o efeito de "texto sendo digitado"
function digitarCarta() {

  // Elemento onde o texto vai aparecer
  const elemento = document.getElementById("typedText");

  // Limpa qualquer texto anterior
  elemento.innerHTML = '';

  // Contador de letras
  let i = 0;
  // Configurações ajustáveis:
  // Tempo entre cada caractere (ms). Reduza para digitação mais rápida.
  const typingDelay = 20; // você pode alterar este valor

  // Intervalo mínimo entre chamadas de scroll (ms) para evitar sobrecarga.
  const scrollInterval = 40;
  let lastScroll = 0;

  // Função interna que escreve letra por letra usando nós.
  // Faz scroll (throttled) para acompanhar as letras enquanto aparecem.
  function escrever() {
    if (i < carta.length) {
      const char = carta.charAt(i);
      let node;

      if (char === '\n') {
        // Insere quebra de linha e uma âncora
        elemento.appendChild(document.createElement('br'));
        const anchor = document.createElement('span');
        anchor.className = 'line-anchor';
        elemento.appendChild(anchor);
        node = anchor;
      } else {
        // Insere caractere como nó de texto
        const span = document.createElement('span');
        span.textContent = char;
        elemento.appendChild(span);
        node = span;
      }

      // Throttled scroll: apenas a cada `scrollInterval` ms
      const now = (typeof performance !== 'undefined' && performance.now) ? performance.now() : Date.now();
      if (now - lastScroll >= scrollInterval) {
        try {
          node.scrollIntoView({ behavior: 'smooth', block: 'end' });
        } catch (e) {
          window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
        }
        lastScroll = now;
      }

      i++;
      setTimeout(escrever, typingDelay);
    } else {
      // Quando terminar a carta, adicionar pausa e depois digitar o poema final
      setTimeout(() => {
        digitarPoemaFinal();
      }, 800); // pausa dramática antes do poema
    }
  }

  escrever();

  // ===============================
  // FUNÇÃO PARA DIGITAR O POEMA FINAL
  // ===============================
  function digitarPoemaFinal() {
    // Adiciona quebras de linha antes do poema para separação
    elemento.appendChild(document.createElement('br'));
    elemento.appendChild(document.createElement('br'));

    // Conteúdo do poema final (sem tags HTML)
    const poemaTexto = `E, se você chegou até aqui…

    Leia esse poema que eu fiz para você.

    Para minha melhor amiga, Daniela

No começo, confesso,
não entendi você.
Sem motivo, sem razão,
a vida apenas cruzou nossos caminhos.
Mas o tempo, sábio e delicado,
me ensinou quem você é.

Você chegou devagar
e ficou.
Com riso fácil, jeito único,
um pouco estranha —
e completamente verdadeira.

Entre tantas pessoas,
foi você quem ouviu meus silêncios,
quem conheceu meus medos,
meus sonhos,
meus lados que quase ninguém vê.
E isso não é pouco.
Isso é confiança.

Hoje eu sei:
você não é só minha amiga.
É irmã de coração,
daquelas que a vida escolhe
e não o sangue.

Eu sei que o ano foi pesado.
Houve perdas, dores, mudanças.
Eu vi você cair,
mas também vi sua força.
Vi uma mulher que luta,
que trabalha,
que insiste em construir com as próprias mãos
o que chama de lar.

Você sonha com a sua casa,
com o seu canto,
com o seu lugar no mundo.
E eu acredito em você.
Porque quem é persistente
sempre chega.

Você tem talentos que o mundo precisa:
o riso que cura,
as mãos que criam,
os desenhos que falam,
o cuidado que acolhe.
E quem um dia caminhar ao seu lado
terá sorte —
muita sorte.

Eu sei que nem tudo deu certo.
Às vezes, a vida afasta
para ensinar,
para reorganizar,
para reencontrar a essência.
Talvez este seja o seu tempo
de voltar para si,
para a família,
para Deus.

Que Ele te guie.
Que te dê paz.
Que te mostre o caminho
quando tudo parecer confuso.

E se um dia nossos caminhos mudarem,
saiba disso:
você sempre terá um pedaço de mim.
Porque amizade de verdade
não depende da distância.

Eu estou aqui.
Como amigo.
Como melhor amigo.
Como irmão.

Para ouvir,
para apoiar,
para caminhar junto
sempre que for possível.

Que você seja feliz.
Que conquiste seus sonhos.
Que encontre paz.

Com amizade sincera,

— Rômulo`;

    let poemaIndex = 0;

    function escreverPoema() {
      if (poemaIndex < poemaTexto.length) {
        const char = poemaTexto.charAt(poemaIndex);
        let node;

        if (char === '\n') {
          elemento.appendChild(document.createElement('br'));
          const anchor = document.createElement('span');
          anchor.className = 'line-anchor';
          elemento.appendChild(anchor);
          node = anchor;
        } else {
          const span = document.createElement('span');
          span.textContent = char;
          elemento.appendChild(span);
          node = span;
        }

        // Throttled scroll: acompanha o poema também
        const now = (typeof performance !== 'undefined' && performance.now) ? performance.now() : Date.now();
        if (now - lastScroll >= scrollInterval) {
          try {
            node.scrollIntoView({ behavior: 'smooth', block: 'end' });
          } catch (e) {
            window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
          }
          lastScroll = now;
        }

        poemaIndex++;
        setTimeout(escreverPoema, typingDelay);
      }
    }

    escreverPoema();
  }
}



// ===============================
// EVENTOS AO CARREGAR A PÁGINA
// ===============================

// Esse bloco roda quando o HTML termina de carregar
document.addEventListener('DOMContentLoaded', function() {

  // ===============================
  // CLIQUE NA CARTA FECHADA
  // ===============================

  const cartaFechada = document.getElementById("cartaFechada");

  if (cartaFechada) {
    cartaFechada.addEventListener("click", () => {

      // Adiciona animação de abertura da carta
      cartaFechada.classList.add("abrir");

      const initialScreen = document.getElementById("initialScreen");

      // Animação de sumir a tela inicial
      initialScreen.classList.add("fadeOut");

      // Depois de 1.2 segundos
      setTimeout(() => {

        // Esconde a carta fechada
        initialScreen.classList.add("hidden");

        // Mostra a carta aberta
        document.getElementById("letter").classList.remove("hidden");

        // Libera o scroll da página
        document.body.style.overflow = 'auto';
        document.body.style.alignItems = 'flex-start';

        // Começa a digitar a carta
        digitarCarta();

        // Rola suavemente para o topo
        setTimeout(() => {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }, 100);

        // Toca a música (se existir)
        const music = document.getElementById("music");
        if (music) {
          music.play().catch(e => console.log("Erro ao reproduzir música:", e));
        }

      }, 1200);
    });
  }



  // ===============================
  // ENTER PARA CONFIRMAR O NOME
  // ===============================

  const input = document.getElementById("nameInput");

  if (input) {
    input.addEventListener('keypress', function(e) {

      // Se apertar Enter
      if (e.key === 'Enter') {
        verificarNome();
      }
    });
  }
});

