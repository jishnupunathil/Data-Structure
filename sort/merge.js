// function mergeSort(arr){
//     if(arr.length<2)
//     return arr

//     const mid=Math.floor(arr.length/2)
//     const leftArray=arr.slice(0,mid)
//     const rightArray=arr.slice(mid)
//     return merge(mergeSort(leftArray),mergeSort(rightArray))
// }

// function merge(leftArray,rightArray){
//     let sortedArray=[]
//     while(leftArray.length&&rightArray.length){
//         if(leftArray[0]<=rightArray[0])
//             sortedArray.push(leftArray.shift())
//         else
//         sortedArray.push(rightArray.shift())
//     }
//     return [...sortedArray,...leftArray,...rightArray]
// }



























// function mergeSort(arr){
//     if(arr.length<2)
//         return arr

//     const mid=Math.floor(arr.length/2)
//     const leftArray=arr.slice(0,mid)
//     const rightArray=arr.slice(mid)
//     return merge(mergeSort(leftArray),mergeSort(rightArray))
// }


// function merge(leftArray,rightArray){
//     let sortedArray=[]
//     while(leftArray.length&&rightArray.length){
//         if(leftArray[0]<=rightArray[0]){
//         sortedArray.push(leftArray.shift())
//         }else{
//         sortedArray.push(rightArray.shift())
//         }
//     }

//     return[...sortedArray,...leftArray,...rightArray]
// }




// function mergeSort(arr){
//     if (arr.length<2){
//         return arr
//     }

//     let mid=Math.floor(arr.length/2)
//     let left=arr.slice(0,mid)
//     let right=arr.slice(mid)
//     return merge(mergeSort(left),mergeSort(right))
// }

// function merge(left,right){
//     let sortedArray=[]
//     while(left.length&&right.length){
//     if(left[0]<=right[0]){
//         sortedArray.push(left.shift())
//     }else{
//         sortedArray.push(right.shift())
//     }
//     }

//     return[...sortedArray,...left,...right]

// }



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
        }
        else{
            sortedArray.push(rightArray.shift())
        }
    }

    return [...sortedArray,...leftArray,...rightArray]
}
let arr=[1,8,3,6,2,9]
console.log(mergeSort(arr));