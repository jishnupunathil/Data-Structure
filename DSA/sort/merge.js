function mergeSort(arr){
    if(arr.length<2){
        return arr
    }

    let middle=Math.floor(arr.length/2)
    let leftArray=arr.slice(0,middle)
    let rightArray=arr.slice(middle)
    return  merge(mergeSort(leftArray),mergeSort(rightArray))
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

let arr=[1,7,2,9,4,5]
console.log(mergeSort(arr));