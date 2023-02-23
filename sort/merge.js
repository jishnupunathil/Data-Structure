// function mergeSort(arr) {
//   if (arr.length < 2) {
//     return arr;
//   }
//   let mid = Math.floor(arr.length / 2);
//   let leftArray = arr.slice(0, mid);
//   let rightArray = arr.slice(mid);
//   return merge(mergeSort(leftArray), mergeSort(rightArray));
// }

// function merge(leftArray, rightArray) {
//   let sortedArray = [];
//   while (leftArray.length && rightArray.length) {
//     if (leftArray[0] <= rightArray[0]) {
//       sortedArray.push(leftArray.shift());
//     } else {
//       sortedArray.push(rightArray.shift());
//     }
//   }
//   return [...sortedArray, ...leftArray, ...rightArray];
// }

let arr = [1, 8, 3, 6, 2, 9];
console.log(mergeSort(arr));



















function mergeSort(arr){
  if(arr.length<2){
    return arr
  }

  let mid=Math.floor(arr.length/2)
  let leftArray=arr.slice(0,mid)
  let rightArray=arr.slice(mid)

  return merge(mergeSort(leftArray),mergeSort(rightArray))
}

function merge(leftArray,rightArray){
  let sortedArray=[]
  while(leftArray.length&&rightArray.length){
    if(leftArray[0]<=rightArray[0]){
      sortedArray.push(leftArray.shift())
    }else{
      sortedArray.push(rightArray.shift())
    }
  }

  return [...sortedArray,...leftArray,...rightArray]
}