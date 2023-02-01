
function reverse(){
    let arr=[1,4,56,7]
    console.log(arr);
let temp=0
for(i=0;i<arr.length/2;i++){
    temp=arr[i]
    arr[i]=arr[arr.length-i-1]
    arr[arr.length-i-1]=temp

    return arr
}
}

console.log(reverse());
