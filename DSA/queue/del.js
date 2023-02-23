let queue=[5,6,7,8,9]
console.log(queue);
let mid=Math.floor(queue.length/2)
console.log(mid);
for(let i=0;i<=queue.length;i++){
    if(queue[i]!==queue[mid]){
        queue.push(queue.shift())
    }else{
        queue.shift()
    }
}
console.log(queue);