function sub(n) {
  var sevenInt = 0;
  var threeInt = 0;
  for (var i = 0; i <= n; i++) {
    if (i % 7 == 0) {
      sevenInt += i;
    }
    if (i % 3 == 0) {
      threeInt += i;
    }
  }
  return threeInt - sevenInt;
}
var result = sub(100);
console.log(result);