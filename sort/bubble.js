function bubbleSort(arr) {
  let swap;
  do {
    swap = false;
    for (i = 0; i < arr.length - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        let temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
        swap = true;
      }
    }
  } while (swap);
  console.log(arr);
}

let arr = [1, 6, 3, 7, 5, 9];
bubbleSort(arr);
