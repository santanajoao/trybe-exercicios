// Caso algum dos valores inseridos nos inputs pela pessoa usuária estejam em
// branco, lance um erro.
const checkEmpty = (a, b) => {
  if (a.trim() === '' || b.trim() === '') {
    throw new Error('Campo vazio! Insira os valores para somar.');
  }
}

// Caso os valores inseridos nos inputs pela pessoa usuária não sejam números,
// lance um erro. Você pode fazer essa verificação utilizando a função isNan().
const isNumber = (value) => {
  if (isNaN(value)) {
    throw new Error('Valores inválidos! Insira valores numéricos para somar.');
  }
}

const sum = () => {
  try {
    const term1 = document.querySelector('#first-value-input').value;
    const term2 = document.querySelector('#second-value-input').value;
    const sum = Number(term1) + Number(term2);
    checkEmpty(term1, term2);
    isNumber(sum);
    document.querySelector('#sum-result-p').innerHTML = `Resultado: ${sum}`;
  } catch (error) {
    // Adicione o texto dos erros no parágrafo com id result, para que a pessoa
    // usuária saiba o que aconteceu. Lembre-se de usar erros descritivos!
    document.querySelector('#sum-result-p').innerHTML = error.message;
  } finally {
    // Utilize o finally para apagar os valores dos inputs ao final do bloco
    // try/catch.
    document.querySelector('#first-value-input').value = '';
    document.querySelector('#second-value-input').value = '';
  }
}

window.onload = () => {
  const button = document.querySelector('#sum-button');
  button.addEventListener('click', sum);
}
