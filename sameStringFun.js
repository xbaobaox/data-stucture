/* 1. 实现获取两个字符串的相同字符并生成新的字符串
'abcdef' | 'edfghi'  => 'de' */
/* var str1 = "abcdef"; //0,1,2,3,4,5,6
var str2 = "edfghi"; //4,3,5,6,7,8

function sameNum(arr1, arr2) {
  var newArr = [];
  for (var i = 0; i < arr1.length; ++i) {
    for (var j = arr2.length; j >= 0; --j) {
      if (arr1[i] == arr2[j]) {
        newArr.push(arr1[i]);
        break;
      }
    }
  }
  return newArr.join("");
}
var result = sameNum(str1.split(""), str2.split(""));
console.log(result);

function binarySearch(arr, target) {
  var arrStr = [];
  for (var i = 0; i < target.length; ++i) {
    var left = 0;
    var right = target.length - 1;
    while (left <= right) {
      var mid = Math.ceil((left + right) / 2);
      if (target[i] === arr[mid]) {
        arrStr.push(target[i]);
        break;
      } else if (target[i] > arr[mid]) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
  }
  return arrStr.join("");
}
var a = binarySearch(str1.split(""), str2.split(""));
console.log(a); */

/*2. 实现字符串的 indexOf   abcdefghi    efg => 4 */
var str3 = "abcdefghi";
var str4 = "efg";
// function indexOf(data,target){
//   for(var i=0;i<data.length;++i){
//     var fuck=str3.substr(i,3);
//     if(fuck==target){
//       return i
//     }else{
//       return -1;
//     }
//   }
// }
// console.log(indexOf(str3,str4))

function fuckIndex(data, target) {
  for (var i = 0; i < data.length; ++i) {
    var fuck = data[i] + data[i + 1] + data[i + 2];
    console.log(fuck);
    if (fuck === target) {
      return i;
    } else {
      return -1;
    }
  }
}
console.log(fuckIndex(str3, str4));
var shit=str3[4]+str3[5]+str3[6]
console.log(shit===str4);