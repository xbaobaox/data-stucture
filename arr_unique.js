var arr = [1, 2, 78, 23, 2, 23]
function unique(arr) {
  for (var i = 0; i < arr.length; ++i) {
    for (var j = i+1; j < arr.length; j++) {
      if (arr[i] === arr[j]) {
        arr.splice(j, 1)
      }
    }
  }
  return arr;
}
var result = unique(arr);
console.log(result);

// indexOf