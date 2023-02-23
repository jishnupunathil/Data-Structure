let arr=[1,2,4]

function plusone(arr){
    for(i=arr.length-1;i>=0;i--){
        if(arr[i]<9){
        arr[i]=arr[i]+1
        return arr
        }else{
            arr[i]=0
        }

    }

    arr.unshift(1);
    return arr
}

console.log(plusone(arr));