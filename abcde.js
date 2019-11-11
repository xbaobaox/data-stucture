// var str = 'abcde';
// function reverse(st) {
//   var arr=[]
//   for (var i = 0; i < st.length; i++){
//     arr.push(st[i]);
//   }
//   var revArr=[]
//   for (var j = arr.length-1; j >= 0; j--){
//     revArr.push(arr[j]);
//   }
//   return revArr.join('');
// }
// var result = reverse(str);
// console.log(result);




// var fuck = str.split('').reverse().join('');
// console.log(fuck);

var str = 'abcde';
function reverse(st) {
  var arr = []
  for (var i = 0; i < st.length; i++) {
    arr.unshift(st[i]);
  }
  return arr.join('');
}
var result = reverse(str);
console.log(result);