function count(n) {
  var count = 0;
  for (var i = 0; i <= n; i++) {
    if (i % 7 == 0) {
      count++;
    }
  }
  return count;
}
var result = count(1258);
console.log(result);