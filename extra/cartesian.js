function cartesian(arr1,arr2){
    let result=[]
    for(i=0;i<arr1.length;i++){
        for(j=0;j<arr2.length;j++){
            result.push([arr1[i],arr2[j]])
        }
    }
    return result
    
}

let arr1=[1,2]
let arr2=[3,4,5,6]

console.log(cartesian(arr1,arr2))



