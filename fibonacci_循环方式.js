function fibonacci(n) {
  if (n <= 2) {
    return 1;
  }
  var fn1 = 1;
  var fn2 = 1;
  var arr=[1,1]
  for (var i = 3; i <= n; ++i){
    fn = fn1 + fn2;
    arr.push(fn);
    fn1 = fn2;
    fn2 = fn;
  }
  return arr;
}
console.log(fibonacci(7))
