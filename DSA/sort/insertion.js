/*algorithm

step 1->if it is the first element ,consider it has sorted and return 1
step 2-> pick the next element
step 3->compare with all the elements in the sorted sublist
step 4->shift all the element in the sorted sublist that is greater than the value to be  inserted
step 5->insert the value
step 6->Repeat until list is sorted

*/

function insertion(arr){
    for (i=1;i<arr.length;i++){
        temp=arr[i]
        j=i-1

        while(j>=0&&arr[j]>temp){
            arr[j+1]=arr[j]
            j--
        }
        arr[j+1]=temp
    }
    
    console.log(arr);
}


let arr=[5,11,7,4,8,9]
insertion(arr)





















/*
function insert(arr){
    for(i=1;i<arr.length-1;i++){
        let temp=arr[i]
        j=i-1
        while(j>=0&&arr[j]>temp){
            arr[j+1]=arr[j]
            j--
        }
        a[j+1]=temp
    }
}
*/

