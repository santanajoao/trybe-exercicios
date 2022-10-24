const expression = '3 + 5 = x';

const validLength = (expressionParts) => {
  if (expressionParts.length != 5) {
    throw new Error('Expressão inválida! Garanta que a expressão é formada por '
    + '5 partes: (número, operação, número) e (igual, resultado).');
  }
};

const hasEqual = (expressionParts) => {
  if (!expressionParts.includes('=')) {
    throw new Error('Expressão inválida! Sinal de igualdade "=" não'
    + ' encontrado.');
  }
};

const hasOperator = (expressionParts) => {
  const validOperations = ['+', '-', '*', '/'];
  for (const operation of validOperations) {
    if (expressionParts.includes(operation)) {
      return undefined;
    }
  }
  throw new Error('Expressão inválida! Operações válidas não encontradas '
  + '(+, -, *, /');
};

const checkVality = (expressionParts) => {
  validLength(expressionParts); 
  hasEqual(expressionParts);
  hasOperator(expressionParts);
}

const evaluate = (expression) => {
  try {
    const sections = expression.split(' ');
    checkVality(sections);
  } catch (error) {
    console.log(error.message);
  }
};

evaluate(expression);
