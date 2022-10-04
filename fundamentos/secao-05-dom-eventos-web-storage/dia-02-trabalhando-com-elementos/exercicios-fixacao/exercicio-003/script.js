// Remova todos os elementos filhos de paiDoPai exceto pai elementoOndeVoceEsta e primeiroFilhoDoFilho.

const pai = document.getElementById('pai');
const filhosDePai = pai.children;
const sgndFlhoDoFlho = document.getElementById('segundoEUltimoFilhoDoFilho')

for (let index = filhosDePai.length - 1; index >= 0; index -= 1) {
  const filho = filhosDePai[index];
  if (filho.id !== 'elementoOndeVoceEsta') {
    filho.remove();
  }
}

sgndFlhoDoFlho.remove();