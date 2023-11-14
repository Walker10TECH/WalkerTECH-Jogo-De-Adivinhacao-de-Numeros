let attempts = 5;

function checkGuess() {
  const randomNumber = Math.floor(Math.random() * 1000) + 1; // Gera número aleatório de 1 a 1000
  const guess = parseInt(document.getElementById('guess').value);
  const messageElement = document.getElementById('message');
  const numberElement = document.createElement('span');

  if (guess === randomNumber) {
    messageElement.innerText = 'Parabéns! Você acertou!';
  } else {
    attempts--;
    if (attempts > 0) {
      if (guess > randomNumber) {
        messageElement.innerText = `Tente um número menor! Tentativas restantes: ${attempts}`;
      } else {
        messageElement.innerText = `Tente um número maior! Tentativas restantes: ${attempts}`;
      }
      if (attempts === 0) {
        numberElement.innerText = `Suas chances acabaram. O número correto era: ${randomNumber}`;
        messageElement.appendChild(numberElement);
        document.getElementById('guess').disabled = true;
      }
    }
  }
}
