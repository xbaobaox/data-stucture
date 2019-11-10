function fibonacci(n) {
  if (n <= 2) {
    return 1;
  }
  var count = 0;
  for (var i = 0; i < n; ++i) {
    count = i + i-i;
  
  }
  return count;
}
console.log(fibonacci(5))

/* i <= 1 ? 1 : fibonacci(i - 1) + fibonacci(i - 2); */
