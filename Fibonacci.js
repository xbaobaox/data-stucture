function fuck(fuck) {
  var arr = [];
  for (var i = 0; i < fuck; ++i) {
    function fibonacci(i) {
      return i <= 1 ? 1 : fibonacci(i - 1) + fibonacci(i - 2)
    }
    arr.push(fibonacci(i));
  }
  console.log(arr);
}
fuck(3);



