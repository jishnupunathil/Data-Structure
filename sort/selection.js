function selection(arr){
    for(let i=0;i<arr.length-1;i++){
        min=i
        for(let j=i+1;j<arr.length;j++){
            if(arr[j]>arr[min]){
                min=j
            }
        }
        if(min!=0){
            let temp=arr[i]
            arr[i]=arr[min]
            arr[min]=temp
        }
    }
    console.log(arr);
}

let arr=[2,5,3,1,7,8]

selection(arr)
