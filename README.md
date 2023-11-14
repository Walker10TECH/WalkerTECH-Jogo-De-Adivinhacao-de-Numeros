# WalkerTECH-Jogo-De-Adivinhacao-de-Numeros #ImersãoDEVAlura
Jogo de Adivinhação de Números Objetivo do Jogo: O jogo desafia os jogadores a adivinharem um número aleatório de 1 a 1000 em até 5 tentativas.

HTML:
<input type="number" id="guess" placeholder="Seu palpite">: Cria um campo de entrada para o jogador inserir seu palpite.
<button onclick="checkGuess()">Adivinhar</button>: Um botão que chama a função checkGuess() quando clicado.
<p id="message"></p>: Elemento onde mensagens são exibidas para o jogador, como feedback sobre seus palpites e mensagens de vitória ou derrota.

CSS:
Estilos de fundo e layout: Define a aparência da página, incluindo a imagem de fundo, cores, bordas e posicionamento dos elementos na tela.
Estilos para campos de entrada e botão: Define a aparência dos campos de entrada e do botão de adivinhação.

JavaScript:
function checkGuess(): Função que é chamada quando o botão de adivinhação é clicado.
Math.floor(Math.random() * 1000) + 1: Gera um número aleatório de 1 a 1000 para o jogador adivinhar.

Variáveis:
randomNumber: Armazena o número aleatório gerado.
guess: Obtém o valor inserido pelo jogador no campo de entrada.
attempts: Controla o número de tentativas restantes do jogador.

Condições:
Verifica se o palpite do jogador é igual ao número gerado. Se sim, exibe uma mensagem de vitória.
Se o palpite estiver errado, diminui o número de tentativas e fornece dicas sobre se o número correto é maior ou menor.
Quando as tentativas se esgotam, mostra o número correto e desabilita o campo de entrada.

Funcionalidades Adicionais:

Feedback ao Jogador: Fornece pistas sobre se o número correto é maior ou menor.
Limite de Tentativas: Limita o jogador a 5 tentativas antes de revelar o número correto.
Finalização do Jogo: Encerra o jogo e mostra o número correto caso o jogador não acerte dentro das tentativas permitidas.
