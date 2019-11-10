var arr = [5, 2312, 1, 33, 44, 12, 2]

function secMin(arr) {
  if (arr.length <= 0) {
    return NaN;
  }
  var min = arr[0];
  var sec = arr[0];
  for (var i = 0; i < arr.length; ++i) {
    if (arr[i] < min) {
      sec = min
      min = arr[i]
    } else if (arr[i] < sec) {
      sec = arr[i]
    }
  }
  return sec
}
var secMin = secMin(arr);
console.log(secMin);