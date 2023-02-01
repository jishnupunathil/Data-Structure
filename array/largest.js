function largest(arr){

    let largest=arr[0]

    for(i=1;i<=arr.length-1;i++){
        if(arr[i]>largest){
            largest=arr[i]
        }
    }
    console.log(largest);

}
let arr=[121213,2232,4,5,78,11111]
console.log(arr);

largest(arr)


function smallest(arr){
    let smallest=arr[1]
    for(i=1;i<=arr.length-1;i++){
        if(arr[i]<smallest){
            smallest=arr[i]
        }
    }
    console.log(smallest);
}
smallest(arr)

function secondLargest(arr){
    let largest=-Infinity
    let secLarg=-Infinity

    for(i=0;i<=arr.length-1;i++){
        if(arr[i]>largest){
            secLarg=largest
            largest=arr[i]
        }
        else if(arr[i]>secLarg&&arr[i]<largest){
            secLarg=arr[i]
        }
    }
    console.log(largest);
    console.log(secLarg);
}

secondLargest(arr)

function duplicate(arra){
    let duplicate=[]

    for(i=0;i<arra.length-1;i++){
        for(j=i+1;j<arra.length;j++){

            if(arra[i]==arra[j]){
                duplicate.push(arra[i])
                break;
            }
        }
    }

    console.log(duplicate);
}

let arra=[1,2,3,1,2]
duplicate(arra)