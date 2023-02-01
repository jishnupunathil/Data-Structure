let arr=[78,34,342,2235]
let target=342

function linear(arr){
    for(i=0;i<arr.length;i++){
        if(arr[i]===target){
            return i 
        }
    }
}

console.log(linear(arr));