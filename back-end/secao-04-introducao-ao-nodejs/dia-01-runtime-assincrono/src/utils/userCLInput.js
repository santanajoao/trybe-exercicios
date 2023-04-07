const readline = require('readline-sync');

function questionFloatWithComma(
  inputMessage,
  errorMessage = 'Invalid number, try again.',
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

module.exports = { questionFloatWithComma };
