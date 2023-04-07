const readline = require('readline-sync');

function questionFloatWithComma(
  inputMessage,
  errorMessage = 'Invalid number. Try again',
) {
  const input = readline.question(inputMessage);
  const floatInput = parseFloat(input.replace(',', '.'));

  // Ask again until a valid input is given
  if (Number.isNaN(floatInput)) {
    console.log(errorMessage);
    return questionFloatWithComma(inputMessage, errorMessage);
  }

  return floatInput;
}

function questionInt(inputMessage, min) {
  const input = readline.questionInt(inputMessage);
  if (input < min) {
    console.log(`Invalid number. Minimum: ${min}`);
    return questionInt(inputMessage, min);
  }

  return input;
}

module.exports = { questionFloatWithComma, questionInt };
