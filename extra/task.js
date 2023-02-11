let arr = [1, 2, 3];
let n = arr.length;
let j = 0;
for (i = n; i < n * 2; i++) {
  arr[i] = arr[j];
  j++;
}

console.log(arr);

//task 2

let str = "hello";
let b = "";
let temp = str[str.length - 1];
for (i = 0; i < str.length - 1; i++) {
  b += str[i];
}

b = temp + b;

console.log(b);
