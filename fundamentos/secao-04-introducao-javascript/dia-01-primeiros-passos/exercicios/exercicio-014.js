const originalPrice = 200;
const resalePrice = 300;
const totalSold = 1000;

const taxPercentage = 0.2;
const tax = originalPrice * taxPercentage;
const profit = (resalePrice - originalPrice - tax) * totalSold;

const validPrices = originalPrice > 0 && resalePrice > 0;

if (validPrices) {
  console.log(profit);
} else {
  console.log('Invalid values.')
}
