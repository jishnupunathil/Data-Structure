function HeapSort(array){
    for(let i=Math.floor(array.length/2-1);i>=0;i--){
        heapify(array,array.length,i)
    }
    for(let i=array.length-1;i>0;i--){
        swap(array,i,0)
        heapify(array,i,0)
    }
    return array
}


function swap(array,index1,index2){
    let temp=array[index1]
    array[index1]=array[index2]
    array[index2]=temp
}


function heapify(array,length,i){
    let left=i*2
    let right=i*2+1
    let larger=i

    if(left<length && array[left]>array[larger]){
        larger =left
    }
    if(right<length&&array[right]>array[larger]){
        larger=right
    }

    if(larger!==i){
        swap(array,i,larger)
        heapify(array,length,larger)
    }
}

let array=[6,5,0,5,4,7,80,90,231,1,-6]
console.log(HeapSort(array));