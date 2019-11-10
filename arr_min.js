var arr = [1, 2312, 1, 33, 44, 12, 2]

function min(arr) {
  var num = arr[0];
  for (var i = 0; i < arr.length; ++i) {
    if (num > arr[i]) {
      num = arr[i];
    }
  }
  return num;
}
var resultMin = min(arr);
console.log(resultMin);