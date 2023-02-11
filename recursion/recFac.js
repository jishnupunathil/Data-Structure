function recFac(n) {
  if (n == 0) {
    return 1;
  }
  return n * recFac(n - 1);
}

console.log(recFac(6));
