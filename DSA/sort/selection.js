/*    Algorithm

step 1 -> set MIN at location 0
step 2 -> search the minimum element in list
step 3 -> swap the minimum element at the location  MIN 
step 4 -> increment the Index Of MIN
step 5 -> repeat 2,3,4 until list is sorted


*/
function selection(arr){
    for(i=0;i<arr.length-1;i++){
        min=i
        for(j=i+1;j<arr.length;j++){
            if(arr[j]<arr[min]) min=j
        }
            if(min!=i){
                let temp=arr[i]
                 arr[i]=arr[min]
                 arr[min]=temp
            }
    }

    console.log(arr);
}

let arr=[8,2,1,6,4]

selection(arr)


/*
function selection(){
    for(i=0;i<arr.length;i++){
        min=i
        for(j=i+1;j<arr.length;j++){
            if(arr[i]<arr[j]){
                min=j
            }

            if(min!=0){
                let temp=arr[i]
                arr[i]=arr[min]
                arr[min]=temp
            }
        }
    }
}
*/