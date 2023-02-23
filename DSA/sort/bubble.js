/*Algorithm

step 1->Start with  first element
step 2->compare current element and next element
step 3->if current element is larger than the next element swap the elements.
        if not,move to the next element
step 4->repeat step 1-3 until list is sorted

*/


function bubble(a){
    let swap
    do{ 
          swap=false
        for(i=0;i<a.length;i++){
            if(a[i]<a[i+1]){
                let temp=a[i]
                a[i]=a[i+1]
                a[i+1]=temp
                swap=true
            }
        }
    }
    while(swap)

    console.log(a);
}

let arr=[4,1,7,31,20]

bubble(arr)

/*
function bubble(arr){
    let swap
    do{
        let swap=false
        for(i=0;i<arr.length-1;i++){
            if(arr[i]<arr[i+1]){
                let temp=arr[i]
                arr[i]=arr[i+1]
                arr[i+1]=temp
                let swap=true
            }
        }

    }while(swap)
}


*/


