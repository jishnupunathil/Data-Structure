function reverse(str) {
  let reversed = "";
  for (i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }
  return reversed;
}
let str = "jishnu";
console.log(reverse(str));
