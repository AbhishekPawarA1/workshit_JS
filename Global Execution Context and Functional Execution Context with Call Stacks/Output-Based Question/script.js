function factorial(n) {
  
  if (n === 0 || n === 1) {
    return 1;
  }
  return n * factorial(n - 1);
}

const numbers = [0, 1, 2, 3, 4, 5];
numbers.forEach((num) => {
  console.log(`Factorial of ${num}: ${factorial(num)}`);
});
