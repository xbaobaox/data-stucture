var arr = [1, 2312, 1, 33, 44, 12, 2]

/* 1.计算一个数组中数字的总和 */
function add(arr) {
  var count = 0
  for (var i = 0; i < arr.length; ++i) {
    count += arr[i];
  }
  return count;
}
var resultAdd = add(arr);
console.log(resultAdd)

/* 2.找出数组中最大的数、最小的数 */
function max(arr) {
  var num = arr[0];
  for (var i = 0; i < arr.length; ++i) {
    if (num < arr[i]) {
      num = arr[i];
    }
  }
  return num;
}
var resultMax = max(arr);
console.log(resultMax);

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

/* 3.找出数组中第二大的数、第二小的数 */
function secMax(arr) {
  if (arr.length <= 0) {
    return NaN;
  }
  var max = arr[0];
  var sec = arr[0];
  for (var i = 0; i < arr.length; ++i) {
    if (arr[i] > max) {
      sec = max
      max = arr[i]

    } else if (arr[i] > sec) {
      sec = arr[i]
    }
  }
}
/* 4.找出最大的偶数 */
function evenMax(arr) {
  var num = arr[0];
  for (var i = 0; i <= arr.length; ++i) {
    if (num < arr[i] && arr[i] % 2 == 0) {
      num = arr[i];
    }
  }
  return num;
}
var resultEven = evenMax(arr);
console.log(resultEven);