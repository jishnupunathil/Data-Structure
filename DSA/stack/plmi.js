let arr=['5','6','+','10','-']

function operation(arr){
    let stack=[]
    for(i=0;i<arr.length;i++){
        if(arr[i]=='+'){
            let a=stack.pop()
            let b=stack.pop()
            stack.push(a+b)
        }
        else if(arr[i]=='-'){
            let a=stack.pop()
            let b=stack.pop()
            stack.push(b-a)
        }else{
            stack.push(parseInt(arr[i]))
        }
    }

    console.log(stack);

}

operation(arr)