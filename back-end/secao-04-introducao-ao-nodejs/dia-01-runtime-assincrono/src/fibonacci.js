const { questionInt } = require('./utils/userCLInput');

function printFirstNFibonnaciNumers(quantity) {
  let current = 0;
  let next = 1;
  for (count = 0; count < quantity; count += 1) {
    [current, next] = [next, current + next];
    console.log(current);
  }
}

function main() {
  const minValue = 1;
  const quantity = questionInt(
    'Exibir quantos números da sequência? ',
    minValue,
  );

  printFirstNFibonnaciNumers(quantity);
}

main();
