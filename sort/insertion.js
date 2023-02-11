// function insertSort(arr){
//     for(i=1;i<arr.length;i++){
//         let numToInsert=arr[i]
//         let j=i-1
//         while(j>=0&&arr[j]>numToInsert){
//             arr[j+1]=arr[j]
//             j=j-1
//         }
//         arr[j+1]=numToInsert
//     }
// }

let arr=[3,7,14,9,4,5]
insertion(arr)
// console.log(arr);


function insertion(arr){
    for(i=1;i<arr.length;i++){
        let num=arr[i]
        j=i-1
        while(j>=0&&arr[j]>num){
            arr[j+1]=arr[j]
            j=j-1
        }
        arr[j+1]=num
    }

    console.log(arr);
}