function recFib(n){
    if(n<2){
        return n
    }

    return recFib(n-1)+recFib(n-2)
}


console.log(recFib(7));