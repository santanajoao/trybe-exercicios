function printFirstNFibonnaciNumers(quantity) {
  let current = 0;
  let next = 1;
  for (count = 0; count < quantity; count += 1) {
    console.log(current, next);
    [current, next] = [next, current + next];
  }
}

printFirstNFibonnaciNumers(100);
