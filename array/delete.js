let array=[78,34,342,2235]


function deleteBeg(array){
    for(i=0;i<array.length-1;i++){
        array[i]=array[i+1]
    }
    array.length--
    return array
}

console.log(deleteBeg(array));



function deletePos(){
    let array=[78,34,342,2235]
    pos=3
    for(i=pos-1;i<array.length-1;i++){
        array[i]=array[i+1]
    }
    array.length--
    return array
}
console.log(deletePos());



function deleteEnd(){
    let array=[78,34,342,2235]
    array.length--
    return array
}

console.log(deleteEnd());