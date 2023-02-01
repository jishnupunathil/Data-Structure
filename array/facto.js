function factorial(n){
    let res=1
    for(i=2;i<=n;i++){
        res=res*i
    }
    return res
}

const x=factorial(7)

console.log(x);