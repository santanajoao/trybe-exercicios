/* Utilize if/else para escrever um programa que se inicie com o
custo de um produto e seu valor de venda e calcule quanto de lucro
a empresa terá ao vender mil desses produtos.*/
const originalPrice = 200;
const resalePrice = 300;
const totalSold = 1000;

// sobre o custo do produto, incide um imposto de 20%
const taxPercentage = 0.2;
const tax = originalPrice * taxPercentage;
const profit = (resalePrice - originalPrice - tax) * totalSold;

const validPrices = originalPrice > 0 && resalePrice > 0;

if (validPrices) {
  console.log(profit);
} else {
  /* emitir uma mensagem de erro e encerrar caso algum dos seus
  valores de entrada seja menor que zero. */
  console.log('Invalid values.')
}
