var sum = 0;
for (var i = 1; i <= 100; i++) {
  if (i % 7 == 0) {
    sum += i;
  }
}
console.log(sum)