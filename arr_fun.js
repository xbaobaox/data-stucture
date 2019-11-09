var arr = [1, 2312, 1, 33, 44, 12, 2]

/* 1.计算一个数组中数字的总和 */
function add(arr) {
  var count = 0
  for (var i = 0; i <= arr.length - 1; i++) {
    count += arr[i];
  }
  return count;
}
var resultAdd = add(arr);
console.log(resultAdd)

/* 2.找出数组中最大的数、最小的数 */
function max(n) {
  var num = arr[0];
  for (var i = 1; i <= arr.length - 1; i++) {
    if (num > arr[i]) {
      num = arr[i];
    }
  }
  return num;
}
var resultMax = max(arr);
console.log(resultMax);

function min(n) {
  var num = arr[0];
  for (var i = 1; i <= arr.length - 1; i++) {
    if (num < arr[i]) {
      num = arr[i];
    }
  }
  return num;
}
var resultMin = min(arr);
console.log(resultMin);

/* 3.找出数组中第二大的数、第二小的数 */
function secMax(n) {
  for (var i = 0; i <= arr.length - 1; i++){
    
  }
}