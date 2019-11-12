/* 1. 实现获取两个字符串的相同字符并生成新的字符串
'abcdef' | 'edfghi'  => 'de' */
var str1 = 'abcdef';//0,1,2,3,4,5,6
var str2 = 'edfghi';//4,3,5,6,7,8

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
  return newArr.join('');
}
var result = sameNum(str1.split(''), str2.split(''))
console.log(result);


/*2. 实现字符串的 indexOf   abcdefghi    efg => 4 */
