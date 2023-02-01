function prime(n){
    if(n<2){
        return false
    }
    // for(i=2;i<n;i++){
    for(i=2;i<=Math.sqrt(n);i++){
        if(n%i===0){
            return false
        }
    }

    return true

}
const x=prime(3)
console.log(x);