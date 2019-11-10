var arr = [1, 56, 23, 2, 78, 34];
function order(arr) {
  for (var i = 0; i < arr.length; ++i) {
    for (var j = i + 1; j < arr.length; ++j) {
      if (arr[j] < arr[i]) {
        var temp = arr[j]
        arr[j] = arr[i];
        arr[i] = temp;
      }
    }
  }
  console.log(arr);
}
order(arr);