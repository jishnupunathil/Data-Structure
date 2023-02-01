let array=[78,34,342,2235]

function insertPos(array){
pos=3
num=111
for(i=array.length-1;i>pos-1;i--){
   array[i+1]=array[i]
}
array[pos-1]=num
return array
}

console.log(insertPos(array))

function insertBeg(array){
   num=9898
   for(i=array.length-1;i>=0;i--){
      array[i+1]=array[i]
   }
   array[0]=num
   
   return array
}

console.log(insertBeg(array))


function insertEnd(array){
array[6]=809
return array
}
console.log(insertEnd(array))