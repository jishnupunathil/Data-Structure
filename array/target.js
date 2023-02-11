const arr = [6, 5, 4, 3, 9, 8];
const target = 10;
function findTarget(arr, target) {
  for (i = 0; i < arr.length - 1; i++) {
    for (j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] == target) {
        return [arr[i], arr[j]];
      }
    }
  }
}
const b = findTarget(arr, target);
console.log(b);
