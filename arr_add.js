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
