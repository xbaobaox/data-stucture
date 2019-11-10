var arr = [6,7,8]

function secMax(arr) {
  if (arr.length <= 0) {
    return NaN;
  }
  var max = arr[0];
  var sec = arr[0];
  for (var i = 0; i < arr.length; ++i) {
    if (arr[i] > max) {
      sec = max;
      max = arr[i]

    } else if (arr[i] > sec) {
      sec = arr[i]
    }
  }
  return sec
}
var secMax = secMax(arr);
console.log(secMax);