let names='jishnu'

function qureve(name){
    let queue=[]

    for(i=0;i<name.length;i++){
        queue.push(name[i])
    }
    console.log(queue);

let rev=''

while(queue.length>0){
    rev=queue.shift()+rev
}

return rev

}

console.log(qureve(names));
