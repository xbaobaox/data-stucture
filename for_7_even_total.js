var sum = 0;
for (var i = 0; i <= 100; i++) {
  if (i % 7 == 0 && i % 2 == 0) {
    sum += i;
  }
}
console.log(sum);