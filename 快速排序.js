var arr = [12, 27, 22, 894, 235, 923, 23,23,734, 823, 62, 74, 278, 956, 276, 74, 7, 8];
function quickSort(arr) {
  if (arr <= 1) { return arr };
  var midIndex = Math.floor(arr.length / 2);
  var mid = arr.splice(midIndex, 1)[0];
  var left = [];
  var right = [];
  for (var i = 0; i < arr.length; ++i){
    if (mid > arr[i]) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }
  return quickSort(left).concat([mid], quickSort(right));
}
var result = quickSort(arr);
console.log(result);