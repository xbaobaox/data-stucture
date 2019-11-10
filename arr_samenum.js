var arr1 = [1, 2312, 1, 33, 44, 12, 2];
var arr2 = [1, 2, 78, 23, 2, 23];
function sameNum(arr1, arr2) {
  var newArr = [];
  for (var i = 0; i < arr1.length; ++i){
    for (var j = 0; j < arr2.length; ++j){
      if (arr1[i] == arr2[j]) {
        newArr.push(arr1[i]);
        break;
      }
    }
  }
  return newArr;
}
var result = sameNum(arr1, arr2)
console.log(result);

// indexOf

