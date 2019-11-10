function binarySearch(arr, target) {
  var left = 0;
  var right = arr.length - 1;
  let count = 0;
  while (left <= right) {
    count++
    var mid = Math.ceil((left + right) / 2)
    if (target === arr[mid]) {
      console.log(count);
      return mid
    } else if (target > arr[mid]) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  };
  console.log(count);
  return -1
}
var a = binarySearch([1, 3, 5, 7, 9, 15, 23, 56, 788, 1356], 1)
console.log(a);

