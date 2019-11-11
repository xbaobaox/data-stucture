// function fb(fuck) {
//   var arr = [];
//   for (var i = 0; i < fuck; ++i) {
//     function fb(i) {
//       return i <= 1 ? 1 : fb(i - 1) + fb(i - 2)
//     }
//     arr.push(fb(i));
//   }
//   console.log(arr);
// }
// fb(9);


// function fb(n) {
//   if (n <= 2) {
//     return 1;
//   }
//   return fb(n - 1) + fb(n - 2);
// }
// function arrFb(num) {
//   var arr=[1,1]
//   for (var i = 3; i < num; i++){
//     arr.push(fb(i));
//   }
//   return arr;
// }
// console.log(arrFb(5));

/* 排序 */
let arr = [];
function fibo(n) {  //6
  let fiboRet = 0;  
  if (n == 1 || n == 2) {
    fiboRet = 1;
  } else {
    fiboRet = fibo(n - 1) + fibo(n - 2);
  }
  if (!arr[n - 1]) {
    arr[n - 1] = fiboRet
  }
  return arr;
}
console.log(fibo(6))



/* 排序 */
function another(n) {
  if (n == 0) {
    return []
  } else if (n == 1) {
    return Arr = [1]
  } else if (n === 2) {
    return Arr = [1, 1];
  } else {
    var arr = another(n - 1);
    var length = arr.length;
    arr.push(arr[length - 1] + arr[length - 2]);
    return arr;
  }
}








// function febo(n) {
//   switch (n) {
//     case 0:
//       return []
//     case 1:
//       return [1]
//     case 2:
//       return [1, 1];
//     default:
//       var arr = febo(n - 1);
//       var length = arr.length
//       arr.push(arr[length - 1] + arr[length - 2]);
//       return arr
//   }
// }



