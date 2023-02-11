let arr = [8, 34, 42, 235, 1005, 2378];
target = 1005;

function binary(arr) {
  low = 0;
  high = arr.length - 1;

  while (low <= high) {
    middle = Math.floor((low + high) / 2);

    if (arr[middle] == target) {
      return middle;
    } else if (arr[middle] < target) {
      low = middle + 1;
    } else {
      high = middle - 1;
    }
  }
}

console.log(binary(arr));
